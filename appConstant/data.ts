// Types for the fashion app
export interface Item {
  id: string;
  name: string;
  category: 'top' | 'bottom' | 'footwear' | 'outerwear';
  color: string;
  style: string;
  image: string;
  price: number;
  brand: string;
  tags: string[];
}

export interface Outfit {
  id: string;
  title: string;
  occasion: string;
  tags: string[];
  items: {
    top?: string;
    bottom?: string;
    footwear?: string;
    outerwear?: string;
  };
  image: string;
}


export interface Collections {
  id: string | number;
  title: string | null;
  // occasion: string;
  images: string[]
}
// Mock Items Data (30 items)
export const mockItems: Item[] = [
  // Tops
  {
    id: '1',
    name: 'Classic White Button-Down',
    category: 'top',
    color: 'white',
    style: 'formal',
    image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    price: 89,
    brand: 'Everlane',
    tags: ['classic', 'versatile', 'office']
  },
  {
    id: '2',
    name: 'Oversized Black Hoodie',
    category: 'top',
    color: 'black',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop',
    price: 65,
    brand: 'Uniqlo',
    tags: ['cozy', 'streetwear', 'weekend']
  },
  {
    id: '3',
    name: 'Striped Cotton Tee',
    category: 'top',
    color: 'blue',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    price: 35,
    brand: 'J.Crew',
    tags: ['nautical', 'summer', 'casual']
  },
  {
    id: '4',
    name: 'Silk Burgundy Blouse',
    category: 'top',
    color: 'red',
    style: 'elegant',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    price: 120,
    brand: 'Theory',
    tags: ['silk', 'luxury', 'date night']
  },
  {
    id: '5',
    name: 'Denim Work Shirt',
    category: 'top',
    color: 'blue',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=400&h=400&fit=crop',
    price: 78,
    brand: "Levi's",
    tags: ['denim', 'americana', 'durable']
  },
  {
    id: '6',
    name: 'Cream Cable Knit Sweater',
    category: 'top',
    color: 'beige',
    style: 'cozy',
    image: 'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&h=400&fit=crop',
    price: 95,
    brand: 'COS',
    tags: ['knit', 'winter', 'warm']
  },

  // Bottoms
  {
    id: '7',
    name: 'High-Waisted Black Jeans',
    category: 'bottom',
    color: 'black',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    price: 98,
    brand: 'Agolde',
    tags: ['denim', 'high-waist', 'versatile']
  },
  {
    id: '8',
    name: 'Pleated Midi Skirt',
    category: 'bottom',
    color: 'navy',
    style: 'elegant',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    price: 85,
    brand: '& Other Stories',
    tags: ['pleated', 'midi', 'feminine']
  },
  {
    id: '9',
    name: 'Wide Leg Trousers',
    category: 'bottom',
    color: 'beige',
    style: 'formal',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    price: 110,
    brand: 'Zara',
    tags: ['wide-leg', 'tailored', 'office']
  },
  {
    id: '10',
    name: 'Vintage Wash Denim',
    category: 'bottom',
    color: 'blue',
    style: 'vintage',
    image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=400&fit=crop',
    price: 125,
    brand: 'RE/DONE',
    tags: ['vintage', 'relaxed', 'authentic']
  },
  {
    id: '11',
    name: 'Leather Mini Skirt',
    category: 'bottom',
    color: 'black',
    style: 'edgy',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    price: 160,
    brand: 'Acne Studios',
    tags: ['leather', 'edgy', 'night out']
  },
  {
    id: '12',
    name: 'Linen Summer Shorts',
    category: 'bottom',
    color: 'white',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop',
    price: 55,
    brand: 'Reformation',
    tags: ['linen', 'breathable', 'summer']
  },

  // Footwear
  {
    id: '13',
    name: 'White Leather Sneakers',
    category: 'footwear',
    color: 'white',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    price: 140,
    brand: 'Common Projects',
    tags: ['leather', 'minimalist', 'everyday']
  },
  {
    id: '14',
    name: 'Black Ankle Boots',
    category: 'footwear',
    color: 'black',
    style: 'edgy',
    image: 'https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=400&h=400&fit=crop',
    price: 180,
    brand: 'Dr. Martens',
    tags: ['boots', 'durable', 'versatile']
  },
  {
    id: '15',
    name: 'Nude Block Heels',
    category: 'footwear',
    color: 'beige',
    style: 'elegant',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    price: 95,
    brand: 'Everlane',
    tags: ['heels', 'office', 'nude']
  },
  {
    id: '16',
    name: 'Canvas Slip-On Shoes',
    category: 'footwear',
    color: 'navy',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=400&h=400&fit=crop',
    price: 65,
    brand: 'Vans',
    tags: ['canvas', 'slip-on', 'relaxed']
  },
  {
    id: '17',
    name: 'Brown Leather Loafers',
    category: 'footwear',
    color: 'brown',
    style: 'preppy',
    image: 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=400&h=400&fit=crop',
    price: 210,
    brand: 'Cole Haan',
    tags: ['leather', 'classic', 'professional']
  },
  {
    id: '18',
    name: 'Platform Sandals',
    category: 'footwear',
    color: 'tan',
    style: 'bohemian',
    image: 'https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=400&h=400&fit=crop',
    price: 85,
    brand: 'Birkenstock',
    tags: ['platform', 'summer', 'comfort']
  },

  // Outerwear
  {
    id: '19',
    name: 'Classic Trench Coat',
    category: 'outerwear',
    color: 'beige',
    style: 'classic',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    price: 320,
    brand: 'Burberry',
    tags: ['trench', 'timeless', 'luxury']
  },
  {
    id: '20',
    name: 'Black Leather Jacket',
    category: 'outerwear',
    color: 'black',
    style: 'edgy',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    price: 280,
    brand: 'AllSaints',
    tags: ['leather', 'moto', 'rebel']
  },
  {
    id: '21',
    name: 'Wool Peacoat',
    category: 'outerwear',
    color: 'navy',
    style: 'classic',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    price: 240,
    brand: 'J.Crew',
    tags: ['wool', 'nautical', 'winter']
  },
  {
    id: '22',
    name: 'Denim Jacket',
    category: 'outerwear',
    color: 'blue',
    style: 'casual',
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400&h=400&fit=crop',
    price: 98,
    brand: "Levi's",
    tags: ['denim', 'versatile', 'layering']
  },
  {
    id: '23',
    name: 'Puffer Vest',
    category: 'outerwear',
    color: 'black',
    style: 'sporty',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    price: 120,
    brand: 'Patagonia',
    tags: ['puffer', 'vest', 'outdoor']
  },
  {
    id: '24',
    name: 'Camel Overcoat',
    category: 'outerwear',
    color: 'brown',
    style: 'elegant',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
    price: 380,
    brand: 'Max Mara',
    tags: ['camel', 'luxe', 'statement']
  }
];

