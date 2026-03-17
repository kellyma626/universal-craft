export interface Review {
  id: number;
  name: string;
  rating: number;
  product: string;
  date: string;
  text: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: 'Alexis',
    rating: 5,
    product: '12pcs, Foam Roses',
    date: 'Feb 7, 2022',
    text: 'Flowers were absolutely beautiful and were great quality. I put them in the bridesmaid proposal boxes and they looked perfect, my friends loved them, AND they were delivered pretty quickly. Would definitely purchase again.',
  },
  {
    id: 2,
    name: 'Alicia',
    rating: 5,
    product: 'Crystal Money/Card Box',
    date: 'May 13, 2021',
    text: 'Absolutely beautiful! I will be using this for my wedding to hold our cards. My mom added a flower to it so it will match the colors of my wedding.',
  },
  {
    id: 3,
    name: 'Reveca',
    rating: 5,
    product: '1 pound, Glitter Bottle',
    date: 'Nov 18, 2022',
    text: "I'm so thrilled! All my glitter arrived intact and exactly as pictured in their respective shakers. The glitter arrived a week earlier than expected. So Happy :-)",
  },
  {
    id: 4,
    name: 'Brigitte',
    rating: 5,
    product: '20pcs, Glitter Butterflies',
    date: 'Aug 7, 2021',
    text: 'The butterflies were so cute and they arrived right away!',
  },
  {
    id: 5,
    name: 'Amy',
    rating: 5,
    product: '2pcs, Foam Floating Lilies',
    date: 'May 21, 2022',
    text: 'Received my floating flowers today and they are so cute and very well made. They are just the right size to place more than one in my 3-tier barrel fountain. :) Thank you for the fast shipping!',
  },
  {
    id: 6,
    name: 'Anna',
    rating: 5,
    product: 'Silk Kissing Flower Balls',
    date: 'Apr 26, 2022',
    text: 'These flower balls are perfect and cute!',
  },
  {
    id: 7,
    name: 'Sherri',
    rating: 5,
    product: 'Hydrangea Flower Garland',
    date: 'Jan 19, 2022',
    text: 'Very cute, well made! Will work great for Valentine decorations! Thanks!',
  },
  {
    id: 8,
    name: 'Angelina',
    rating: 5,
    product: 'Foam Rose Bear',
    date: 'Sep 5, 2020',
    text: 'I bought this as a birthday gift for my mom and she absolutely loves it! Excellent item, the seller had great communication and shipped the product out quickly. Thank you!',
  },
];
