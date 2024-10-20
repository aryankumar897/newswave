

"use  client"

import React, { useEffect, useState } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import { useRouter } from 'next/navigation';





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



    const router = useRouter()


    const [news, setNews] = useState([])

    const [loading, setLoading] = useState(true)

    useEffect(() => {


        const fetchData = async () => {
            try {


                const response = await fetch(`${process.env.API}/morenews`)
                const data = await response.json()
                setNews(data)




            } catch (error) {
                console.log(error)
            }




        }

        fetchData()

    }, [])






    return (

        <>
            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />


                <h5 style={{ margin: 5 }}  > Culture</h5>
            </div>



            <div className="container-fluid">

                <div className="row">


                    {

                        news.length > 0 ? (


                            news.slice(0, 1).map((item, index) => (



                                <div
                                    className=' col-md-8'
                                    key={index}

                                >
                                    <div className="item">

                                        <img src={item.image}


                                            alt="image"
                                            className='img-fluid'


                                        />



                                        <h3

                                            onClick={() => router.push(`/news/${item.slug}`)}
                                            style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" ,fontSize:"18px"}}
                                            className='subcategory-item text-center'


                                        >

                                            {item.title.substring(0,100)}

                                        </h3>


                                        <p

                                            onClick={() => router.push(`/news/${item.slug}`)}
                                            style={{ cursor: 'pointer', marginLeft: "25px",  }}
                                            className='subcategory-item text-center'



                                        >

                                            {item.subtitle.substring(0, 100)}

                                        </p>


                                    </div>





                                </div>





                            ))





                        ) : (



                            <div
                                className=' col-md-8'


                            >
                                <div className="item">

                                    <img 
                                    src="https://placehold.co/1030x900?text=Culture"


                                        alt="image"
                                        className='img-fluid'


                                    />



                                    <h3

                                    >

                                        <Skeleton />

                                    </h3>


                                    <p




                                    >

                                        <Skeleton />

                                    </p>


                                </div>





                            </div>




                        )



                    }





                    <div className="col-md-4  ">
                        {/* Right Side */}
                        <div className="row ">



                            {


                                news.length > 0 ? (

                                    news.slice(0,8).map((item, index) => (

                                        <div className=" col  col-md-6 col-12"  >
                                            <div className="item"  >

                                                <img
                                                    src={item.image}
                                                    alt="item image"


                                                 className="img-fluid"
                                                />


                                                <h6

                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                    style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" ,fontSize:"18px"}}
                                                    className='subcategory-item text-center'


                                                >

                                                    {item.title.substring(0,100)}

                                                </h6>


                                                <p

                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                    style={{ cursor: 'pointer', marginLeft: "25px",  }}
                                                    className='subcategory-item text-center'



                                                >

                                                    {item.subtitle.substring(0, 50)}

                                                </p>


                                            </div>



                                        </div>




                                    ))



                                ) : (


                                        <div
                                            className=' col-md-8'


                                        >
                                            <div className="item">

                                                <img src="https://placehold.co/1030x900?text=Culture"


                                                    alt="image"
                                                    className='img-fluid'


                                                />



                                                <h3

                                                >

                                                    <Skeleton />

                                                </h3>


                                                <p




                                                >

                                                    <Skeleton />

                                                </p>


                                            </div>





                                        </div>




                                )

                            }


                        </div>
                    </div>
                </div>
            </div>

        </>




    )


}