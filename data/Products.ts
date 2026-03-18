export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: 'BESTSELLER' | 'SOLD OUT';
  featured: boolean;
  inStore: boolean;
  weight?: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: '12pcs, Foam Roses',
    price: 3.5,
    image: '/products/foam-roses.png',
    badge: 'BESTSELLER',
    featured: true,
    inStore: false,
  },
  {
    id: '2',
    name: '20pcs, Glitter Butterflies',
    price: 6.99,
    image: '/products/glitter-butterflies.png',
    featured: true,
    inStore: false,
  },
  {
    id: '3',
    name: 'Crystal Money/Card Box',
    price: 135.99,
    image: '/products/crystal-box.png',
    featured: true,
    inStore: false,
  },
  {
    id: '4',
    name: 'Hydrangea Flower Garland',
    price: 5.49,
    image: '/products/hydrangea-garland.png',
    featured: true,
    inStore: false,
  },
  {
    id: '5',
    name: 'Silk Kissing Flower Balls',
    price: 9.99,
    image: '/products/flower-balls.png',
    featured: true,
    inStore: false,
  },
  {
    id: '6',
    name: '2pcs, Foam Floating Lilies',
    price: 4.99,
    image: '/products/floating-lilies.png',
    featured: true,
    inStore: false,
  },
  {
    id: '7',
    name: '1 pound, Glitter Bottle',
    price: 9.99,
    image: '/products/glitter-bottle.png',
    featured: true,
    inStore: false,
  },
  {
    id: '8',
    name: 'Foam Rose Bear',
    price: 29.99,
    image: '/products/rose-bear.png',
    badge: 'SOLD OUT',
    featured: true,
    inStore: false,
  },
  {
    id: '9',
    name: 'Gold Candle Holder',
    price: 12.99,
    image: '/products/foam-roses.png',
    featured: false,
    inStore: true,
  },
  {
    id: '10',
    name: 'Pink Balloon Arch Kit',
    price: 24.99,
    image: '/products/glitter-butterflies.png',
    featured: false,
    inStore: true,
  },
  {
    id: '11',
    name: 'Crystal Vase',
    price: 18.99,
    image: '/products/crystal-box.png',
    featured: false,
    inStore: true,
  },
  {
    id: '12',
    name: 'Silk Rose Bouquet',
    price: 14.99,
    image: '/products/hydrangea-garland.png',
    featured: false,
    inStore: true,
  },
  {
    id: '13',
    name: 'Cupcake Stand',
    price: 34.99,
    image: '/products/flower-balls.png',
    featured: false,
    inStore: true,
  },
  {
    id: '14',
    name: 'Metal Centerpiece',
    price: 45.99,
    image: '/products/floating-lilies.png',
    featured: false,
    inStore: true,
  },
  {
    id: '15',
    name: 'Glitter Ribbon Roll',
    price: 4.99,
    image: '/products/glitter-bottle.png',
    featured: false,
    inStore: true,
  },
  {
    id: '16',
    name: 'Foam Rose Wreath',
    price: 22.99,
    image: '/products/rose-bear.png',
    featured: false,
    inStore: true,
  },
];
