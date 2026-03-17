export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: 'BESTSELLER' | 'SOLD OUT';
  featured: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: '12pcs, Foam Roses',
    price: 3.5,
    image: '/products/foam-roses.png',
    badge: 'BESTSELLER',
    featured: true,
  },
  {
    id: '2',
    name: '20pcs, Glitter Butterflies',
    price: 6.99,
    image: '/products/glitter-butterflies.png',
    featured: true,
  },
  {
    id: '3',
    name: 'Crystal Money/Card Box',
    price: 135.99,
    image: '/products/crystal-box.png',
    featured: true,
  },
  {
    id: '4',
    name: 'Hydrangea Flower Garland',
    price: 5.49,
    image: '/products/hydrangea-garland.png',
    featured: true,
  },
  {
    id: '5',
    name: 'Silk Kissing Flower Balls',
    price: 9.99,
    image: '/products/flower-balls.png',
    featured: true,
  },
  {
    id: '6',
    name: '2pcs, Foam Floating Lilies',
    price: 4.99,
    image: '/products/floating-lilies.png',
    featured: true,
  },
  {
    id: '7',
    name: '1 pound, Glitter Bottle',
    price: 9.99,
    image: '/products/glitter-bottle.png',
    featured: true,
  },
  {
    id: '8',
    name: 'Foam Rose Bear',
    price: 29.99,
    image: '/products/rose-bear.png',
    badge: 'SOLD OUT',
    featured: true,
  },
];
