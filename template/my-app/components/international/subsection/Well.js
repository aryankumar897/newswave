import React from 'react';
import WellHome from './WellHome';

const newsItems = [
  {
    category: 'Technology',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'New Technology Advancements',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    category: 'Sports',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'Latest Sports Updates',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    category: 'Politics',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'Political News Roundup',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
  },
  {
    category: 'Entertainment',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'Entertainment Buzz',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
  },
  {
    category: 'Business',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'Business Insights',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...',
  },
  {
    category: 'Business',
    image: 'https://dummyimage.com/1200x1000/000/fff',
    title: 'Business Insights',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...',
  },

  // Add more news items as needed
];

export default async function HomePage({ news, title }) {
  return (
    <div className="container-fluid"  >

      <div className="container-fluid mt-2 ">

        <hr style={{ border: '1px solid black', margin: 1 }} />
        <hr style={{ border: '1px solid black', margin: 0 }} />

        <h5 style={{ margin: 5 }}  >{title}</h5>
      </div>




      <WellHome newsItems={news} />
    </div>
  );
};

