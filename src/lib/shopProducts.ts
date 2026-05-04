export type Category =
  | 'Power Scooters'
  | 'Rollators & Walkers'
  | 'Manual Wheelchairs'
  | 'Daily Living Aids'
  | 'Accessories';

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  price: number;
  category: Category;
  description: string;
  features: string[];
  image: string;
  inStock: boolean;
}

export const categories: Category[] = [
  'Power Scooters',
  'Rollators & Walkers',
  'Manual Wheelchairs',
  'Daily Living Aids',
  'Accessories',
];

export const products: Product[] = [
  {
    id: '1',
    slug: 'go-go-elite-traveller-plus-scooter',
    name: 'Go-Go Elite Traveller Plus Scooter',
    brand: 'Pride Mobility',
    price: 1299,
    category: 'Power Scooters',
    description:
      'The Go-Go Elite Traveller Plus is an ultra-portable travel scooter that disassembles into 5 lightweight pieces without tools. Perfect for everyday use and travel.',
    features: [
      'Disassembles into 5 lightweight pieces',
      'Up to 10 miles per charge',
      'Supports up to 300 lbs',
      'Front basket included',
      'Delta tiller for easy steering',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    inStock: true,
  },
  {
    id: '2',
    slug: 'jazzy-select-6-power-chair',
    name: 'Jazzy Select 6 Power Chair',
    brand: 'Pride Mobility',
    price: 2499,
    category: 'Power Scooters',
    description:
      'The Jazzy Select 6 combines exceptional performance with a sleek, modern design. Mid-wheel drive technology provides a tight turning radius for superior indoor maneuverability.',
    features: [
      'Mid-wheel drive for tight turns',
      'Up to 15.5 miles per charge',
      'Supports up to 300 lbs',
      'Active-Trac suspension',
      'Adjustable captain\'s seat',
    ],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    inStock: true,
  },
  {
    id: '3',
    slug: 'travelscoot-lightweight-scooter',
    name: 'Travelscoot Lightweight Scooter',
    brand: 'Travelscoot',
    price: 2199,
    category: 'Power Scooters',
    description:
      'The Travelscoot is one of the lightest electric scooters available, weighing just 38 lbs. Folds compactly for airline travel and everyday portability.',
    features: [
      'Weighs only 38 lbs',
      'Folds for airline travel',
      'Lithium battery included',
      'Up to 15 miles per charge',
      'Fits in standard car trunk',
    ],
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
    inStock: true,
  },
  {
    id: '4',
    slug: 'drive-medical-nitro-rollator',
    name: 'Drive Medical Nitro Rollator',
    brand: 'Drive Medical',
    price: 179,
    category: 'Rollators & Walkers',
    description:
      'The Drive Medical Nitro Euro Style Rollator features a sleek, low profile design with large 10" wheels for smooth outdoor navigation. Lightweight aluminum frame folds easily.',
    features: [
      '10" front wheels for outdoor terrain',
      'Lightweight aluminum frame',
      'Loop-style hand brakes',
      'Padded seat and backrest',
      'Under-seat storage bag',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    inStock: true,
  },
  {
    id: '5',
    slug: 'hugo-mobility-elite-rollator',
    name: 'Hugo Mobility Elite Rollator',
    brand: 'Hugo Mobility',
    price: 149,
    category: 'Rollators & Walkers',
    description:
      'The Hugo Elite Rollator is built for both indoor and outdoor use. Features a comfortable padded seat, stylish design, and quick-release fold mechanism.',
    features: [
      'Quick-release fold',
      'Padded seat and backrest',
      'Height-adjustable handles',
      'Supports up to 300 lbs',
      'Includes carry pouch',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    inStock: true,
  },
  {
    id: '6',
    slug: 'graham-field-everest-rollator',
    name: 'Graham-Field Everest Rollator',
    brand: 'Graham-Field',
    price: 169,
    category: 'Rollators & Walkers',
    description:
      'The Graham-Field Everest & Jennings Rollator offers reliable performance with a sturdy steel frame and comfortable padded seat for resting on the go.',
    features: [
      'Durable steel frame',
      'Padded seat and backrest',
      '6" wheels',
      'Height-adjustable handles',
      'Folds flat for storage',
    ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80',
    inStock: true,
  },
  {
    id: '7',
    slug: 'ez-fold-n-go-transport-wheelchair',
    name: 'EZ Fold-N-Go Transport Wheelchair',
    brand: 'EZ Fold-N-Go',
    price: 299,
    category: 'Manual Wheelchairs',
    description:
      'The EZ Fold-N-Go Transport Wheelchair is one of the lightest transport chairs on the market. Features a unique folding design and aircraft-grade aluminum frame.',
    features: [
      'Weighs only 13 lbs',
      'Aircraft-grade aluminum',
      'Folds in seconds',
      '12" rear wheels',
      'Padded armrests and footrests',
    ],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
    inStock: true,
  },
  {
    id: '8',
    slug: 'invacare-tracer-iv-manual-wheelchair',
    name: 'Invacare Tracer IV Manual Wheelchair',
    brand: 'Invacare',
    price: 599,
    category: 'Manual Wheelchairs',
    description:
      'The Invacare Tracer IV is a fully customizable manual wheelchair with a durable cross-brace frame. Available in multiple seat widths to ensure optimal fit.',
    features: [
      'Swing-away footrests',
      'Flip-back armrests',
      'Multiple seat widths available',
      'Supports up to 250 lbs',
      'Urethane tires — no flat tires',
    ],
    image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=600&q=80',
    inStock: true,
  },
  {
    id: '9',
    slug: 'medline-shower-chair-with-back',
    name: 'Medline Shower Chair with Back',
    brand: 'Medline',
    price: 79,
    category: 'Daily Living Aids',
    description:
      'The Medline Shower Chair provides safe and comfortable bathing. Features a padded seat, non-slip rubber tips, and adjustable legs for a secure, stable bath experience.',
    features: [
      'Non-slip rubber tips',
      'Adjustable height legs',
      'Supports up to 350 lbs',
      'Drainage holes in seat',
      'Tool-free assembly',
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
    inStock: true,
  },
  {
    id: '10',
    slug: 'vive-health-knee-walker',
    name: 'Vive Health Knee Walker',
    brand: 'Vive Health',
    price: 199,
    category: 'Daily Living Aids',
    description:
      'The Vive Health Knee Walker is the ideal crutch alternative for lower leg injuries. Steerable design with a padded knee platform for comfortable non-weight bearing mobility.',
    features: [
      'Padded knee platform',
      'Front hand brakes',
      'Steerable front wheel',
      'Foldable for easy transport',
      'Supports up to 300 lbs',
    ],
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&q=80',
    inStock: true,
  },
  {
    id: '11',
    slug: 'bodymed-gel-foam-seat-cushion',
    name: 'BodyMed Gel Foam Seat Cushion',
    brand: 'BodyMed',
    price: 89,
    category: 'Accessories',
    description:
      'The BodyMed Gel Foam Seat Cushion combines the pressure-relieving benefits of gel with the supportive comfort of foam. Ideal for wheelchair users and those with extended sitting needs.',
    features: [
      'Gel-foam combination',
      'Non-slip bottom',
      'Machine-washable cover',
      'Universal fit',
      '2" thick for optimal support',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    inStock: true,
  },
  {
    id: '12',
    slug: 'drive-medical-universal-cup-holder',
    name: 'Drive Medical Universal Cup Holder',
    brand: 'Drive Medical',
    price: 24,
    category: 'Accessories',
    description:
      'The Drive Medical Universal Cup Holder attaches easily to most walkers, wheelchairs, rollators, and scooters. Keep beverages within reach wherever you go.',
    features: [
      'Universal fit',
      'Attaches to most mobility aids',
      'Holds cups up to 32 oz',
      'Easy installation — no tools required',
      'Durable plastic construction',
    ],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80',
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: Category): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.slice(0, 6);
}

export { products as shopProducts };
