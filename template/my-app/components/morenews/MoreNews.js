"use client"
import Link from 'next/link'; // Import the Link component
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton'
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


];




import readingTime from 'reading-time';
export default function MoreNews() {
    const router = useRouter();




    return (


        <>

            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />


                <h5 style={{ margin: 5 }}  >MoreNews </h5>
            </div>


            <div className="container-fluid">
                <div className="row">
                    {/* Left side */}

                    <div className="col-md-8">
                        <div className="border-end pe-3 ">


                            <div className="card border-0" >
                                <div className="row g-0  ">
                                    {/* Left side */}
                                    <div className="col-md-4">
                                        <div className="card-body  ">

                                       <h1>card4</h1>


                                        </div>
                                    </div>


                                    {/* Right side */}
                                    <div className="col-md-8">




<h1>card8</h1>



                                    </div>

                                    <hr />
                                    <div className="col-md-6">

                                        <div className="border-end pe-3 ">
                                            <div className="card-body ">
                                              
<h2>card6</h2>

                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="card-body  ">
                                            <h2>card6</h2>


                                        </div>
                                    </div>




                                </div>
                            </div>

                        </div>
                    </div>







                    {/* Right side */}



                    <div className="col-md-4">
                        <div className="card   border-0">

                            <div className="card-body "  >

                       <h1>right side</h1>


                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </>



    );
};

