"use client";

import { useEffect, useState } from "react";
import { Lock, ArrowRight } from "lucide-react";

/**
 * Private-preview PIN entry. Posts to /api/unlock, which verifies the PIN
 * server-side and sets the httpOnly access cookie; a full-page navigation
 * then lets src/proxy.ts wave the visitor through.
 *
 * Invisible to normal visitors — renders nothing unless the URL carries the
 * ?dev flag (e.g. /coming-soon/?dev), so the public page shows no trace of
 * a PIN field, not even in the DOM.
 */
export default function PinGate() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(new URLSearchParams(window.location.search).has("dev"));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (busy || pin.length < 4) return;
    setBusy(true);
    setError(false);

    try {
      // Trailing slash avoids the trailingSlash:true 308 redirect round-trip.
      const res = await fetch("/api/unlock/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });
      if (res.ok) {
        // Full navigation (not router.push) so the proxy re-evaluates the
        // request with the freshly set cookie.
        window.location.href = "/";
        return;
      }
      setError(true);
      setPin("");
    } catch {
      setError(true);
    } finally {
      setBusy(false);
    }
  };

  if (!visible) return null;

  return (
    <form className={`cs-gate${error ? " cs-gate-error" : ""}`} onSubmit={handleSubmit}>
      <label className="cs-gate-label" htmlFor="preview-pin">
        <Lock size={12} /> Private preview access
      </label>
      <div className="cs-gate-row">
        <input
          id="preview-pin"
          className="cs-gate-input"
          type="password"
          inputMode="numeric"
          autoComplete="one-time-code"
          maxLength={4}
          placeholder="••••"
          value={pin}
          onChange={(e) => {
            setPin(e.target.value.replace(/\D/g, ""));
            setError(false);
          }}
          aria-label="4-digit preview PIN"
          aria-invalid={error}
        />
        <button type="submit" className="btn btn-primary cs-gate-btn" disabled={busy || pin.length < 4}>
          {busy ? "Checking…" : "Unlock"} <ArrowRight size={14} />
        </button>
      </div>
      <p className="cs-gate-hint" role="status">
        {error ? "Incorrect PIN — please try again." : "Enter your 4-digit PIN to preview the site."}
      </p>
    </form>
  );
}
