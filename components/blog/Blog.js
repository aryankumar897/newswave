"use client"


import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Missed from "@/components/missed/Missed"

import Live from  "@/components/live/Live"


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


    const [news, setNews] = useState([])

    const [banner, setBanner] = useState([])
 const  [breakingNews, setBreakingNews] = useState([])


    const router = useRouter()



    useEffect(() => {

        const fetchData = async () => {

            try {

                const response = await fetch(`${process.env.API}/home`)



                const data = await response.json()

                console.log("datax", data)

                setNews(data.data)
                setBanner(data.banner)
                setBreakingNews(data.breaking)

            } catch (error) {
                console.log(error)
            }






        }
        fetchData()

    }, [])


    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1

                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };



    return (
        <div className="container-fluid  mt-5">
            <div className="row">



                <div className="col-md-8">


                    <div className="border-end pe-3" >



                        <hr />

                        {

                            news && news.length > 0 ? (

                                news.slice(1,15).map(post => (

                                    <>

                                        <p className="mega-menu-blog-post-category">

                                            <span
                                                className="font-weight-light  subcategory-item  text-capitalize p-3"

                                                onClick={() => router.push(`/categorynews/${post.categoryId.slug}`)}

                                                style={{ cursor: 'pointer', fontWeight: "bold" }}


                                            >

                                                {post.categoryId.name}
                                            </span>
                                            <span


                                                onClick={() => router.push(`/subcategorynews/${post.subcategoryId.slug}`)}

                                                style={{ cursor: 'pointer', fontWeight: "bold" }}


                                                className="font-weight-light  subcategory-item  text-capitalize"

                                            >

                                                {post.subcategoryId.name}
                                            </span>

                                        </p>

                                        <div
                                            key={post._id}

                                            className=' row  mb-4'

                                        >

                                            <div className='col-md-6'>


                                                <h3
                                                    onClick={() => router.push(`/news/${post.slug}`)}

                                                    style={{ cursor: 'pointer', marginLeft: "25px",fontWeight:"bold", fontSize:"22px"}}
                                                    className='subcategory-item'


                                                >{post.title}</h3>

                                                <p
                                                    onClick={() => router.push(`/news/${post.slug}`)}

                                                    style={{ cursor: 'pointer', marginLeft: "25px" }}
                                                    className='subcategory-item'


                                                > {post.subtitle}  </p>


                                            </div>


                                            <div className="col-md-6"  >


                                                <img


                                                    src={post.image}
                                                    className='img-fluid'

                                                    alt="news post"
                                                />



                                            </div>
                                            <hr
                                                className='m-2'

                                                style={{ color: 'black' }}


                                            />

                                        </div>



                                    </>




                                ))



                            ) : (


                                newsItems && newsItems.map(post => (
                                    <>

                                        <p className='mega-menu-blog-post-category'  >


                                            <span><Skeleton /></span>

                                            <span><Skeleton /></span>


                                        </p>


                                        <div
                                            key={post.id}

                                            className='row mb-4'


                                        >

                                            <div className='col-md-6'   >

                                                <h3><Skeleton /></h3>

                                                <p




                                                >  <Skeleton />    </p>
                                            </div>

                                            <div className='col-md-6'   >

                                                <img


                                                    src="https://placehold.co/900x600?text=NewsWave"
                                                    className='img-fluid'
                                                    alt="blog post"

                                                />


                                            </div>
                                        </div>


                                    </>
                                ))




                            )



                        }


                    </div>






                </div>


                <div className="col-md-4 ">

                    <div className="ads-section"  >

                        <hr />



                        <h5

                            style={{
                                textAlign: 'center',
                                margin: "20px 0",
                                color: "blue"



                            }}



                        > Advertisement  </h5>


                        {
                            news && news.length > 0 ? (


                                banner.slice(5, 6).map(ban => (

                                    <>

                                        <img
                                            src={ban.imageUrl}
                                            className="img-fluid"
                                            alt="banner"

                                        />
                                        <h5
                                            style={{ marginLeft: "155px", cursor: 'pointer' }}



                                        >
                                            {ban.title}

                                        </h5>


                                    </>

                                ))



                            ) : (<>

                                <img
                                    src="https://placehold.co/900x600?text=Advertisement"
                                    className="img-fluid"
                                    alt="banner"

                                />
                                <h5
                                    style={{ marginLeft: "155px", cursor: 'pointer' }}



                                >
                                    <Skeleton />

                                </h5>



                            </>)


                        }




                    </div>



                    <h5
                        style={{
                            textAlign: 'center',
                            margin: "20px 0",
                            color: "red",
                            fontWeight: "bold"


                        }}



                    >
                        Breaking News

                    </h5>

                    <Slider {...settings}>


                        {


                            breakingNews && breakingNews.length > 0 ? (

                                breakingNews && breakingNews.map((post, index) => (


                                    <div
                                        key={index}

                                    >

                                        <div className="ads-section">
                                            <hr />



                                            <img

                                                src={post.image}
                                                className='img- fluid'
                                                alt="slider"
                                                style={{ height: "350px" }}
                                            />

                                            <h3 
                                            
                                            onClick={() => router.push(`/news/${post.slug}`)}
                                                style={{ cursor: 'pointer', marginLeft: "25px", fontWeight: "bold", fontSize: '22px', }}
                                                className='subcategory-item'

                                            >



                                                {post.title}
                                            </h3>

                                            <p
                                                style={{ cursor: 'pointer', marginLeft: "25px" }}



                                            >


                                                {post.subtitle}
                                            </p>


                                        </div>






                                    </div>




                                ))




                            ) : (<>

                                {
                                    newsItems && newsItems.map((post, index) => (



                                        <div key={index}  >

                                            <div className="ads-section">

                                                <hr />


                                                <img
                                                    src="https://placehold.co/900x600?text=Breaking-News"
                                                    className="img-fluid"
                                                    alt="banner"

                                                />
                                                <h5
                                                    style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                >
                                                    <Skeleton />

                                                </h5>



                                                <hp
                                                    style={{ marginLeft: "155px", cursor: 'pointer' }}



                                                >
                                                    <Skeleton />

                                                </hp>



                                            </div>




                                        </div>



                                    ))


                                }





                            </>)



                        }

                    </Slider>

                    <Missed/>
                    <Live/>
                </div>






            </div>
        </div>
    );
}

