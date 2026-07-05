// ─────────────────────────────────────────────────────────────
// D.R. Horton NC Communities — Central Data Store
// ─────────────────────────────────────────────────────────────

export interface Amenity {
  icon: string;   // lucide icon name
  label: string;
}

export interface Community {
  name: string;
  slug: string;
  priceRange: string;
  priceMin: number;
  priceMax: number;
  beds: string;
  baths: string;
  sqftRange: string;
  homeTypes: string;
  garage: string;
  usdaEligible: boolean;
  hookLine: string;
  highlights: string[];
  amenities: Amenity[];
  schools: string[];
  commuteInfo: string;
  metaTitle: string;
  metaDescription: string;
}

export interface RelocationHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface City {
  name: string;
  slug: string;
  state: string;
  heroDescription: string;
  communityCount: number;
  startingPrice: string;
  drHortonUrl: string;
  relocationHighlights: RelocationHighlight[];
  neighboringCities: string[];   // slugs
  communities: Community[];
  metaTitle: string;
  metaDescription: string;
}

// ─────────────────────────────────────────────────────────────
// CHARLOTTE
// ─────────────────────────────────────────────────────────────
const charlotte: City = {
  name: "Charlotte",
  slug: "charlotte-nc",
  state: "NC",
  heroDescription: "Discover new construction homes in North Carolina's largest city. From uptown energy to suburban serenity, Charlotte's D.R. Horton communities offer exceptional value with modern finishes and convenient locations.",
  communityCount: 6,
  startingPrice: "$310K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "Booming Job Market",
      description: "Charlotte is home to Bank of America, Lowe's, Honeywell, and Duke Energy. The city's financial sector is second only to New York, with over 91,000 finance and insurance jobs and growing opportunities in tech, healthcare, and logistics."
    },
    {
      icon: "Music",
      title: "Vibrant Lifestyle & Entertainment",
      description: "From the NoDa arts district and Whitewater Center to professional NFL, NBA, and MLS teams, Charlotte delivers a big-city lifestyle. Over 200 craft breweries, a thriving culinary scene, and year-round festivals keep residents entertained."
    },
    {
      icon: "Train",
      title: "Strong Infrastructure & Easy Commutes",
      description: "Charlotte Douglas International Airport — one of the busiest hubs on the East Coast — connects you nationwide. The LYNX light rail, expanding I-485 loop, and 20-minute average commutes make getting around effortless."
    },
    {
      icon: "DollarSign",
      title: "Affordable Cost of Living",
      description: "Charlotte's cost of living is 4% below the national average. No state income tax on retirement income, affordable property taxes, and new-construction homes starting in the mid-$200s make it a relocation sweet spot."
    },
    {
      icon: "TreePine",
      title: "Outdoor Life & Southern Culture",
      description: "Lake Norman is 30 minutes north, the Blue Ridge Mountains are 2 hours west, and the Carolina coast is 3.5 hours east. Charlotte blends Southern hospitality with a forward-thinking, diverse cultural identity."
    }
  ],
  neighboringCities: ["huntersville-nc", "mooresville-nc"],
  communities: [
    {
      name: "Reedy Creek Preserve",
      slug: "reedy-creek-preserve",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 385000,
      beds: "3–5",
      baths: "2–3",
      sqftRange: "1,618 – 2,820 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Nature-wrapped living near Reedy Creek Park with premium finishes",
      highlights: [
        "Granite countertops and stainless steel appliances standard in every home",
        "Open-concept floorplans with 9-foot ceilings and abundant natural light",
        "Adjacent to Reedy Creek Nature Preserve with miles of hiking and biking trails",
        "15-minute commute to Uptown Charlotte via I-485",
        "Energy Star certified homes with tankless water heaters and smart thermostats"
      ],
      amenities: [
        { icon: "Trees", label: "Nature Trails" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Baby", label: "Playground" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Leaf", label: "Green Spaces" }
      ],
      schools: ["Reedy Creek Elementary (0.8 mi)", "Crestdale Middle (2.1 mi)", "Ardrey Kell High (3.4 mi)"],
      commuteInfo: "15 min to Uptown Charlotte • 20 min to SouthPark • 25 min to Charlotte Douglas Airport",
      metaTitle: "Reedy Creek Preserve | New Homes Charlotte NC | DR Horton",
      metaDescription: "Explore new single-family homes at Reedy Creek Preserve in Charlotte, NC. 3-5 bedrooms starting from $310K by D.R. Horton. Nature trails, smart home tech, and quick access to Uptown."
    },
    {
      name: "Haney Townhomes",
      slug: "haney-townhomes",
      priceRange: "From the low $300s",
      priceMin: 300000,
      priceMax: 350000,
      beds: "Up to 3",
      baths: "2.5",
      sqftRange: "Up to 2,000+ sq ft",
      homeTypes: "Townhomes",
      garage: "1-Car Attached",
      usdaEligible: false,
      hookLine: "Modern townhome living with lock-and-leave convenience near Uptown",
      highlights: [
        "Contemporary townhome designs with rooftop terrace options",
        "Quartz countertops and luxury vinyl plank flooring throughout",
        "Walking distance to LYNX Blue Line for car-free commuting",
        "Low-maintenance lifestyle ideal for young professionals and first-time buyers",
        "DHI Mortgage closing cost assistance available for qualified buyers"
      ],
      amenities: [
        { icon: "Train", label: "Near Light Rail" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Dog", label: "Dog Park" },
        { icon: "ShoppingBag", label: "Near Shopping" },
        { icon: "ParkingSquare", label: "1-Car Garage" },
        { icon: "Coffee", label: "Near Restaurants" }
      ],
      schools: ["Billingsville Elementary (1.2 mi)", "Sedgefield Middle (1.8 mi)", "Olympic High (2.5 mi)"],
      commuteInfo: "8 min to Uptown Charlotte • 5 min to South End • Near LYNX Blue Line Station",
      metaTitle: "Haney Townhomes | New Construction Townhomes Charlotte NC | DR Horton",
      metaDescription: "New townhomes starting from $275K at Haney Townhomes in Charlotte, NC. Near LYNX light rail, modern finishes, and closing cost assistance by D.R. Horton."
    },
    {
      name: "Hamilton Woods",
      slug: "hamilton-woods",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 420000,
      beds: "3–4",
      baths: "2.5–3.5",
      sqftRange: "1,597 – 1,991+ sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Spacious family homes with community pool and top-rated school access",
      highlights: [
        "8 floorplan options ranging from ranch-style to two-story with bonus rooms",
        "Community pool, cabana, and resort-style amenity center included",
        "Located in highly rated Charlotte-Mecklenburg school district",
        "Owner's suites with dual vanities, garden tubs, and walk-in closets",
        "Full yard with privacy fencing and irrigation-ready landscaping"
      ],
      amenities: [
        { icon: "Waves", label: "Community Pool" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Baby", label: "Playground" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "UtensilsCrossed", label: "Cabana & Grill Area" },
        { icon: "Wifi", label: "Smart Home Tech" }
      ],
      schools: ["Hawk Ridge Elementary (0.5 mi)", "Community House Middle (1.9 mi)", "Ardrey Kell High (2.8 mi)"],
      commuteInfo: "20 min to Uptown Charlotte • 10 min to Ballantyne • 25 min to Airport",
      metaTitle: "Hamilton Woods | New Homes Charlotte NC with Pool | DR Horton",
      metaDescription: "New single-family homes at Hamilton Woods in Charlotte, NC. 3-5 bedrooms from $340K with community pool, fitness center, and top-rated schools by D.R. Horton."
    },
    {
      name: "Sonoma Hills",
      slug: "sonoma-hills",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 395000,
      beds: "3–5",
      baths: "2–3",
      sqftRange: "1,600 – 2,800+ sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Move-in ready homes with designer upgrades near Charlotte Douglas Airport",
      highlights: [
        "Move-in ready inventory homes available for quick closings",
        "Designer-selected interior packages with modern color palettes",
        "Minutes from Charlotte Douglas Airport — ideal for frequent travelers",
        "Open-concept kitchens with oversized islands and pantry storage",
        "Covered patios and landscaped yards included with every home"
      ],
      amenities: [
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Baby", label: "Tot Lot" },
        { icon: "Trees", label: "Green Spaces" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Plane", label: "Near Airport" },
        { icon: "Leaf", label: "Landscaped Yards" }
      ],
      schools: ["Steele Creek Elementary (1.1 mi)", "Kennedy Middle (2.4 mi)", "Olympic High (3.2 mi)"],
      commuteInfo: "10 min to Charlotte Douglas Airport • 18 min to Uptown Charlotte • Near I-77 & I-485",
      metaTitle: "Sonoma Hills | Move-In Ready Homes Charlotte NC | DR Horton",
      metaDescription: "Move-in ready new homes at Sonoma Hills in Charlotte, NC. 3-4 bedrooms from $295K near Charlotte Douglas Airport by D.R. Horton. Quick closings available."
    },
    {
      name: "Cardinal Creek",
      slug: "cardinal-creek",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 385000,
      beds: "3–5",
      baths: "2–2.5",
      sqftRange: "1,349 – 2,800+ sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "First-time buyer-friendly homes with zero-down DHI Mortgage options",
      highlights: [
        "Entry-level pricing perfect for first-time homebuyers in Charlotte",
        "DHI Mortgage offers zero-down payment programs for qualified buyers",
        "Hardwood-style flooring, granite counters, and stainless appliances standard",
        "Community green spaces with walking paths connecting to neighborhood parks",
        "Self-guided tour technology — tour homes on your own schedule"
      ],
      amenities: [
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Trees", label: "Walking Paths" },
        { icon: "Baby", label: "Playground" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Smartphone", label: "Self-Guided Tours" },
        { icon: "Leaf", label: "Park Access" }
      ],
      schools: ["Clear Creek Elementary (0.9 mi)", "Northeast Middle (2.0 mi)", "Mallard Creek High (2.7 mi)"],
      commuteInfo: "22 min to Uptown Charlotte • 15 min to University Area • Near I-85",
      metaTitle: "Cardinal Creek | Affordable New Homes Charlotte NC | DR Horton",
      metaDescription: "Affordable new homes from $280K at Cardinal Creek in Charlotte, NC. First-time buyer programs, zero-down options, and self-guided tours by D.R. Horton."
    },
    {
      name: "Kingsman Townhomes",
      slug: "kingsman-townhomes",
      priceRange: "From the low-to-mid $300s",
      priceMin: 310000,
      priceMax: 350000,
      beds: "3–4",
      baths: "2.5",
      sqftRange: "1,183 – 2,200+ sq ft",
      homeTypes: "Townhomes",
      garage: "1-Car Rear-Entry",
      usdaEligible: false,
      hookLine: "Stylish townhomes under $300K with rooftop deck options",
      highlights: [
        "Charlotte's most affordable new-construction townhomes under $300K",
        "Optional rooftop deck with panoramic neighborhood views",
        "Open main-level living with kitchen island seating for 4",
        "Minutes from Northlake Mall, Birkdale Village, and Lake Norman access",
        "Low HOA fees include exterior maintenance and common area landscaping"
      ],
      amenities: [
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ShoppingBag", label: "Near Shopping" },
        { icon: "Dog", label: "Pet Friendly" },
        { icon: "ParkingSquare", label: "1-Car Garage" },
        { icon: "Coffee", label: "Near Dining" },
        { icon: "Bike", label: "Bike Paths" }
      ],
      schools: ["Huntersville Elementary (1.5 mi)", "Bailey Middle (2.3 mi)", "Hopewell High (3.1 mi)"],
      commuteInfo: "25 min to Uptown Charlotte • 10 min to Northlake Mall • Near I-77",
      metaTitle: "Kingsman Townhomes | New Townhomes Under $300K Charlotte NC | DR Horton",
      metaDescription: "New townhomes under $300K at Kingsman Townhomes in Charlotte, NC. Rooftop deck options, smart home tech, and near Lake Norman access by D.R. Horton."
    }
  ],
  metaTitle: "New Homes Charlotte NC | DR Horton Communities & Prices",
  metaDescription: "Browse all D.R. Horton new construction homes in Charlotte, NC. 6 communities from $260K with modern finishes, smart home tech, and financing options. Schedule a tour today."
};

// ─────────────────────────────────────────────────────────────
// DENVER
// ─────────────────────────────────────────────────────────────
const denver: City = {
  name: "Denver",
  slug: "denver-nc",
  state: "NC",
  heroDescription: "Nestled on the eastern shore of Lake Norman, Denver offers laid-back lakeside living with easy access to Charlotte's job market. D.R. Horton's communities here blend natural beauty with new-construction quality.",
  communityCount: 1,
  startingPrice: "$350K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/denver",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "Lake Norman Economy",
      description: "Denver residents enjoy proximity to Charlotte's Fortune 500 companies while living in Lincoln County's growing economy. Major employers include Bosch, Timken, and the expanding healthcare sector at Atrium Health Lincoln."
    },
    {
      icon: "Anchor",
      title: "Premier Lake Living",
      description: "Lake Norman — NC's largest man-made lake at 32,000 acres — is Denver's backyard. Boating, paddleboarding, fishing, and waterfront dining are everyday lifestyle options, not weekend getaways."
    },
    {
      icon: "Train",
      title: "Commuter-Friendly Location",
      description: "Denver sits just off Highway 16 with a 35-minute commute to Uptown Charlotte. The town balances rural charm with connectivity — groceries, dining, and medical care are all within 10 minutes."
    },
    {
      icon: "DollarSign",
      title: "Lower Taxes, More Space",
      description: "Lincoln County property taxes are significantly lower than Mecklenburg County. Buyers get larger lots, more square footage, and lakeside proximity for less than comparable Charlotte homes."
    },
    {
      icon: "TreePine",
      title: "Small-Town Feel, Big Outdoors",
      description: "Denver's rural-meets-lakeside identity offers a slower pace without isolation. Local vineyards, farm-to-table restaurants, and the East Lincoln County park system create a tight-knit outdoor community."
    }
  ],
  neighboringCities: ["mooresville-nc", "huntersville-nc"],
  communities: [
    {
      name: "Sylvan Creek",
      slug: "sylvan-creek",
      priceRange: "From the mid-to-upper $300s",
      priceMin: 350000,
      priceMax: 410000,
      beds: "3–5",
      baths: "2–3.5",
      sqftRange: "1,618 – 2,820 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Lakeside-access single-family living near Lake Norman with premium finishes",
      highlights: [
        "Premium finishes standard: birch cabinets with crown molding and quartz countertops",
        "10-minute drive to Lake Norman public boat launches and marinas",
        "Wooded homesites with mature trees and natural privacy buffers",
        "Ranch and two-story floorplans with optional basements",
        "Energy Star certified with 16-SEER HVAC and low-E windows"
      ],
      amenities: [
        { icon: "Anchor", label: "Near Lake Norman" },
        { icon: "Trees", label: "Wooded Lots" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Leaf", label: "Nature Preserve" },
        { icon: "Shield", label: "Energy Star Certified" }
      ],
      schools: ["East Lincoln Elementary (1.3 mi)", "East Lincoln Middle (1.8 mi)", "East Lincoln High (2.5 mi)"],
      commuteInfo: "35 min to Uptown Charlotte • 10 min to Lake Norman • 15 min to Denver town center",
      metaTitle: "Sylvan Creek | New Homes Denver NC | DR Horton",
      metaDescription: "New construction homes starting from the mid-to-upper $300s at Sylvan Creek in Denver, NC. Ranch & two-story layouts near Lake Norman. Wooded lots and basements by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Homes Denver NC | Lake Norman | DR Horton",
  metaDescription: "New construction homes in Denver, NC near Lake Norman by D.R. Horton. Wooded lots from $350K. Tour Sylvan Creek today."
};

// ─────────────────────────────────────────────────────────────
// HUNTERSVILLE
// ─────────────────────────────────────────────────────────────
const huntersville: City = {
  name: "Huntersville",
  slug: "huntersville-nc",
  state: "NC",
  heroDescription: "One of Charlotte's fastest-growing suburbs, Huntersville pairs top-rated schools with a vibrant town center and quick I-77 access. D.R. Horton builds here offer premium Lake Norman-area living at new-construction value.",
  communityCount: 1,
  startingPrice: "$418K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/huntersville",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "North Mecklenburg Growth Hub",
      description: "Huntersville's business corridor along I-77 hosts Rubbermaid, American Tire Distributors, and a wave of tech startups. Proximity to Charlotte means corporate jobs are a 20-minute commute away."
    },
    {
      icon: "GraduationCap",
      title: "Top-Rated Schools",
      description: "Huntersville is in the highly rated CMS school zone with Barnette Elementary, Bailey Middle, and Hopewell High. Multiple private school options and the CPCC Huntersville campus add educational depth."
    },
    {
      icon: "Train",
      title: "I-77 Corridor Access",
      description: "Direct I-77 access puts Uptown Charlotte 20 minutes south and Lake Norman 10 minutes north. Birkdale Village and Northcross shopping centers offer local retail without the commute."
    },
    {
      icon: "DollarSign",
      title: "Suburban Value, Urban Proximity",
      description: "Huntersville delivers Lake Norman-area living at prices 15-20% below Cornelius and Davidson. New construction from D.R. Horton starts in the mid-$300s with included smart home packages."
    },
    {
      icon: "ShoppingBag",
      title: "Birkdale Village & Town Identity",
      description: "The walkable Birkdale Village mixed-use center anchors Huntersville's social scene with restaurants, boutiques, and a movie theater. Weekly farmers markets and community events create a strong neighborhood bond."
    }
  ],
  neighboringCities: ["charlotte-nc", "mooresville-nc"],
  communities: [
    {
      name: "Oak Grove Hill",
      slug: "oak-grove-hill",
      priceRange: "From the upper $300s to low $400s",
      priceMin: 380000,
      priceMax: 445000,
      beds: "3–5",
      baths: "2.5–4",
      sqftRange: "1,613 – 2,368 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Premium Huntersville homes with full basements and wooded lots",
      highlights: [
        "Full and daylight basement options — rare in the Charlotte metro market",
        "Premium wooded lots averaging 0.25+ acres with mature hardwood trees",
        "Walk-in pantries, mudrooms, and flex spaces standard in all floorplans",
        "5 minutes to Birkdale Village shopping, dining, and entertainment",
        "CMS-assigned to top-rated Barnette Elementary and Hopewell High School"
      ],
      amenities: [
        { icon: "Trees", label: "Wooded Lots" },
        { icon: "Home", label: "Basements Available" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Baby", label: "Playground" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ShoppingBag", label: "Near Birkdale Village" }
      ],
      schools: ["Barnette Elementary (1.0 mi)", "Bailey Middle (2.2 mi)", "Hopewell High (3.0 mi)"],
      commuteInfo: "20 min to Uptown Charlotte • 5 min to Birkdale Village • 15 min to Lake Norman",
      metaTitle: "Oak Grove Hill | New Homes Huntersville NC with Basements | DR Horton",
      metaDescription: "New homes with basements at Oak Grove Hill in Huntersville, NC. 3-5 bedrooms from $365K, wooded lots, top-rated schools, near Birkdale Village by D.R. Horton."
    }
  ],
  metaTitle: "DR Horton Huntersville NC | New Construction Homes & Communities",
  metaDescription: "D.R. Horton new construction homes in Huntersville, NC. Basement options, wooded lots, top-rated schools from $365K. Explore Oak Grove Hill community today."
};

// ─────────────────────────────────────────────────────────────
// SHERRILLS FORD
// ─────────────────────────────────────────────────────────────
const sherrillsFord: City = {
  name: "Sherrills Ford",
  slug: "sherrills-ford-nc",
  state: "NC",
  heroDescription: "Sherrills Ford is the Lake Norman area's best-kept secret — USDA-eligible with lakeside living, lower taxes, and a peaceful rural setting just 40 minutes from Charlotte. D.R. Horton communities here offer unbeatable value.",
  communityCount: 2,
  startingPrice: "$295K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/sherrills-ford",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "Growing Catawba County Economy",
      description: "Catawba County's diversified economy spans manufacturing, healthcare (Frye Regional Medical Center), and emerging tech. Major employers include Corning, CommScope, and the expanding Catawba Valley Medical Center."
    },
    {
      icon: "Anchor",
      title: "Western Lake Norman Access",
      description: "Sherrills Ford borders Lake Norman's quieter western shore with less boat traffic, public launches, and marinas. Year-round fishing, kayaking, and lakeside dining are part of daily life."
    },
    {
      icon: "Train",
      title: "Rural Serenity, City Accessible",
      description: "Highway 150 connects Sherrills Ford to I-77 in 15 minutes. Charlotte is a 40-minute commute, Mooresville is 20 minutes, and Hickory's employment corridor is 25 minutes west."
    },
    {
      icon: "DollarSign",
      title: "USDA Zone + Low Taxes",
      description: "Sherrills Ford's USDA eligibility means zero down payment for qualified buyers. Catawba County property taxes are among the lowest in the Lake Norman region — saving homeowners thousands annually."
    },
    {
      icon: "TreePine",
      title: "Lake Country Lifestyle",
      description: "Sherrills Ford embodies the Lake Norman country lifestyle — large lots, peaceful evenings, community farms, and a tight-knit neighborhood feel. It's where families come to slow down without disconnecting."
    }
  ],
  neighboringCities: ["mooresville-nc", "denver-nc"],
  communities: [
    {
      name: "Blackstone Bay Townhomes",
      slug: "blackstone-bay-townhomes",
      priceRange: "SOLD OUT — contact for waitlist",
      priceMin: 290000,
      priceMax: 340000,
      beds: "4",
      baths: "2.5",
      sqftRange: "2,395 – 2,570 sq ft",
      homeTypes: "Townhomes",
      garage: "2-Car Attached",
      usdaEligible: true,
      hookLine: "USDA eligible townhomes near Lake Norman — zero down payment",
      highlights: [
        "USDA eligible — zero down payment for qualified buyers",
        "Maintenance-free townhome living with HOA-covered exterior upkeep",
        "15-minute drive to Lake Norman boat ramps and waterfront dining",
        "Open-concept main level with kitchen island and walk-in pantry",
        "Catawba County property taxes — significantly lower than Mecklenburg"
      ],
      amenities: [
        { icon: "Anchor", label: "Near Lake Norman" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Dog", label: "Pet Friendly" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Shield", label: "USDA Eligible" },
        { icon: "DollarSign", label: "Low HOA" }
      ],
      schools: ["Sherrills Ford Elementary (1.5 mi)", "Mill Creek Middle (3.2 mi)", "Bandys High (5.0 mi)"],
      commuteInfo: "40 min to Charlotte • 20 min to Mooresville • 15 min to Lake Norman",
      metaTitle: "Blackstone Bay Townhomes | USDA Eligible Near Lake Norman | DR Horton",
      metaDescription: "USDA eligible townhomes at Blackstone Bay in Sherrills Ford, NC. Zero down payment, 3 bedrooms from $290K near Lake Norman by D.R. Horton."
    },
    {
      name: "Chestnut at Laurelbrook",
      slug: "chestnut-at-laurelbrook",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 425000,
      beds: "2–5",
      baths: "2–3.5",
      sqftRange: "1,497 – 3,130 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Lake-view basement homes on large lots — premium finishes",
      highlights: [
        "Premium single-family homes with optional lake-view basements",
        "Large homesites averaging 0.35 acres with natural wooded privacy",
        "Full unfinished basements with rough-in plumbing for future expansion",
        "Resort-style community amenity center with pool and fitness room",
        "10 different floorplans from ranch to two-story with loft options"
      ],
      amenities: [
        { icon: "Waves", label: "Community Pool" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Anchor", label: "Lake Views" },
        { icon: "Trees", label: "Wooded Lots" },
        { icon: "Home", label: "Basements Available" },
        { icon: "Shield", label: "Energy Star Certified" }
      ],
      schools: ["Sherrills Ford Elementary (2.0 mi)", "Mill Creek Middle (3.5 mi)", "Bandys High (5.2 mi)"],
      commuteInfo: "40 min to Charlotte • 20 min to Mooresville • 10 min to Lake Norman access",
      metaTitle: "Chestnut at Laurelbrook | Lake Norman Homes with Basements | DR Horton",
      metaDescription: "New homes with basements near Lake Norman at Chestnut at Laurelbrook in Sherrills Ford, NC. USDA eligible, 3-5 bedrooms from $335K by D.R. Horton."
    }
  ],
  metaTitle: "DR Horton Sherrills Ford NC | USDA Eligible New Homes Lake Norman",
  metaDescription: "D.R. Horton new homes in Sherrills Ford, NC. USDA eligible, zero down payment, basement options near Lake Norman from $290K. Tour our communities today."
};

// ─────────────────────────────────────────────────────────────
// TROUTMAN
// ─────────────────────────────────────────────────────────────
const troutman: City = {
  name: "Troutman",
  slug: "troutman-nc",
  state: "NC",
  heroDescription: "Troutman sits at the crossroads of I-77 and I-40, offering USDA-eligible new homes with easy access to Lake Norman, Statesville, and Charlotte. D.R. Horton communities here deliver space and value in Iredell County.",
  communityCount: 3,
  startingPrice: "$299K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/troutman",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "I-77/I-40 Interchange Advantage",
      description: "Troutman's position at the I-77/I-40 interchange provides north-south and east-west highway access. Growing employers include Lowe's HQ (15 min), Iredell Health System, and Mitchell Community College's workforce programs."
    },
    {
      icon: "Anchor",
      title: "Lake Norman's Northern Shore",
      description: "Troutman provides access to Lake Norman's less-crowded northern reaches. Public parks, boat ramps at Lake Norman State Park, and waterfront restaurants are within 15 minutes."
    },
    {
      icon: "Train",
      title: "Multi-Directional Commuting",
      description: "I-77 south reaches Charlotte in 35 minutes, I-40 east connects to the Piedmont Triad, and Statesville is 10 minutes north. Troutman is the Lake Norman area's most connected small town."
    },
    {
      icon: "DollarSign",
      title: "USDA Eligible + Maximum Value",
      description: "Troutman's USDA eligibility combined with Iredell County's moderate tax rates makes it the Lake Norman area's best value proposition. New homes start in the $280s — unheard of this close to the lake."
    },
    {
      icon: "TreePine",
      title: "Small Town Roots, Growing Future",
      description: "Troutman's downtown charm includes local shops, the ESC Park trail system, and annual festivals. The town is growing thoughtfully — adding amenities while preserving its walkable, family-first character."
    }
  ],
  neighboringCities: ["mooresville-nc", "sherrills-ford-nc"],
  communities: [
    {
      name: "Enclave at Falls Cove",
      slug: "enclave-at-falls-cove",
      priceRange: "From the low-to-mid $300s",
      priceMin: 300000,
      priceMax: 400000,
      beds: "3–5",
      baths: "2–3.5",
      sqftRange: "1,700 – 3,000 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: true,
      hookLine: "Gated community with waterfall entrance near Lake Norman State Park",
      highlights: [
        "Gated community entrance with signature waterfall feature",
        "USDA eligible — zero down payment financing available",
        "5 minutes to Lake Norman State Park for hiking, swimming, and boating",
        "Homesites back to protected wooded areas for permanent privacy",
        "Full smart home package with video doorbell, smart locks, and thermostat"
      ],
      amenities: [
        { icon: "Lock", label: "Gated Community" },
        { icon: "Anchor", label: "Near State Park" },
        { icon: "Trees", label: "Wooded Backing" },
        { icon: "Wifi", label: "Full Smart Home" },
        { icon: "Shield", label: "USDA Eligible" },
        { icon: "ParkingSquare", label: "2-Car Garage" }
      ],
      schools: ["Troutman Elementary (2.0 mi)", "Lakeshore Middle (3.8 mi)", "South Iredell High (5.0 mi)"],
      commuteInfo: "35 min to Charlotte • 15 min to Mooresville • 5 min to Lake Norman State Park",
      metaTitle: "Enclave at Falls Cove | Gated New Homes Troutman NC | DR Horton",
      metaDescription: "Gated community new homes at Enclave at Falls Cove in Troutman, NC. USDA eligible, near Lake Norman State Park, 3-5 bedrooms from $320K by D.R. Horton."
    },
    {
      name: "Calvin Creek",
      slug: "calvin-creek",
      priceRange: "From the low $300s",
      priceMin: 300000,
      priceMax: 355000,
      beds: "3–4",
      baths: "2–3",
      sqftRange: "1,500 – 2,500 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: true,
      hookLine: "Affordable USDA-eligible homes with community trails and playground",
      highlights: [
        "USDA eligible with DHI Mortgage closing cost assistance",
        "Community walking trail system connecting to neighborhood playground",
        "Ranch and two-story plans with first-floor owner's suite options",
        "Granite countertops, LVP flooring, and stainless appliances included",
        "Self-guided tour homes available — tour on your own schedule"
      ],
      amenities: [
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Baby", label: "Playground" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Shield", label: "USDA Eligible" },
        { icon: "Smartphone", label: "Self-Guided Tours" },
        { icon: "ParkingSquare", label: "2-Car Garage" }
      ],
      schools: ["Troutman Elementary (1.5 mi)", "Lakeshore Middle (3.0 mi)", "South Iredell High (4.5 mi)"],
      commuteInfo: "35 min to Charlotte • 15 min to Mooresville • 10 min to I-77",
      metaTitle: "Calvin Creek | USDA Eligible Affordable Homes Troutman NC | DR Horton",
      metaDescription: "Affordable USDA eligible new homes at Calvin Creek in Troutman, NC. 3-4 bedrooms from $285K with trails, playground, and self-guided tours by D.R. Horton."
    },
    {
      name: "Brookside",
      slug: "brookside",
      priceRange: "From the high $200s",
      priceMin: 290000,
      priceMax: 375000,
      beds: "3–5",
      baths: "2–3",
      sqftRange: "1,600 – 2,800 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: true,
      hookLine: "Creek-side homesites with oversized yards and basement options",
      highlights: [
        "Select homesites back to natural creek with mature tree canopy",
        "USDA eligible with multiple floorplans offering optional basements",
        "Oversized lots averaging 0.3 acres — among the largest in the price range",
        "Covered front porches and rear patios standard on every home",
        "Community pavilion with picnic area and open green space"
      ],
      amenities: [
        { icon: "Droplets", label: "Creek-Side Lots" },
        { icon: "Home", label: "Basements Available" },
        { icon: "Trees", label: "Mature Trees" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "Shield", label: "USDA Eligible" },
        { icon: "UtensilsCrossed", label: "Community Pavilion" }
      ],
      schools: ["Troutman Elementary (1.8 mi)", "Lakeshore Middle (3.5 mi)", "South Iredell High (4.8 mi)"],
      commuteInfo: "35 min to Charlotte • 15 min to Mooresville • Near I-77 & I-40 interchange",
      metaTitle: "Brookside | Creek-Side New Homes Troutman NC | DR Horton",
      metaDescription: "Creek-side new homes at Brookside in Troutman, NC. USDA eligible, basement options, oversized lots from $295K near Lake Norman by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Troutman NC | USDA Eligible Homes | DR Horton",
  metaDescription: "D.R. Horton new construction in Troutman, NC. 3 USDA eligible communities from $285K near Lake Norman. Basements, gated options, and smart home tech."
};