// Mock Outfits/Collections Data
export const mockOutfits: Outfit[] = [
  {
    id: 'outfit-1',
    title: 'Business Casual',
    occasion: 'work',
    tags: ['professional', 'versatile', 'polished'],
    items: {
      top: '1', // Classic White Button-Down
      bottom: '9', // Wide Leg Trousers
      footwear: '15', // Nude Block Heels
      outerwear: '19' // Classic Trench Coat
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-2',
    title: 'Weekend Vibes',
    occasion: 'casual',
    tags: ['relaxed', 'comfortable', 'effortless'],
    items: {
      top: '2', // Oversized Black Hoodie
      bottom: '7', // High-Waisted Black Jeans
      footwear: '13', // White Leather Sneakers
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-3',
    title: 'Date Night Glam',
    occasion: 'evening',
    tags: ['romantic', 'elegant', 'chic'],
    items: {
      top: '4', // Silk Burgundy Blouse
      bottom: '11', // Leather Mini Skirt
      footwear: '14', // Black Ankle Boots
      outerwear: '20' // Black Leather Jacket
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-4',
    title: 'Summer Breeze',
    occasion: 'vacation',
    tags: ['light', 'airy', 'vacation'],
    items: {
      top: '3', // Striped Cotton Tee
      bottom: '12', // Linen Summer Shorts
      footwear: '18', // Platform Sandals
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-5',
    title: 'Cozy Autumn',
    occasion: 'casual',
    tags: ['cozy', 'warm', 'layered'],
    items: {
      top: '6', // Cream Cable Knit Sweater
      bottom: '10', // Vintage Wash Denim
      footwear: '17', // Brown Leather Loafers
      outerwear: '21' // Wool Peacoat
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-6',
    title: 'Office Power',
    occasion: 'work',
    tags: ['authoritative', 'sharp', 'confident'],
    items: {
      top: '1', // Classic White Button-Down
      bottom: '8', // Pleated Midi Skirt
      footwear: '15', // Nude Block Heels
      outerwear: '24' // Camel Overcoat
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-7',
    title: 'Street Style',
    occasion: 'casual',
    tags: ['urban', 'trendy', 'edgy'],
    items: {
      top: '5', // Denim Work Shirt
      bottom: '7', // High-Waisted Black Jeans
      footwear: '14', // Black Ankle Boots
      outerwear: '22' // Denim Jacket
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  },
  {
    id: 'outfit-8',
    title: 'Brunch Ready',
    occasion: 'social',
    tags: ['feminine', 'fresh', 'social'],
    items: {
      top: '4', // Silk Burgundy Blouse
      bottom: '8', // Pleated Midi Skirt
      footwear: '16', // Canvas Slip-On Shoes
    },
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=400&fit=crop'
  }
];

// Filter Options
export const filterOptions = {
  categories: ['top', 'bottom', 'footwear', 'outerwear'],
  colors: ['black', 'white', 'blue', 'red', 'beige', 'navy', 'brown', 'tan'],
  styles: ['casual', 'formal', 'elegant', 'edgy', 'vintage', 'classic', 'cozy', 'sporty', 'bohemian', 'preppy'],
  occasions: ['work', 'casual', 'evening', 'vacation', 'social']
};


export const collection: Collections[] = [
  {
    id: 1,
    title: "office outfits",
    images: [
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 2,
    title: "casual outfits",
    images: [
      "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 3,
    title: "formal outfits",
    images: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 4,
    title: "summer vibes",
    images: [
      "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1542272604-787c3835535d?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 5,
    title: "winter layers",
    images: [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1571455786673-9d9d6c194f90?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1580657018950-c7f7d6a6d990?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 6,
    title: "date night",
    images: [
      "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1544966503-7cc5ac882d5f?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 7,
    title: "street style",
    images: [
      "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 8,
    title: "minimalist",
    images: [
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583743089695-4b816a340f82?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 9,
    title: "boho chic",
    images: [
      "https://plus.unsplash.com/premium_photo-1661488650349-fcc4d4a9b387?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=800&h=1000&fit=crop&q=80",
    ]
  },
  {
    id: 10,
    title: "workout wear",
    images: [
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=1000&fit=crop&q=80",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1000&fit=crop&q=80",
      "https://plus.unsplash.com/premium_photo-1664884632108-d6337ca3b63a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ]
  }
];