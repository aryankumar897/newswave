"use client"


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


];




export default function BlogPost() {


    return (
        <div className="container-fluid  mt-5">
            <div className="row">



                <div className="col-md-8">

<h1>home</h1>



                </div>




            
            
            
            
            
                <div className="col-md-4 ">



<h3>ads</h3>


                </div>






            </div>
        </div>
    );
}

