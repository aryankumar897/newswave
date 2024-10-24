"use client"



import NewsHome from './NewsHome';
import React, { useEffect, useState } from 'react';


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
    // Add more news items as needed
];




export default function NewsPage() {

  const [news,setNews]=useState([])


  useEffect(()=>{

  const  fetchData=async()=>{
try {
     const  response= await fetch(`${process.env.API}/morenews`)


      const data=await response.json()


       setNews(data)
} catch (error) {
  
    
 console.log(error)

}



  }

      fetchData()
  },[])


    return (
        <div className="container-fluid">

            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />
                <hr style={{ border: '1px solid black', margin: 0 }} />

                <h5 style={{ margin: 5 }}  > News </h5>
            </div>

            <NewsHome 
newsItems={newsItems}
news={news}

            />

        </div>
    );
};

