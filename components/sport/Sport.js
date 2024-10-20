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
import { Italiana } from 'next/font/google';
export default function MoreNews() {
    const router = useRouter();
    const [news, setNews] = useState([])



    useEffect(() => {


        const fetchData = async () => {
            try {

                const response = await fetch(`${process.env.API}/morenews`)

                const data = await response.json()

                setNews(data)


            } catch (error) {
                console.log(error);
            }



        }

        fetchData()

    }, [])



    return (


        <>

            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />


                <h5 style={{ margin: 5 }}  >
                
                
                Sports



                </h5>
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

                                            {


                                                news.length > 0 ? (

                                                    news.slice(2, 5).map((item) => (


                                                        <div

                                                            key={item._id}


                                                        >


                                                            <h5

                                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                                style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                                                className='subcategory-item'


                                                            >

                                                                {item.title}

                                                            </h5>

                                                            <p

                                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                                style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                                className='subcategory-item'


                                                            >{item.subtitle.substring(1, 100)}</p>

                                                            <p className="card-text"  >


                                                                <small className="text-muted"

                                                                    style={{ marginLeft: "25px" }}




                                                                >

                                                                    {readingTime(item.description).text}</small>

                                                            </p>

                                                            <hr />


                                                        </div>



                                                    ))




                                                ) : (

                                                    <>

                                                        {
                                                            newsItems && newsItems.map((post, index) => (



                                                                <div key={index}  >






                                                                    <h5




                                                                    >
                                                                        <Skeleton />

                                                                    </h5>



                                                                    <h1
                                                                        style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                                    >
                                                                        <Skeleton />

                                                                    </h1>








                                                                </div>



                                                            ))


                                                        }





                                                    </>



                                                )


                                            }


                                        </div>
                                    </div>


                                    {/* Right side */}
                                    <div className="col-md-8">



                                        {


                                            news.length > 0 ? (

                                                news.slice(0, 1).map((item) => (


                                                    <div

                                                        key={item._id}


                                                    >

                                                        <img

                                                            src={item.image}
                                                            alt={item.title}
                                                            onClick={() => router.push(`/news/${item.slug}`)}

                                                            style={{ cursor: 'pointer', maxWidth: '100%', margin: "1px,0" }}
                                                        />

                                                        <h2

                                                            onClick={() => router.push(`/news/${item.slug}`)}
                                                            style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                                            className='subcategory-item   text-center'


                                                        >

                                                            {item.title}

                                                        </h2>

                                                        <p

                                                            onClick={() => router.push(`/news/${item.slug}`)}
                                                            style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                            className='subcategory-item  text-center'


                                                        >{item.subtitle.substring(1, 100)}</p>








                                                    </div>



                                                ))




                                            ) : (

                                                <>

                                                    {


                                                        <img
                                                            src="https://placehold.co/1200x900?text=MoreNews"
                                                            className='img-fluid'

                                                            alt="image"

                                                        />



                                                    }





                                                </>



                                            )


                                        }




                                    </div>

                                    <hr />
                                    <div className="col-md-6">

                                        <div className="border-end pe-3 ">
                                            <div className="card-body ">

                                                {


                                                    news.length > 0 ? (

                                                        news.slice(3, 4).map((item) => (


                                                            <div

                                                                key={item._id}


                                                            >


                                                                <h5

                                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                                    style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                                                    className='subcategory-item'


                                                                >

                                                                    {item.title}

                                                                </h5>

                                                                <p

                                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                                    style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                                    className='subcategory-item'


                                                                >{item.subtitle.substring(1, 100)}</p>

                                                                <p className="card-text"  >


                                                                    <small className="text-muted"

                                                                        style={{ marginLeft: "25px" }}




                                                                    >

                                                                        {readingTime(item.description).text}</small>

                                                                </p>

                                                                <hr />


                                                            </div>



                                                        ))




                                                    ) : (

                                                        <>

                                                            {
                                                                newsItems && newsItems.map((post, index) => (



                                                                    <div key={index}  >






                                                                        <h5




                                                                        >
                                                                            <Skeleton />

                                                                        </h5>



                                                                        <h1
                                                                            style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                                        >
                                                                            <Skeleton />

                                                                        </h1>








                                                                    </div>



                                                                ))


                                                            }





                                                        </>



                                                    )


                                                }






                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="card-body  ">



                                            {


                                                news.length > 0 ? (

                                                    news.slice(2, 3).map((item) => (


                                                        <div

                                                            key={item._id}


                                                        >


                                                            <h5

                                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                                style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                                                className='subcategory-item'


                                                            >

                                                                {item.title}

                                                            </h5>

                                                            <p

                                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                                style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                                className='subcategory-item'


                                                            >{item.subtitle.substring(1, 100)}</p>

                                                            <p className="card-text"  >


                                                                <small className="text-muted"

                                                                    style={{ marginLeft: "25px" }}




                                                                >

                                                                    {readingTime(item.description).text}</small>

                                                            </p>

                                                            <hr />


                                                        </div>



                                                    ))




                                                ) : (

                                                    <>

                                                        {
                                                            newsItems && newsItems.map((post, index) => (



                                                                <div key={index}  >






                                                                    <h5




                                                                    >
                                                                        <Skeleton />

                                                                    </h5>



                                                                    <h1
                                                                        style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                                    >
                                                                        <Skeleton />

                                                                    </h1>








                                                                </div>



                                                            ))


                                                        }





                                                    </>



                                                )


                                            }


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



                                {


                                    news.length > 0 ? (

                                        news.slice(1, 5).map((item) => (


                                            <div

                                                key={item._id}


                                            >


                                                <h5

                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                    style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold" }}
                                                    className='subcategory-item'


                                                >

                                                    {item.title}

                                                </h5>

                                                <p

                                                    onClick={() => router.push(`/news/${item.slug}`)}
                                                    style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                    className='subcategory-item'


                                                >{item.subtitle.substring(1, 100)}</p>

                                                <p className="card-text"  >


                                                    <small className="text-muted"

                                                        style={{ marginLeft: "25px" }}




                                                    >

                                                        {readingTime(item.description).text}</small>

                                                </p>

                                                <hr />


                                            </div>



                                        ))




                                    ) : (

                                        <>

                                            {
                                                newsItems && newsItems.map((post, index) => (



                                                    <div key={index}  >






                                                        <h5




                                                        >
                                                            <Skeleton />

                                                        </h5>



                                                        <h1
                                                            style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                        >
                                                            <Skeleton />

                                                        </h1>








                                                    </div>



                                                ))


                                            }





                                        </>



                                    )


                                }







                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </>



    );
};

