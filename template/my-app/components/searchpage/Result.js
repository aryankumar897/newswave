"use client"

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


const newsItems = [
  {
    category: 'Technology',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'New Technology Advancements',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
  },
  {
    category: 'Sports',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'Latest Sports Updates',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
  },
  {
    category: 'Politics',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'Political News Roundup',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
  },
  {
    category: 'Entertainment',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'Entertainment Buzz',
    content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
  },
  {
    category: 'Business',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'Business Insights',
    content: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui...',
  },
  {
    category: 'Health',
    image: 'https://dummyimage.com/400x300/000/fff',
    title: 'Health and Wellness Tips',
    content: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit...',
  },



];



const ResultNews = () => {



  return (


    <div className="container-fluid  mt-5">
      <div className="row">
        <div className="col-md-8">


          <div className="border-end pe-3 ">

            <hr />
        
            <hr />

          </div>

        </div>

        <div className="col-md-4" >

          Advertisement
        </div>


      </div>
    </div>



  );
};

export default ResultNews;
