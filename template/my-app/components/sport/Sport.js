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


    const [news, setNews] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.API}/morenews`); // Fetch data from the server
                const data = await response.json(); // Parse JSON data
                setNews(data);

                console.log("zz", data)

                // Update state with the fetched data
            } catch (error) {
                console.error('Error fetching news:', error); // Handle any errors
            }
        };

        fetchData(); // Call the async function
    }, []);


    return (


        <>

            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid black', margin: 1 }} />


                <h5 style={{ margin: 5 }}  >Sports</h5>
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

                                            {news.length > 0 ? (


                                                news.slice(1, 4).map((item) => (
                                                    <div key={item._id}>


                                                        <h5 className="card-title"
                                                            onClick={() => router.push(`/news/${item.slug}`)}
                                                            style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                        >{item.title}</h5>

                                                        <p className="card-text">{item.subtitle.substring(0, 100)}</p>

                                                        <p className="card-text"><small className="text-muted">

                                                            {readingTime(item?.description).text}

                                                        </small></p><hr />


                                                    </div>
                                                ))



                                            ) : (





                                                newsItems.map((item) => (
                                                    <div key={item._id}>


                                                        <h5 className="card-title"

                                                            style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                        >

                                                            <Skeleton />   </h5>

                                                        <p className="card-text"><Skeleton />   </p>

                                                        <p className="card-text"><small className="text-muted">

                                                            <Skeleton />

                                                        </small></p><hr />


                                                    </div>
                                                ))






                                            )}





                                        </div>
                                    </div>


                                    {/* Right side */}
                                    <div className="col-md-8">





                                        {news.length > 0 ? (
                                            news.slice(0, 1).map((item) => (
                                                <div key={item._id}>

                                                    <img
                                                        src={item.image}
                                                        alt={item.title}
                                                        onClick={() => router.push(`/news/${item.slug}`)}
                                                        style={{ cursor: 'pointer', maxWidth: '100%', margin: '1px 0', }}
                                                    />
                                                    <hr />
                                                </div>
                                            ))
                                        ) : (
                                            <img src="https://placehold.co/1200x900?text=NewsWave" className="img-fluid" alt="Right Image" />

                                        )}




                                    </div>

                                    <hr />
                                    <div className="col-md-6">

                                        <div className="border-end pe-3 ">
                                            <div className="card-body ">
                                                {news.length > 0 ? (


                                                    news.slice(1, 2).map((item) => (
                                                        <div key={item._id}>


                                                            <h5 className="card-title"
                                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                                style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                            >{item.title}</h5>

                                                            <p className="card-text">{item.subtitle}</p>

                                                            <p className="card-text"><small className="text-muted">

                                                                {readingTime(item?.description).text}

                                                            </small></p><hr />


                                                        </div>
                                                    ))



                                                ) : (



                                                    newsItems.slice(1, 2).map((item) => (
                                                        <div key={item._id}>


                                                            <h5 className="card-title"

                                                                style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                            ><Skeleton /></h5>

                                                            <p className="card-text"><Skeleton /></p>

                                                            <p className="card-text"><small className="text-muted">
                                                                <Skeleton />

                                                            </small></p><hr />


                                                        </div>
                                                    ))








                                                )}


                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-md-6">
                                        <div className="card-body  ">
                                            {news.length > 0 ? (


                                                news.slice(1, 2).map((item) => (
                                                    <div key={item._id}>


                                                        <h5 className="card-title"
                                                            onClick={() => router.push(`/news/${item.slug}`)}
                                                            style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                        >{item.title}</h5>

                                                        <p className="card-text">{item.subtitle}</p>

                                                        <p className="card-text"><small className="text-muted">

                                                            {readingTime(item?.description).text}

                                                        </small></p><hr />


                                                    </div>
                                                ))



                                            ) : (



                                                newsItems.slice(1, 2).map((item) => (
                                                    <div key={item._id}>


                                                        <h5 className="card-title"

                                                            style={{ cursor: 'pointer', textDecoration: 'underline', }}

                                                        ><Skeleton /></h5>

                                                        <p className="card-text"><Skeleton /></p>

                                                        <p className="card-text"><small className="text-muted">
                                                            <Skeleton />

                                                        </small></p><hr />


                                                    </div>
                                                ))









                                            )}


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

                                {news.length > 0 ? (


                                    news.slice(1, 2).map((item) => (
                                        <div key={item._id}>


                                            <h5
                                                onClick={() => router.push(`/news/${item.slug}`)}
                                                style={{ cursor: 'pointer', marginLeft: '25px', textDecoration: 'underline', }}

                                            >{item.title}</h5>



                                            <hr />

                                        </div>
                                    ))



                                ) : (
                                    newsItems.slice(1, 2).map((item) => (
                                        <div key={item._id}>


                                            <h5


                                            >
                                                <Skeleton />

                                            </h5>



                                            <hr />

                                        </div>
                                    ))

                                )}



                            </div>
                        </div>
                    </div>





                </div>
            </div>



        </>



    );
};

