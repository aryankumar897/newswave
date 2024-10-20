import React from 'react';

import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/navigation';

export default function NewsSection({ newsItems, news }) {
    const router = useRouter();



    return (
        <div className="container-fliud">
            <div className="row">


                {

                    news.length > 0 ? (



                        news.slice(0,18).map((item, index) => (

                            <div
                                key={index}
                                className="col-lg-2   col-md-4  col-sm-12 mb-4 "


                            >
                                <div className="card  border-0">

                                    <div className=" card-body">

                                        <span


                                            onClick={() => router.push(`/international/section/subsection/${item.subcategoryId.slug}`)}

                                            style={{ cursor: 'pointer', fontWeight: "bold" }}


                                            className="font-weight-light  subcategory-item  text-capitalize  mb-2 text-center"

                                        >

                                            {item.subcategoryId.name}
                                        </span>
                                        <img
                                            src={item.image}
                                            className='img-fluid mb-2'

                                            alt={item.title}


                                        />

                                        <h6
                                            onClick={() => router.push(`/news/${item.slug}`)}
                                       

                                          
                                            style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                            className='subcategory-item'

                                        >

                                            {item.title.substring(0,100)}
                                        </h6>

                                        <p
                                            onClick={() => router.push(`/news/${item.slug}`)}
                                            style={{ cursor: 'pointer', marginLeft: "25px", }}
                                            className='subcategory-item '


                                        >

                                            {item.subtitle.substring(0, 50)}

                                        </p>



                                    </div>


                                </div>



                            </div>








                        ))





                    ) : (

                        newsItems.map((item, index) => (   



                            <div
                       
                                className="col-lg-2   col-md-4  col-sm-12 mb-4 "


                            >
                                <div className="card  border-0">

                                    <div className=" card-body">

                                        <h5>       <Skeleton /></h5>
                                        <img
                                            src="https://placehold.co/400x300?text=News"
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





))




                    )




                }


            </div>
        </div>
    );
};

