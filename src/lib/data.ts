export type ProductCategory =
  | "power-wheelchairs"
  | "manual-wheelchairs"
  | "seating-positioning"
  | "power-scooters"
  | "walkers-rollators"
  | "transfer-aids"
  | "accessories";

export interface Product {
  slug: string;
  name: string;
  brand: string;
  manufacturer: string;
  category: ProductCategory;
  categoryLabel: string;
  tagline: string;
  image: string;
  isFeatured?: boolean;
  badges: string[];
  goodFor: string[];
  notIdealFor: string[];
  specs: { label: string; value: string }[];
  description: string;
  crtRequired: boolean;
}

export const products: Product[] = [
  // ─── Power Wheelchairs ───────────────────────────────────────────────────────
  {
    slug: "permobil-m3-corpus",
    name: "Permobil M3 Corpus",
    brand: "Permobil",
    manufacturer: "Permobil",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Rear-wheel drive rehab power chair with full Corpus 3D seating integration",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible", "Custom Fit"],
    goodFor: [
      "Full-time power chair users with complex seating needs",
      "Users needing custom postural support",
      "Indoor and outdoor community use",
      "Those qualifying for Medicare K0835–K0840",
    ],
    notIdealFor: [
      "Occasional or part-time power chair users",
      "Individuals who can self-propel manually",
    ],
    specs: [
      { label: "Drive System", value: "Rear-wheel drive" },
      { label: "Max Speed", value: "6 mph (9.6 km/h)" },
      { label: "Range", value: "Up to 15 miles (24 km)" },
      { label: "Weight Capacity", value: "300 lbs (136 kg)" },
      { label: "Seating System", value: "Corpus 3D (custom configured)" },
      { label: "Electronics", value: "Permobil R-net" },
      { label: "Drive Configuration", value: "6-wheel contact" },
      { label: "Turning Radius", value: "20.1 inches" },
    ],
    description:
      "The Permobil M3 Corpus pairs the M3 power base with the Corpus 3D seating system, custom-configured by our certified ATPs to match your exact body dimensions and functional goals. The 6-wheel contact design provides stable, responsive rear-wheel drive for community use. Medicare Part B and most private insurers cover this chair with completed clinical documentation and a Letter of Medical Necessity.",
    crtRequired: true,
  },
  {
    slug: "permobil-f5-corpus-vs",
    name: "Permobil F5 Corpus VS",
    brand: "Permobil",
    manufacturer: "Permobil",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Front-wheel drive power chair with integrated vertical standing system",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible", "Active Positioning"],
    goodFor: [
      "Users who benefit clinically from upright standing",
      "Those with spinal cord injury or MS who need standing for bone density",
      "Full-time power chair users seeking advanced positioning",
      "Users with pressure management needs",
    ],
    notIdealFor: [
      "Users who do not have clinical indication for standing",
      "Environments without space for standing position",
    ],
    specs: [
      { label: "Drive System", value: "Front-wheel drive" },
      { label: "Standing Range", value: "0–90° (power standing)" },
      { label: "Tilt Range", value: "0–45°" },
      { label: "Recline Range", value: "90–175°" },
      { label: "Leg Elevation", value: "Yes — power" },
      { label: "Max Speed", value: "6 mph" },
      { label: "Weight Capacity", value: "265 lbs (120 kg)" },
      { label: "Electronics", value: "R-net with iSEAT" },
    ],
    description:
      "The Permobil F5 Corpus VS (Vertical Stander) integrates a power standing system directly into the power base, enabling clinically indicated standing without a separate device. Tilt, recline, and leg elevation combine with vertical standing for complete postural management. This chair is appropriate for users with a clinical prescription for standing and is evaluated collaboratively with your OT or PT.",
    crtRequired: true,
  },
  {
    slug: "permobil-c400-corpus",
    name: "Permobil C400 Corpus",
    brand: "Permobil",
    manufacturer: "Permobil",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Mid-wheel drive power chair for tight indoor navigation with full positioning",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    badges: ["CRT Required", "Insurance Eligible", "Tilt-in-Space"],
    goodFor: [
      "Full-time users who need excellent indoor maneuverability",
      "Those requiring tilt for pressure management",
      "Users in smaller homes or care facilities",
      "Complex seating and positioning needs",
    ],
    notIdealFor: [
      "Primarily outdoor or rough-terrain users",
      "Users who do not need power positioning",
    ],
    specs: [
      { label: "Drive System", value: "Mid-wheel drive" },
      { label: "Turning Radius", value: "17.9 inches" },
      { label: "Tilt Range", value: "0–50°" },
      { label: "Recline", value: "Optional power recline" },
      { label: "Max Speed", value: "6 mph" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Seating", value: "Corpus 3D configurable" },
      { label: "Electronics", value: "R-net system" },
    ],
    description:
      "The C400 Corpus uses mid-wheel drive to deliver the tightest turning radius in the Permobil lineup, making it ideal for users who split time between home and community environments where navigation space is limited. A full Corpus 3D seating system provides custom postural support and up to 50 degrees of power tilt for clinical pressure relief.",
    crtRequired: true,
  },
  {
    slug: "quickie-q50-r",
    name: "Quickie Q50 R",
    brand: "Quickie",
    manufacturer: "Sunrise Medical",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Rehab-grade rear-wheel drive with 40° tilt and Q-Logic 3 electronics",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible", "Tilt-in-Space"],
    goodFor: [
      "Active community users with complex positioning needs",
      "Users with progressive neurological conditions",
      "Those using alternative access (head array, sip-and-puff)",
      "Full-time power chair users needing outdoor capability",
    ],
    notIdealFor: [
      "Primarily indoor environments with very tight spaces",
      "Users requiring minimal support",
    ],
    specs: [
      { label: "Drive System", value: "Rear-wheel drive" },
      { label: "Tilt Range", value: "0–40°" },
      { label: "Recline", value: "Optional power recline" },
      { label: "Max Speed", value: "6.2 mph" },
      { label: "Weight Capacity", value: "275 lbs (125 kg)" },
      { label: "Electronics", value: "Q-Logic 3 (multiple access methods)" },
      { label: "Drive Controls", value: "Proportional joystick standard" },
      { label: "Alternative Access", value: "Head array, sip-and-puff compatible" },
    ],
    description:
      "The Quickie Q50 R delivers robust rear-wheel drive performance with 40 degrees of power tilt for clinical pressure relief and positioning. The Q-Logic 3 electronics platform supports proportional joystick, head array, sip-and-puff, and switch access — making it appropriate for a wide range of users with motor limitations. Covered by Medicare Part B with a completed clinical evaluation and LMN.",
    crtRequired: true,
  },
  {
    slug: "quickie-q700-m",
    name: "Quickie Q700 M",
    brand: "Quickie",
    manufacturer: "Sunrise Medical",
    category: "power-wheelchairs",
    categoryLabel: "Power Wheelchairs",
    tagline: "Mid-wheel drive power chair with advanced obstacle climb and active stability",
    image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80&fit=crop",
    badges: ["CRT Required", "Insurance Eligible"],
    goodFor: [
      "Active users who navigate varied terrain",
      "Those needing a small turning radius for indoor use",
      "Users transitioning from manual to power chairs",
      "Community-active full-time power chair users",
    ],
    notIdealFor: [
      "Users needing complex power seating (limited tilt options vs. Q50 R)",
      "Environments with significant slopes",
    ],
    specs: [
      { label: "Drive System", value: "Mid-wheel drive" },
      { label: "Obstacle Climb", value: "Up to 2.5 inches" },
      { label: "Max Speed", value: "6.2 mph" },
      { label: "Weight Capacity", value: "300 lbs" },
      { label: "Turning Radius", value: "17.7 inches" },
      { label: "Electronics", value: "Q-Logic 3" },
      { label: "Frame", value: "Aluminum alloy" },
      { label: "Suspension", value: "Active-Trac (patent)" },
    ],
    description:
      "The Q700 M uses Sunrise Medical's Active-Trac suspension system to keep all six wheels in contact with the ground across uneven surfaces. The mid-wheel drive configuration gives excellent indoor turning radius while Active-Trac ensures outdoor capability. Q-Logic 3 supports a range of drive controls for various motor profiles.",
    crtRequired: true,
  },

  // ─── Manual Wheelchairs ──────────────────────────────────────────────────────
  {
    slug: "tilite-aero-z",
    name: "TiLite Aero Z",
    brand: "TiLite",
    manufacturer: "Sunrise Medical",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Fully custom titanium ultralight rigid frame built to exact body measurements",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["CRT Required", "Ultralight", "Custom Fit", "Insurance Eligible"],
    goodFor: [
      "Active full-time manual wheelchair users",
      "Those who self-propel regularly (community, work, sport)",
      "Users requiring a custom-fit frame for optimal propulsion efficiency",
      "Frequent travelers who need a lightweight, durable chair",
    ],
    notIdealFor: [
      "Users who cannot self-propel",
      "Those requiring power mobility",
      "Individuals needing a folding frame for transport",
    ],
    specs: [
      { label: "Frame Material", value: "Aerospace-grade titanium" },
      { label: "Frame Weight", value: "From 14 lbs (6.4 kg)" },
      { label: "Configuration", value: "Rigid (non-folding)" },
      { label: "Customization", value: "Full — seat width, depth, height, dump, camber" },
      { label: "Axle", value: "Adjustable push-to-lock" },
      { label: "Warranty", value: "Lifetime frame" },
      { label: "HCPCS", value: "K0005 (ultralight)" },
      { label: "Available Widths", value: "12–20 inches" },
    ],
    description:
      "Every TiLite Aero Z frame is built to the user's exact body measurements and functional goals, configured by our ATPs in collaboration with your OT. Titanium construction provides a lifetime frame warranty and the highest strength-to-weight ratio available in a rigid manual chair. Covered under Medicare K0005 (ultralightweight manual wheelchair) with appropriate clinical documentation.",
    crtRequired: true,
  },
  {
    slug: "quickie-gt-sport",
    name: "Quickie GT Sport",
    brand: "Quickie",
    manufacturer: "Sunrise Medical",
    category: "manual-wheelchairs",
    categoryLabel: "Manual Wheelchairs",
    tagline: "Rigid aluminum ultralight frame with sport-influenced geometry",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80&fit=crop",
    badges: ["CRT Required", "Ultralight", "Custom Fit"],
    goodFor: [
      "Active manual chair users who want a rigid frame at lower weight",
      "Users transitioning from folding to rigid configuration",
      "Those with higher activity levels and community access goals",
    ],
    notIdealFor: [
      "Users needing assisted propulsion",
      "Those requiring a folding frame",
    ],
    specs: [
      { label: "Frame Material", value: "Aircraft-grade aluminum" },
      { label: "Frame Weight", value: "From 17 lbs (7.7 kg)" },
      { label: "Configuration", value: "Rigid" },
      { label: "Back Height", value: "Adjustable — low, standard, high" },
      { label: "Camber", value: "0°, 3°, 6° options" },
      { label: "HCPCS", value: "K0005 (ultralight)" },
      { label: "Warranty", value: "5-year frame" },
    ],
    description:
      "The Quickie GT Sport brings sport-inspired geometry to everyday rigid manual wheelchairs. The aircraft aluminum frame provides rigidity for efficient propulsion while the cambered wheel option improves lateral stability and push mechanics. Configured by our ATPs to match your seating and propulsion evaluation.",
    crtRequired: true,
  },

  // ─── Seating & Positioning ────────────────────────────────────────────────────
  {
    slug: "jay-active-cushion",
    name: "Jay Active Cushion",
    brand: "Jay",
    manufacturer: "Sunrise Medical",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Contoured foam and gel cushion engineered for active manual wheelchair users",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Active manual chair users who self-propel daily",
      "Users with mild-to-moderate skin integrity concerns",
      "Those needing postural stability without limiting movement",
    ],
    notIdealFor: [
      "Users at high risk for pressure injuries (Stage II+)",
      "Those who require immersive offloading",
    ],
    specs: [
      { label: "Material", value: "Contoured foam base + gel cap" },
      { label: "Contour Depth", value: "Ischial positioning channels" },
      { label: "Cover", value: "Stretch cover (machine washable)" },
      { label: "Sizes", value: "14–20 inch widths" },
      { label: "HCPCS", value: "E2603" },
      { label: "Warranty", value: "2 years" },
    ],
    description:
      "The Jay Active uses a layered foam and gel construction with an ischial positioning channel to stabilize the pelvis during active propulsion. It's the preferred seating cushion for manual chair users who need skin protection without the compliance overhead of an air cell system. Appropriate for users with mild pressure risk and active lifestyles.",
    crtRequired: false,
  },
  {
    slug: "jay-j2-deep-contour",
    name: "Jay J2 Deep Contour",
    brand: "Jay",
    manufacturer: "Sunrise Medical",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "High-contour positioning cushion for complex pelvic and pressure management",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["CRT Required", "Insurance Eligible"],
    goodFor: [
      "Users with significant pelvic obliquity or asymmetry",
      "Those with moderate-to-high pressure injury risk",
      "Users with spinal cord injury or neurological diagnoses",
      "Complex seating evaluations requiring postural support",
    ],
    notIdealFor: [
      "Active propellers who need a firm, flat base",
      "Occasional wheelchair users",
    ],
    specs: [
      { label: "Contour Depth", value: "Deep ischial well + medial thigh support" },
      { label: "Base Material", value: "High-density contoured foam" },
      { label: "Fluid Pad", value: "Removable/repositionable gel fluid pad" },
      { label: "Cover", value: "Dartex (pressure-reducing)" },
      { label: "Sizes", value: "12–22 inch widths" },
      { label: "HCPCS", value: "E2605" },
    ],
    description:
      "The Jay J2 Deep Contour cushion is used in complex seating evaluations for users with pelvic asymmetry, postural instability, or elevated pressure injury risk. The removable fluid pad can be positioned to offload specific bony prominences identified during a seating assessment. Our ATPs configure the fluid pad placement as part of a full seating evaluation.",
    crtRequired: true,
  },
  {
    slug: "roho-quadtro-select",
    name: "ROHO Quadtro Select",
    brand: "ROHO",
    manufacturer: "Permobil",
    category: "seating-positioning",
    categoryLabel: "Seating & Positioning",
    tagline: "Four-zone independent air cell cushion for clinical pressure management",
    image: "https://images.unsplash.com/photo-1584145798265-b286d367426f?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Users at moderate-to-high risk for pressure injuries",
      "Those with existing pressure wounds requiring offloading",
      "Long daily sitting hours (6+ hours)",
      "Post-surgical recovery seating",
    ],
    notIdealFor: [
      "Active manual propellers who need postural stability",
      "Users who cannot manage air cell inflation/maintenance",
    ],
    specs: [
      { label: "Cell Type", value: "Independent inter-connected air cells" },
      { label: "Zones", value: "4 independently adjustable quadrants" },
      { label: "Cell Height", value: "2 inch standard, 4 inch High Profile" },
      { label: "Cover", value: "Stretch-air permeable fabric" },
      { label: "Sizes", value: "14–22 inch widths" },
      { label: "HCPCS", value: "E2602" },
      { label: "Warranty", value: "2 years" },
    ],
    description:
      "The ROHO Quadtro Select uses individual interconnected air cells in four independently adjustable quadrants to offload pressure at bony prominences. Correct inflation is critical — our team performs setup and inflation as part of your seating evaluation to ensure therapeutic benefit. Now distributed by Permobil as part of their pressure management portfolio.",
    crtRequired: false,
  },

  // ─── Power Scooters ──────────────────────────────────────────────────────────
  {
    slug: "pride-go-go-elite-traveller",
    name: "Pride Go-Go Elite Traveller",
    brand: "Pride Mobility",
    manufacturer: "Pride Mobility",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "5-piece disassembling travel scooter for community independence",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Community errands, shopping, and outings",
      "Travelers — disassembles for car trunks and airports",
      "Users with mild-to-moderate mobility limitations",
      "Individuals who can stand briefly for transfers",
    ],
    notIdealFor: [
      "Full-time or all-day mobility users",
      "Users with complex postural support needs",
      "Rough or uneven outdoor terrain",
    ],
    specs: [
      { label: "Drive", value: "3-wheel" },
      { label: "Disassembly", value: "5 pieces (feather-touch)" },
      { label: "Heaviest Piece", value: "26 lbs (11.8 kg)" },
      { label: "Max Speed", value: "4 mph (6.4 km/h)" },
      { label: "Range", value: "Up to 8.5 miles (13.7 km)" },
      { label: "Weight Capacity", value: "300 lbs (136 kg)" },
      { label: "HCPCS", value: "K0806 / K0807" },
    ],
    description:
      "The Pride Go-Go Elite Traveller disassembles into 5 lightweight pieces with feather-touch disassembly, making it the preferred scooter for air travel, car trips, and everyday errands. Anti-tip wheels, automatic feathering, and a delta tiller provide stability and ease of use. Medicare may cover this scooter for qualifying mobility diagnoses with an in-person evaluation.",
    crtRequired: false,
  },
  {
    slug: "pride-revo-2",
    name: "Pride Revo 2.0",
    brand: "Pride Mobility",
    manufacturer: "Pride Mobility",
    category: "power-scooters",
    categoryLabel: "Power Scooters",
    tagline: "Full-featured 4-wheel scooter with adjustable captain's seat and long range",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["Insurance Eligible"],
    goodFor: [
      "Community-active users needing long range",
      "Outdoor and indoor environments",
      "Users who need a stable, comfortable scooter for daily use",
      "Those with limited upper body strength (easy delta tiller)",
    ],
    notIdealFor: [
      "Frequent travelers who need to disassemble",
      "Users with complex seating or postural needs",
    ],
    specs: [
      { label: "Drive", value: "4-wheel" },
      { label: "Max Speed", value: "5 mph (8 km/h)" },
      { label: "Range", value: "Up to 18.6 miles (30 km)" },
      { label: "Seat", value: "Fully adjustable captain's seat with armrests" },
      { label: "Weight Capacity", value: "325 lbs (147 kg)" },
      { label: "Turning Radius", value: "58 inches" },
      { label: "Ground Clearance", value: "3 inches" },
    ],
    description:
      "The Pride Revo 2.0 is a full-featured 4-wheel scooter with an adjustable captain's seat, armrests, and a long 18.6-mile range — ideal for users who rely on their scooter throughout the day. The 4-wheel base provides enhanced stability on uneven surfaces, and the large front basket adds everyday practicality. Covered by Medicare for qualifying diagnoses.",
    crtRequired: false,
  },

  // ─── Walkers & Rollators ──────────────────────────────────────────────────────
  {
    slug: "future-carbon-rollator",
    name: "Future Mobility Carbon Rollator",
    brand: "Future Mobility",
    manufacturer: "Future Mobility",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Ultra-lightweight carbon fibre rollator for active community users",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
    isFeatured: true,
    badges: ["Ultralight"],
    goodFor: [
      "Active users who walk significant distances daily",
      "Frequent travelers who need a lightweight, packable rollator",
      "Users who value minimal effort to push and maneuver",
    ],
    notIdealFor: [
      "Users who require a seat during rest (no seat model)",
      "Rough or outdoor terrain",
    ],
    specs: [
      { label: "Frame Material", value: "Carbon fibre" },
      { label: "Frame Weight", value: "4.8 lbs (2.2 kg)" },
      { label: "Brake System", value: "Loop-lock with safety block" },
      { label: "Height Range", value: "31–39 inches" },
      { label: "Weight Capacity", value: "265 lbs (120 kg)" },
      { label: "Folding", value: "Yes — compact fold" },
    ],
    description:
      "The Future Mobility Carbon Rollator weighs under 5 lbs, making it the lightest clinical rollator in our catalog. Carbon fibre construction eliminates the fatigue of heavier aluminum frames over longer walking distances. Loop-lock brakes and a non-slip rubber handle ensure safe use on all indoor and paved surfaces.",
    crtRequired: false,
  },
  {
    slug: "future-4-wheel-rollator",
    name: "Future Mobility 4-Wheel Rollator",
    brand: "Future Mobility",
    manufacturer: "Future Mobility",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Sturdy 4-wheel rollator with padded seat and underseat storage",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Users who need to rest frequently during walks",
      "Indoor and outdoor paved environments",
      "Active older adults needing walking support",
      "Those who carry items during daily errands",
    ],
    notIdealFor: [
      "Very narrow indoor corridors",
      "Users with severe balance impairments",
    ],
    specs: [
      { label: "Frame", value: "Aluminum alloy" },
      { label: "Weight", value: "13.5 lbs (6.1 kg)" },
      { label: "Seat", value: "Padded — 17 inch height" },
      { label: "Storage", value: "Large underseat basket" },
      { label: "Wheel Size", value: "6-inch front, 6-inch rear" },
      { label: "Weight Capacity", value: "300 lbs (136 kg)" },
      { label: "Folding", value: "Yes — loop-lock mechanism" },
    ],
    description:
      "The Future Mobility 4-Wheel Rollator provides stable four-point support with a padded seat for rest breaks, loop-lock brakes, and a large underseat basket for carrying essentials. Designed for active older adults and users who walk regularly with intermittent rest needs. Medicare may cover with appropriate diagnosis code.",
    crtRequired: false,
  },
  {
    slug: "future-folding-walker",
    name: "Future Mobility Folding Walker",
    brand: "Future Mobility",
    manufacturer: "Future Mobility",
    category: "walkers-rollators",
    categoryLabel: "Walkers & Rollators",
    tagline: "Lightweight aluminum 2-wheel walker for post-surgical and everyday stability",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Post-surgical recovery (hip, knee, lower limb)",
      "Users with mild balance deficits",
      "Indoor daily use where full weight-bearing support is needed",
    ],
    notIdealFor: [
      "Outdoor terrain or uneven surfaces",
      "Users who need to rest frequently (no seat)",
    ],
    specs: [
      { label: "Frame", value: "Aluminum — corrosion resistant" },
      { label: "Weight", value: "5.5 lbs (2.5 kg)" },
      { label: "Height Range", value: "32–38 inches" },
      { label: "Weight Capacity", value: "350 lbs (158 kg)" },
      { label: "Front Wheels", value: "5-inch non-marking swivel" },
      { label: "Folding", value: "Yes — compact fold" },
    ],
    description:
      "The Future Mobility Folding Walker is the lightest walker in our catalog at 5.5 lbs. The front 5-inch swivel wheels reduce floor friction for smooth indoor transitions while the rear legs provide full weight-bearing stability. Folds flat for transport and storage. Eligible for Medicare Part B coverage with qualifying diagnosis.",
    crtRequired: false,
  },

  // ─── Transfer Aids ────────────────────────────────────────────────────────────
  {
    slug: "future-bath-transfer",
    name: "Future Mobility Bath Transfer System",
    brand: "Future Mobility",
    manufacturer: "Future Mobility",
    category: "transfer-aids",
    categoryLabel: "Transfer Aids",
    tagline: "Sliding transfer bench for safe bathtub entry and exit without caregiver lifting",
    image: "https://images.unsplash.com/photo-1584998604882-94bf3d6e3b0e?w=600&q=80&fit=crop",
    badges: ["Insurance Eligible"],
    goodFor: [
      "Users who cannot step over a bathtub edge safely",
      "Post-surgical lower limb or hip recovery",
      "Individuals living alone who need independent bathing access",
      "Caregivers seeking to reduce transfer injury risk",
    ],
    notIdealFor: [
      "Walk-in showers without a tub ledge",
      "Users who require ceiling lift or full-assist transfer",
    ],
    specs: [
      { label: "Material", value: "Anodized aluminum + ABS plastic" },
      { label: "Seat", value: "Sliding seat with padded backrest" },
      { label: "Weight Capacity", value: "400 lbs (181 kg)" },
      { label: "Leg Height", value: "Adjustable — 14–22 inches" },
      { label: "Seat Width", value: "15 inches" },
      { label: "Folding", value: "Yes — for storage" },
      { label: "HCPCS", value: "E0240" },
    ],
    description:
      "The Future Mobility Bath Transfer System straddles the bathtub edge, allowing users to sit outside the tub and slide safely across the seat into bathing position. The adjustable legs accommodate various tub heights and the padded backrest supports postural comfort. The 400 lb weight capacity and anodized aluminum construction make it appropriate for long-term daily use. Medicare Part B may cover with qualifying documentation.",
    crtRequired: false,
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Sandra M.",
    role: "Power chair user — Los Angeles, CA",
    rating: 5,
    quote:
      "After two years of fighting with my old supplier, Blue Bay got my Permobil approved in 6 weeks. They handled everything — I just showed up for the fitting.",
  },
  {
    id: 2,
    name: "Dr. Rachel Torres",
    role: "Occupational Therapist — Orange County, CA",
    rating: 5,
    quote:
      "I've referred over a dozen patients to Blue Bay. Their ATPs are credentialed, their documentation is thorough, and my patients always come back satisfied.",
  },
  {
    id: 3,
    name: "James H.",
    role: "Caregiver — San Diego, CA",
    rating: 5,
    quote:
      "My father needed a power chair but we had no idea where to start. Blue Bay walked us through every step, including insurance. We felt supported the entire time.",
  },
  {
    id: 4,
    name: "Maria L.",
    role: "Manual chair user — Anaheim, CA",
    rating: 5,
    quote:
      "The TiLite they ordered for me fits perfectly. The evaluation was thorough and they clearly knew what they were doing. Completely different experience from anywhere else I tried.",
  },
];

