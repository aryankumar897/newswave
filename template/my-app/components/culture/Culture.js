

"use  client"

import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/navigation';
import { Html5Filled } from '@ant-design/icons';
const newsItems = [
    {
        category: 'Technology',
        image: 'https://dummyimage.com/500x400/000/fff',
        title: 'New Technology Advancements',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    },
    {
        category: 'Sports',
        image: 'https://dummyimage.com/500x400/000/fff',
        title: 'Latest Sports Updates',
        content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    },
    {
        category: 'Politics',
        image: 'https://dummyimage.com/500x400/000/fff',
        title: 'Political News Roundup',
        content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...',
    },
    {
        category: 'Entertainment',
        image: 'https://dummyimage.com/500x400/000/fff',
        title: 'Entertainment Buzz',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
    },
    {
        category: 'Entertainment',
        image: 'https://dummyimage.com/500x400/000/fff',
        title: 'Entertainment Buzz',
        content: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...',
    },


    // Add more news items as needed
];



export default function Culture() {



    return (

        <>
            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />


                <h5 style={{ margin: 5 }}  > Culture</h5>
            </div>



            <div className="container-fluid">

                <div className="row">

                  <h2>culture</h2>






                    <div className="col-md-4  ">
                        {/* Right Side */}
                        <div className="row ">



                           <h4>right side</h4>


                        </div>
                    </div>
                </div>
            </div>

        </>




    )


}