import { usePrice } from '@/hooks/usePrice';

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  description: string;
  price: number; // base price in USD
  discountPercentage?: number;
  image: string;
  rating: number;
  featured?: boolean;
}

export interface Offer {
  id: string;
  title: string;
  description: string;
  code: string;
  expiryDate: string;
}

export const categories = [
  'Makeup',
  'Skincare',
  'Haircare',
  'Fragrance',
  'Tools & Brushes',
  'Bath & Body',
];

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Luminous Liquid Foundation',
    brand: 'GlowVibe',
    category: 'Makeup',
    description: 'Lightweight, buildable coverage with a natural finish',
    price: 38.99,
    discountPercentage: 20,
    image:
      'https://images.unsplash.com/photo-1631730359585-38a4935cbec4?w=800&auto=format&fit=crop&q=60',
    rating: 4.8,
    featured: true,
  },
  {
    id: 'p2',
    name: 'Hydrating Rose Toner',
    brand: 'PureSkin',
    category: 'Skincare',
    description: 'Refreshing alcohol-free toner with rose water',
    price: 24.99,
    discountPercentage: 15,
    image:
      'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800&auto=format&fit=crop&q=60',
    rating: 4.6,
    featured: true,
  },
  {
    id: 'p3',
    name: 'Volumizing Mascara',
    brand: 'LashLove',
    category: 'Makeup',
    description: 'Long-lasting mascara that adds volume and length',
    price: 21.5,
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
  },
  {
    id: 'p4',
    name: 'Repair & Shine Hair Serum',
    brand: 'LuxeLocks',
    category: 'Haircare',
    description: 'Smooths frizz and adds shine to damaged hair',
    price: 32.99,
    discountPercentage: 10,
    image:
      'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?w=800&auto=format&fit=crop&q=60',
    rating: 4.4,
    featured: true,
  },
  {
    id: 'p5',
    name: 'Gentle Cleansing Balm',
    brand: 'PureSkin',
    category: 'Skincare',
    description: 'Removes makeup and impurities without stripping',
    price: 28.5,
    image:
      'https://images.unsplash.com/photo-1570554520913-ce2192a7d6de?w=800&auto=format&fit=crop&q=60',
    rating: 4.9,
  },
  {
    id: 'p6',
    name: 'Matte Liquid Lipstick',
    brand: 'ColorPop',
    category: 'Makeup',
    description: 'Transfer-proof formula with intense color payoff',
    price: 19.99,
    discountPercentage: 25,
    image:
      'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=800&auto=format&fit=crop&q=60',
    rating: 4.5,
    featured: true,
  },
  {
    id: 'p7',
    name: 'Vitamin C Brightening Serum',
    brand: 'GlowVibe',
    category: 'Skincare',
    description: 'Powerful antioxidant formula that brightens skin',
    price: 49.99,
    discountPercentage: 15,
    image:
      'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?w=800&auto=format&fit=crop&q=60',
    rating: 4.7,
  },
  {
    id: 'p8',
    name: 'Precision Eyeliner Pen',
    brand: 'ColorPop',
    category: 'Makeup',
    description: 'Ultra-fine tip for precise application',
    price: 16.5,
    image:
      'https://images.unsplash.com/photo-1631730356798-875ca4128c8c?w=800&auto=format&fit=crop&q=60',
    rating: 4.3,
  },
];

export const featuredOffers: Offer[] = [
  {
    id: 'o1',
    title: 'Summer Sale',
    description: 'Get 20% off all summer essentials',
    code: 'SUMMER20',
    expiryDate: '2023-08-31',
  },
  {
    id: 'o2',
    title: 'New Customer',
    description: '15% off your first order',
    code: 'WELCOME15',
    expiryDate: '2023-12-31',
  },
  {
    id: 'o3',
    title: 'Free Shipping',
    description: 'On all orders over $50',
    code: 'FREESHIP50',
    expiryDate: '2023-09-15',
  },
];
