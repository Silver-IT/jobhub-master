export interface Post {
  id: string;
  title: string;
  date: string;
  description: string;
  thumbnail: string;
}

export const posts = [
  {
    id: 'no-longer-just-a-daydream',
    title: 'A Single Platform for Admin, Sales, Operations, and Marketing is No Longer Just a Daydream',
    description: 'If you are looking into modern business strategies, it won’t be long before you run into the idea of how you should digitally transform your company.',
    date: new Date('Apr 10, 2020').toISOString(),
    thumbnail: 'assets/images/posts/no-longer-just-a-daydream/thumbnail.jpg',
  },
  {
    id: 'how-to-automate-various-aspect-of-your-company',
    title: 'Why and How You Should Automate Various Aspects of Your Company',
    description: 'Is work going too slow at your small business? Repetition, bureaucracy, and waste are all things that can create a slowdown with business...',
    date: new Date('Apr 10, 2020').toISOString(),
    thumbnail: 'assets/images/posts/how-to-automate-various-aspect-of-your-company/thumbnail.jpg',
  },
  {
    id: 'implementing-work-hub-technology-into-small-business',
    title: 'Implementing Work Hub Technology Into Your Small Business',
    description: 'If you own one of the many small businesses around the globe today, you’ve probably come across the idea of digitally...',
    date: new Date('Apr 10, 2020').toISOString(),
    thumbnail: 'assets/images/posts/implementing-work-hub-technology-into-small-business/thumbnail.jpg',
  }
];