export const trustStats = [
  { value: 22, suffix: "+", label: "Years of experience" },
  { value: 5000, suffix: "+", label: "Clients served" },
  { value: 98, suffix: "%", label: "Insurance verified" },
  { value: 48, suffix: "hr", label: "Quote turnaround" },
];

export const trackingSteps = [
  { id: 1, label: "Referral Received", desc: "Your request has been received and assigned to a specialist." },
  { id: 2, label: "Insurance Verification", desc: "We are verifying your coverage and benefits." },
  { id: 3, label: "Clinical Evaluation", desc: "Your ATP evaluation has been scheduled or completed." },
  { id: 4, label: "Equipment Order", desc: "Your equipment has been ordered from the manufacturer." },
  { id: 5, label: "Custom Build", desc: "Your equipment is being configured to your specifications." },
  { id: 6, label: "Delivery", desc: "Your equipment is ready and delivery has been scheduled." },
];

export const brands = [
  "Permobil",
  "Sunrise Medical",
  "Pride Mobility",
  "Future Mobility",
  "Quantum Rehab",
  "Ki Mobility",
  "Motion Composites",
  "Motion Concepts",
  "Invacare",
  "Drive Medical",
  "Ottobock",
  "Stealth Products",
];

export const categoryLabels: Record<string, string> = {
  "power-wheelchairs": "Power Wheelchairs",
  "manual-wheelchairs": "Manual Wheelchairs",
  "seating-positioning": "Seating & Positioning",
  "power-scooters": "Power Scooters",
  "walkers-rollators": "Walkers & Rollators",
  "transfer-aids": "Transfer Aids",
  "accessories": "Accessories",
};
