
"use client"

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

export default function NewsSection({ newsItems }) {
    const router = useRouter();






    return (
        <div className="container-fliud">
            <div className="row">


                {

                    newsItems.length > 0 ? (



                        newsItems.slice(0,12).map((item, index) => (

                            <div
                                key={index}

                                className='col-lg-2   col-md-4 col-sm-12'

                            >


                                <div
                                    className='card border-0'
                                >

                                    <div className='card-body'>




                                     
                                        <img

                                            src={item.image}
                                            className='img-fluid mb-2'
                                            alt="image"
                                        />

                                        <h6



                                            onClick={() => router.push(`/news/${item.slug}`)}
                                            style={{ cursor: 'pointer', marginLeft: "25px",fontWeight:"bold" ,fontSize: "18px" }}
                                            className='subcategory-item'


                                        >


                                            {item.title.substring(0,100) }

                                        </h6>
                                        <p
                                            onClick={() => router.push(`/news/${item.slug}`)}
                                            style={{ cursor: 'pointer', marginLeft: "25px" }}
                                            className='subcategory-item'



                                        >


                                            {item.subtitle.substring(0, 80)}
                                        </p>




                                    </div>

                                </div>



                            </div>






                        ))





                    ) : (<> 
                            <div
                
                                className='col-lg-2   col-md-4 col-sm-12'

                            >


                                <div
                                    className='card border-0'
                                >

                                    <div className='card-body'>




                                        <h5


                                            className='card-title'

                                        >

                                            <Skeleton />

                                        </h5>
                                        <img

                                            src="https://placehold.co/600x400?text=Well-News"
                                            className='img-fluid mb-2'
                                            alt="image"
                                        />

                                        <h6



                        

                                        >


                                            <Skeleton />

                                        </h6>
                                        <p
                                        
                                     
                                       



                                        >


                                           <Skeleton/>
                                        </p>




                                    </div>

                                </div>



                            </div>


                    
                    
                    
                    
                     </>)




                }





            </div>
        </div>
    );
};