// ─────────────────────────────────────────────────────────────
// MOORESVILLE
// ─────────────────────────────────────────────────────────────
const mooresville: City = {
  name: "Mooresville",
  slug: "mooresville-nc",
  state: "NC",
  heroDescription: "Known as 'Race City USA,' Mooresville combines Lake Norman waterfront access with a thriving downtown and NASCAR heritage. D.R. Horton communities here deliver premium finishes at attainable Lake Norman-area pricing.",
  communityCount: 2,
  startingPrice: "$319K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/mooresville",
  relocationHighlights: [
    {
      icon: "Briefcase",
      title: "Race City Economy & Beyond",
      description: "Mooresville's economy extends beyond NASCAR — Lowe's corporate HQ is 5 minutes away, and the medical, manufacturing, and professional services sectors are expanding rapidly along the I-77 corridor."
    },
    {
      icon: "Anchor",
      title: "Lake Norman's Primary Address",
      description: "Mooresville has more Lake Norman shoreline than any other town. Public parks, marinas, waterfront restaurants, and the lakeside charm of downtown Mooresville make water access a way of life."
    },
    {
      icon: "Train",
      title: "Central Lake Norman Location",
      description: "I-77 runs directly through Mooresville, putting Charlotte 30 minutes south and Statesville 15 minutes north. Exit 28/33/36 corridor offers retail, dining, and services within minutes."
    },
    {
      icon: "DollarSign",
      title: "Iredell County Tax Advantage",
      description: "Iredell County property taxes are 20-30% lower than Mecklenburg. Combined with new-construction pricing starting in the low $300s, Mooresville offers premium lake-area living at reasonable cost."
    },
    {
      icon: "Flag",
      title: "Downtown Culture & NASCAR Heritage",
      description: "Historic downtown Mooresville features local breweries, boutique shopping, and farm-to-table dining. The NASCAR Technical Institute and race team shops give the town its unique 'Race City USA' identity."
    }
  ],
  neighboringCities: ["huntersville-nc", "troutman-nc"],
  communities: [
    {
      name: "Brantley",
      slug: "brantley",
      priceRange: "From the low $300s",
      priceMin: 300000,
      priceMax: 390000,
      beds: "3–5",
      baths: "2–3",
      sqftRange: "1,700 – 2,900 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Family community with pool and playground near downtown Mooresville",
      highlights: [
        "Resort-style community pool and splash pad for families",
        "10-minute drive to downtown Mooresville dining and shopping",
        "Multiple ranch floorplans for single-level living enthusiasts",
        "Full landscaping package and sodded yards included",
        "15 minutes to Lowe's Corporate HQ and I-77 employment corridor"
      ],
      amenities: [
        { icon: "Waves", label: "Pool & Splash Pad" },
        { icon: "Baby", label: "Playground" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "2-Car Garage" },
        { icon: "Leaf", label: "Landscaped Yards" }
      ],
      schools: ["South Elementary (1.2 mi)", "Mooresville Middle (2.5 mi)", "Mooresville High (3.0 mi)"],
      commuteInfo: "30 min to Charlotte • 10 min to Downtown Mooresville • 15 min to Lowe's HQ",
      metaTitle: "Brantley | New Homes Mooresville NC with Pool | DR Horton",
      metaDescription: "New homes with community pool at Brantley in Mooresville, NC. 3-5 bedrooms from $310K near downtown Mooresville and Lake Norman by D.R. Horton."
    },
    {
      name: "Shepherds Farm",
      slug: "shepherds-farm",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 415000,
      beds: "3–5",
      baths: "2.5–4",
      sqftRange: "1,900 – 3,300 sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Upscale community with clubhouse, fitness center, and Lake Norman access",
      highlights: [
        "Full-amenity community with clubhouse, fitness center, and fire pit lounge",
        "Premium floorplans with optional sunrooms, lofts, and bonus rooms",
        "Gourmet kitchens with 42-inch cabinets, quartz counters, and tile backsplash",
        "Less than 10 minutes to Lake Norman public access points",
        "Master-planned community with street trees and sidewalks throughout"
      ],
      amenities: [
        { icon: "Waves", label: "Community Pool" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Flame", label: "Fire Pit Lounge" },
        { icon: "Home", label: "Clubhouse" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Wifi", label: "Smart Home Tech" }
      ],
      schools: ["Park View Elementary (0.8 mi)", "Mooresville Middle (2.0 mi)", "Mooresville High (2.8 mi)"],
      commuteInfo: "30 min to Charlotte • 8 min to Downtown Mooresville • 10 min to Lake Norman",
      metaTitle: "Shepherds Farm | Upscale New Homes Mooresville NC | DR Horton",
      metaDescription: "Upscale new homes at Shepherds Farm in Mooresville, NC. Clubhouse, fitness center, pool, 3-5 bedrooms from $325K near Lake Norman by D.R. Horton."
    }
  ],
  metaTitle: "DR Horton Mooresville NC | New Homes Near Lake Norman",
  metaDescription: "D.R. Horton new homes in Mooresville, NC near Lake Norman. Community pools, fitness centers, and family amenities from $310K. Tour Brantley and Shepherds Farm."
};

// ─────────────────────────────────────────────────────────────
// INDIAN TRAIL
// ─────────────────────────────────────────────────────────────
const indianTrail: City = {
  name: "Indian Trail",
  slug: "indian-trail-nc",
  state: "NC",
  heroDescription: "Southeast Charlotte's most popular suburb, Indian Trail combines top-ranked Union County schools with exceptionally low property taxes and easy access to I-485.",
  communityCount: 1,
  startingPrice: "$325K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/indian-trail",
  relocationHighlights: [
    {
      icon: "MapPin",
      title: "Popular Charlotte Suburb",
      description: "Indian Trail is one of Union County's fastest-growing communities, offering small-town charm with exceptional access to Charlotte and the I-485 loop."
    },
    {
      icon: "GraduationCap",
      title: "Outstanding Union County Schools",
      description: "Served by Union County Public Schools, consistently rated among the top school districts in NC for academic performance."
    },
    {
      icon: "DollarSign",
      title: "Lower Property Taxes",
      description: "Union County property taxes are lower than Mecklenburg County, giving homeowners immediate savings compared to Charlotte city limits."
    },
    {
      icon: "ShoppingBag",
      title: "Retail & Community Identity",
      description: "Stallings Village, local dining, and the growing Indian Trail Town Center provide convenient shopping, parks, and seasonal family events."
    },
    {
      icon: "TrendingUp",
      title: "Strong Appreciation Market",
      description: "The area has seen consistent appreciation driven by Charlotte buyers seeking more space, top schools, and affordable tax rates."
    }
  ],
  neighboringCities: ["charlotte-nc"],
  communities: [
    {
      name: "Sanctuary at Southgate",
      slug: "sanctuary-at-southgate",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 410000,
      beds: "3–5",
      baths: "2–3",
      sqftRange: "1,400 – 2,800+ sq ft",
      homeTypes: "Single-Family & Townhomes",
      garage: "2-Car Garage",
      usdaEligible: false,
      hookLine: "Ranch & two-story single-family homes + townhomes with pool & cabana",
      highlights: [
        "Diverse product mix with both single-family homes and townhomes in the same community",
        "Community pool and cabana opening soon — a premium resort-style amenity",
        "Up to $20,000 in closing cost assistance available ($10,000 with any lender + $10,000 with DHI Mortgage)",
        "Open floorplan designs with birch cabinets, quartz countertops, and stainless-steel appliances",
        "Smart home technology package included — giving buyers connected living from day one"
      ],
      amenities: [
        { icon: "Waves", label: "Pool & Cabana" },
        { icon: "Baby", label: "Playground" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "2-Car Garage" }
      ],
      schools: ["Sun Valley Elementary (1.1 mi)", "Sun Valley Middle (2.3 mi)", "Sun Valley High (2.9 mi)"],
      commuteInfo: "25 min to Uptown Charlotte • 15 min to Matthews • Easy I-485 Access",
      metaTitle: "Sanctuary at Southgate | New Homes Indian Trail NC | DR Horton",
      metaDescription: "Explore new single-family homes and townhomes starting from the mid-$300s at Sanctuary at Southgate in Indian Trail, NC. Pools, trails, and smart home tech."
    }
  ],
  metaTitle: "New Construction Homes Indian Trail NC | DR Horton Communities",
  metaDescription: "Discover new homes in Indian Trail, NC by D.R. Horton. Union County schools, lower property taxes, and single-family or townhome options starting from $325K."
};

// ─────────────────────────────────────────────────────────────
// CONCORD
// ─────────────────────────────────────────────────────────────
const concord: City = {
  name: "Concord",
  slug: "concord-nc",
  state: "NC",
  heroDescription: "Concord features premium shopping at Concord Mills, world-class racing at Charlotte Motor Speedway, and highly rated Cabarrus County schools, all within 20 minutes of Uptown Charlotte.",
  communityCount: 1,
  startingPrice: "$310K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/concord",
  relocationHighlights: [
    {
      icon: "Flag",
      title: "Home of NASCAR Racing",
      description: "Concord is home to Charlotte Motor Speedway, hosting premier NASCAR events like the Coca-Cola 600, making it a hub for motorsport culture."
    },
    {
      icon: "ShoppingBag",
      title: "Premium Shopping & Retail",
      description: "Concord Mills Mall is one of the largest retail and entertainment centers in the Southeast, offering incredible dining, shopping, and aquarium experiences."
    },
    {
      icon: "Briefcase",
      title: "Economic Growth Hub",
      description: "Major distribution, healthcare (Atrium Health Cabarrus), and industrial sectors drive a robust job market and substantial economic expansion."
    },
    {
      icon: "GraduationCap",
      title: "Excellent Cabarrus Schools",
      description: "Concord's public schools consistently rank high for performance, academic diversity, and athletic achievement."
    },
    {
      icon: "Train",
      title: "Incredible Metro Proximity",
      description: "I-85 and I-485 connect Concord directly to Uptown Charlotte and surrounding submarkets in under 20 minutes."
    }
  ],
  neighboringCities: ["charlotte-nc", "huntersville-nc"],
  communities: [
    {
      name: "Skybrook Corners Townhomes",
      slug: "skybrook-corners-townhomes",
      priceRange: "From the low-to-mid $300s",
      priceMin: 310000,
      priceMax: 360000,
      beds: "3–4",
      baths: "2.5–3",
      sqftRange: "Up to 2,438 sq ft",
      homeTypes: "Townhomes",
      garage: "1–2-Car Attached",
      usdaEligible: false,
      hookLine: "desirable Skybrook area townhomes with bedroom on main option",
      highlights: [
        "Nestled in the highly desirable Skybrook area of Concord — a premium Huntersville/Concord border address",
        "Up to 2,438 sq. ft. with 3–4 bedrooms and 2.5–3 baths — among the largest townhome floorplans available",
        "Bedroom on main level option available — ideal for guest suites, accessibility, or home office setups",
        "Birch cabinets with crown molding and quartz countertops as standard — luxury inclusions at an approachable price",
        "Smart home technology package included for modern, connected townhome living"
      ],
      amenities: [
        { icon: "Home", label: "Main Level Bedroom" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "1-2-Car Garage" },
        { icon: "ShoppingBag", label: "Near Shopping" }
      ],
      schools: ["Cox Mill Elementary (1.5 mi)", "Cox Mill Middle (2.1 mi)", "Cox Mill High (2.8 mi)"],
      commuteInfo: "20 min to Uptown Charlotte • 5 min to Birkdale Village • 12 min to Concord Mills",
      metaTitle: "Skybrook Corners Townhomes | New Townhomes Concord NC | DR Horton",
      metaDescription: "Explore luxury townhomes at Skybrook Corners in Concord, NC. 3-4 bedrooms starting from the low-to-mid $300s with main-level bedroom options by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Homes Concord NC | DR Horton Communities",
  metaDescription: "Browse new construction homes and townhomes in Concord, NC by D.R. Horton. Top Cabarrus County schools and minutes from Charlotte Motor Speedway."
};

// ─────────────────────────────────────────────────────────────
// LINCOLNTON
// ─────────────────────────────────────────────────────────────
const lincolnton: City = {
  name: "Lincolnton",
  slug: "lincolnton-nc",
  state: "NC",
  heroDescription: "Located west of Lake Norman, Lincolnton offers historical heritage, mountain foothills access, and low Lincoln County property taxes with seamless Charlotte commuting.",
  communityCount: 2,
  startingPrice: "$306K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/lincolnton",
  relocationHighlights: [
    {
      icon: "History",
      title: "Historic Piedmont Charm",
      description: "Incorporated in 1785 and the second oldest town west of the Catawba River, Lincolnton offers a rich historical heritage combined with modern community development."
    },
    {
      icon: "Trees",
      title: "Carolina Thread Trail & Outdoors",
      description: "Access the Carolina Thread Trail system, local rivers, and nearby parks for hiking, biking, fishing, and kayaking."
    },
    {
      icon: "Anchor",
      title: "Lake Norman Within Reach",
      description: "The shores of Lake Norman are minutes away, allowing residents to enjoy a water lifestyle without paying the premium lake address price."
    },
    {
      icon: "Apple",
      title: "Vibrant Local Culture",
      description: "Home of the annual Apple Festival and downtown parades, Lincolnton boasts a proud local community and tight-knit identity."
    },
    {
      icon: "DollarSign",
      title: "Lincoln County Value",
      description: "Lincoln County property taxes are among the lowest in the Charlotte metro area, delivering incredible buying power for relocators."
    }
  ],
  neighboringCities: ["denver-nc", "charlotte-nc"],
  communities: [
    {
      name: "Clark Creek Landing",
      slug: "clark-creek-landing",
      priceRange: "From the high $200s to low $400s",
      priceMin: 290000,
      priceMax: 410000,
      beds: "3–5",
      baths: "2.5",
      sqftRange: "1,400 – 2,820 sq ft",
      homeTypes: "Single-Family & Townhomes",
      garage: "2-Car Garage",
      usdaEligible: false,
      hookLine: "Both single-family homes AND townhomes available with pool & cabana",
      highlights: [
        "Both single-family homes AND townhomes available in one community — maximum buyer flexibility",
        "12 single-family floorplans including ranch and two-story options — one of the largest selections in the market",
        "3 townhome floorplans offer 1,400+ sq. ft. with 3 beds, 2.5 baths, and 2-car garages",
        "Community amenities include a pool and cabana, playground, and dog park — a complete lifestyle package",
        "Lincolnton Middle School (0.9 miles) and Lincolnton High School (3.5 miles) are exceptionally convenient"
      ],
      amenities: [
        { icon: "Waves", label: "Pool & Cabana" },
        { icon: "Baby", label: "Playground" },
        { icon: "Dog", label: "Dog Park" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "2-Car Garage" }
      ],
      schools: ["Lincolnton Elementary (1.2 mi)", "Lincolnton Middle (0.9 mi)", "Lincolnton High (3.5 mi)"],
      commuteInfo: "35 min to Charlotte • 20 min to Hickory • 15 min to Denver",
      metaTitle: "Clark Creek Landing | New Homes Lincolnton NC | DR Horton",
      metaDescription: "New single-family homes and townhomes starting from the high $200s at Clark Creek Landing in Lincolnton, NC. Pools, playgrounds, and top-rated schools."
    },
    {
      name: "Clark Creek Townhomes",
      slug: "clark-creek-townhomes",
      priceRange: "From the high $200s",
      priceMin: 280000,
      priceMax: 320000,
      beds: "3",
      baths: "2.5",
      sqftRange: "1,416 – 1,429 sq ft",
      homeTypes: "Townhomes",
      garage: "1-Car Garage",
      usdaEligible: false,
      hookLine: "Affordable new townhomes with pool & cabana near downtown",
      highlights: [
        "Most affordable entry point into the Lincolnton DR Horton portfolio — ideal for first-time buyers",
        "3 floorplans available with 3 bedrooms and 2.5 baths, maximizing livability",
        "Community pool and cabana amenity included — resort-style feature",
        "Quartz countertops and birch cabinets with crown molding are standard",
        "Smart home technology package allows buyers to start connected living"
      ],
      amenities: [
        { icon: "Waves", label: "Pool & Cabana" },
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ParkingSquare", label: "1-Car Garage" },
        { icon: "Leaf", label: "Low Maintenance" }
      ],
      schools: ["Lincolnton Elementary (1.5 mi)", "Lincolnton Middle (1.2 mi)", "Lincolnton High (3.8 mi)"],
      commuteInfo: "35 min to Charlotte • 18 min to Denver • 5 min to Downtown Lincolnton",
      metaTitle: "Clark Creek Townhomes | New Construction Townhomes Lincolnton NC | DR Horton",
      metaDescription: "Affordable new townhomes from the high $200s at Clark Creek Townhomes in Lincolnton, NC with community pool and cabana by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Homes Lincolnton NC | DR Horton Communities",
  metaDescription: "Browse new construction homes and townhomes in Lincolnton, NC by D.R. Horton. Highly affordable layouts, pool amenities, and lower property taxes from $306K."
};

// ─────────────────────────────────────────────────────────────
// STATESVILLE
// ─────────────────────────────────────────────────────────────
const statesville: City = {
  name: "Statesville",
  slug: "statesville-nc",
  state: "NC",
  heroDescription: "Located at the strategic intersection of I-77 and I-40, Statesville features a vibrant historic downtown and a host of local festivals, all just minutes from Lake Norman.",
  communityCount: 1,
  startingPrice: "$408K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte/statesville",
  relocationHighlights: [
    {
      icon: "Music",
      title: "Festival Capital of NC",
      description: "Statesville hosts the Carolina BalloonFest, the Pumpkin Festival, and the Full Bloom Film Festival, presenting a rich community events calendar."
    },
    {
      icon: "MapPin",
      title: "Strategic Highway Location",
      description: "Sitting at the intersection of I-77 and I-40, Statesville offers effortless travel to Charlotte, Winston-Salem, and Asheville."
    },
    {
      icon: "Anchor",
      title: "Lakeside Living Access",
      description: "Just minutes from southern Lake Norman, Statesville residents enjoy boating, recreation, and dining without the lake-address price premium."
    },
    {
      icon: "Briefcase",
      title: "Thriving Local Economy",
      description: "Strong employment centers supported by Iredell Memorial Hospital, logistics, advanced manufacturing, and Lowe's corporate HQ nearby."
    },
    {
      icon: "Home",
      title: "Exceptional Value and Quality",
      description: "Statesville consistently offers some of the most competitive prices for larger homesites and structural designs in the Charlotte Metro."
    }
  ],
  neighboringCities: ["troutman-nc", "mooresville-nc"],
  communities: [
    {
      name: "Wallace Springs",
      slug: "wallace-springs",
      priceRange: "From the upper $300s to low $400s",
      priceMin: 380000,
      priceMax: 440000,
      beds: "3–5",
      baths: "2.5–3",
      sqftRange: "1,764 – 3,488 sq ft",
      homeTypes: "Single Family",
      garage: "2–3-Car Garage",
      usdaEligible: false,
      hookLine: "Ranch & two-story homes with pool, cabana, and 2-3 car garages",
      highlights: [
        "One of the largest floor plan ranges of any DR Horton community (1,764–3,488 sq. ft.) offering options from starter to luxury",
        "2 AND 3-car garage options available — exceptional for buyers with boats, RVs, or home workshops",
        "Pool and cabana, walking trails, and playground create a complete resort-style community",
        "Durable vinyl siding with brick and stone elevation options, 36\" birch cabinets, quartz countertops, and luxury vinyl flooring throughout",
        "Spacious 9-foot ceilings throughout create an open, airy feeling in every room"
      ],
      amenities: [
        { icon: "Waves", label: "Pool & Cabana" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Baby", label: "Playground" },
        { icon: "ParkingSquare", label: "2-3-Car Garage" },
        { icon: "Wifi", label: "Smart Home Tech" }
      ],
      schools: ["Statesville Elementary (1.3 mi)", "Statesville Middle (2.1 mi)", "Statesville High (3.0 mi)"],
      commuteInfo: "35 min to Charlotte • 10 min to Troutman • 15 min to Lake Norman Access",
      metaTitle: "Wallace Springs | New Construction Homes Statesville NC | DR Horton",
      metaDescription: "Explore new ranch and two-story single-family homes with 2-3 car garages at Wallace Springs in Statesville, NC. Resort pool, cabana, and trails by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Homes Statesville NC | DR Horton Communities",
  metaDescription: "Discover new construction homes in Statesville, NC by D.R. Horton. Top highway access, local festivals, and large homesites starting from $408K."
};

// ─────────────────────────────────────────────────────────────
// BALLANTYNE
// ─────────────────────────────────────────────────────────────
const ballantyne: City = {
  name: "Ballantyne",
  slug: "ballantyne-nc",
  state: "NC",
  heroDescription: "As South Charlotte's premier luxury address, Ballantyne combines high-end retail, upscale country clubs, and top-performing schools with beautiful D.R. Horton communities.",
  communityCount: 2,
  startingPrice: "$450K",
  drHortonUrl: "https://www.drhorton.com/north-carolina/charlotte",
  relocationHighlights: [
    {
      icon: "Award",
      title: "South Charlotte Luxury",
      description: "Ballantyne is famous for its upscale lifestyle, high-end shopping plazas, five-star golf resorts, and fine dining corridors."
    },
    {
      icon: "GraduationCap",
      title: "Top-Tier Public Schools",
      description: "Assigned to the highest-performing public schools in Mecklenburg County, including top-tier middle and high schools."
    },
    {
      icon: "Briefcase",
      title: "Ballantyne Corporate Park",
      description: "Home to a massive corporate center hosting regional HQ offices for major national financial, technology, and insurance institutions."
    },
    {
      icon: "MapPin",
      title: "Incredible I-485 Access",
      description: "Direct highway placement provides a seamless commute to Uptown Charlotte, South End, and the Charlotte Douglas Airport."
    },
    {
      icon: "Heart",
      title: "Charming Sidewalk Lifestyle",
      description: "Manicured streetscapes, walking paths, community parks, and highly active local country clubs provide an elite residential identity."
    }
  ],
  neighboringCities: ["charlotte-nc", "indian-trail-nc"],
  communities: [
    {
      name: "Hamilton Woods at Ballantyne",
      slug: "hamilton-woods",
      priceRange: "From the mid-$300s",
      priceMin: 350000,
      priceMax: 420000,
      beds: "3–4",
      baths: "2.5–3.5",
      sqftRange: "1,597 – 1,991+ sq ft",
      homeTypes: "Single Family",
      garage: "2-Car Attached",
      usdaEligible: false,
      hookLine: "Prestigious family homes near Ballantyne Corporate Park with top-rated schools",
      highlights: [
        "Desirable South Charlotte/Ballantyne location with unmatched highway and employment access",
        "Assigned to highly ranked South Charlotte schools including top-performing elementary",
        "Modern open-concept floorplans standard with quartz countertops and stainless appliances",
        "Community pool, clubhouse, and resort-style amenity center fully included",
        "Energy Star certified construction with smart home controls pre-wired"
      ],
      amenities: [
        { icon: "Waves", label: "Community Pool" },
        { icon: "Dumbbell", label: "Fitness Center" },
        { icon: "Home", label: "Clubhouse" },
        { icon: "Trees", label: "Walking Trails" },
        { icon: "Wifi", label: "Smart Home Tech" }
      ],
      schools: ["Hawk Ridge Elementary (0.5 mi)", "Community House Middle (1.9 mi)", "Ardrey Kell High (2.8 mi)"],
      commuteInfo: "20 min to Uptown Charlotte • 5 min to Ballantyne Corporate Park • Easy I-485 Access",
      metaTitle: "Hamilton Woods | New Homes near Ballantyne NC | DR Horton",
      metaDescription: "Discover luxury single-family homes near Ballantyne, NC at Hamilton Woods. Top schools, community pool, and close to corporate centers by D.R. Horton."
    },
    {
      name: "Kingsman Townhomes at Ballantyne",
      slug: "kingsman-townhomes",
      priceRange: "From the low-to-mid $300s",
      priceMin: 310000,
      priceMax: 350000,
      beds: "3–4",
      baths: "2.5",
      sqftRange: "1,183 – 2,200+ sq ft",
      homeTypes: "Townhomes",
      garage: "1-Car Rear-Entry",
      usdaEligible: false,
      hookLine: "Stylish, low-maintenance townhomes near Ballantyne Corporate Park",
      highlights: [
        "Highly affordable new construction townhomes under $350K in the South Charlotte region",
        "Rooftop deck option providing scenic neighborhood views and outdoor leisure spaces",
        "Minutes from Ballantyne Corporate Park, Northlake Mall, and Lake Norman corridors",
        "Low-maintenance HOA includes complete exterior and landscape maintenance",
        "Smart home technology package pre-wired and included as standard"
      ],
      amenities: [
        { icon: "Wifi", label: "Smart Home Tech" },
        { icon: "ShoppingBag", label: "Near Shopping" },
        { icon: "ParkingSquare", label: "1-Car Garage" },
        { icon: "Coffee", label: "Near Dining" }
      ],
      schools: ["Huntersville Elementary (1.5 mi)", "Bailey Middle (2.3 mi)", "Hopewell High (3.1 mi)"],
      commuteInfo: "25 min to Uptown Charlotte • 8 min to Ballantyne Village • 5 min to I-485",
      metaTitle: "Kingsman Townhomes | New Townhomes near Ballantyne NC | DR Horton",
      metaDescription: "Low-maintenance new construction townhomes from the low-to-mid $300s near Ballantyne, NC. Rooftop deck options and smart home package by D.R. Horton."
    }
  ],
  metaTitle: "New Construction Homes Ballantyne NC | South Charlotte | DR Horton",
  metaDescription: "Explore new construction homes and townhomes in prestigious Ballantyne, NC by D.R. Horton. Top Mecklenburg County schools and quick access to corporate centers."
};

// ─────────────────────────────────────────────────────────────
// EXPORTS
// ─────────────────────────────────────────────────────────────
export const cities: City[] = [
  charlotte,
  denver,
  huntersville,
  sherrillsFord,
  troutman,
  mooresville,
  indianTrail,
  concord,
  lincolnton,
  statesville,
  ballantyne
];

export function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug);
}

export function getCommunityBySlug(citySlug: string, communitySlug: string): Community | undefined {
  const city = getCityBySlug(citySlug);
  if (!city) return undefined;
  return city.communities.find(c => c.slug === communitySlug);
}

export function getAllCommunities(): (Community & { cityName: string; citySlug: string })[] {
  return cities.flatMap(city =>
    city.communities.map(community => ({
      ...community,
      cityName: city.name,
      citySlug: city.slug
    }))
  );
}

export function getFeaturedCommunities(): (Community & { cityName: string; citySlug: string })[] {
  const featuredSlugs = [
    "reedy-creek-preserve",
    "sylvan-creek",
    "oak-grove-hill",
    "chestnut-at-laurelbrook",
    "enclave-at-falls-cove",
    "shepherds-farm"
  ];
  return getAllCommunities().filter(c => featuredSlugs.includes(c.slug));
}
