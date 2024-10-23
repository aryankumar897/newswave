"use client"
import { format } from 'date-fns';
import { useState } from 'react';
import Search from "@/components/search/Search"
import Category from "@/components/category/Category"
import Stock from "@/components/stock/Stock"
import Blog from "@/components/blog/Blog"
import Navbar from "@/components/navbar/Navbar"
import News from "@/components/news/News"

import Culture from "@/components/culture/Culture"
import Well from "@/components/well/Well"
import Sport from "@/components/sport/Sport"
import MoreNews from '@/components/morenews/MoreNews';

import { FaSearch } from 'react-icons/fa';

import Mnavbar from '@/components/mobileNav/Mnavbar'
import ImageandVideo from "@/components/imageandvideogallary/Imgandvid"

import Living from "@/components/living/Living"
import Opinion from "@/components/opinion/opinion"

import Arts from "@/components/arts/Arts"


export default function Home() {
    const currentDate = new Date();
    const formattedDate = format(currentDate, 'EEEE, MMMM d, yyyy');


    const [showtoggle, setShowtoggle] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const toggle = () => {

        setShowtoggle(prevShowInput => !prevShowInput);
    };

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        console.log('Search query:', searchQuery);
    };







    return (

        <>
            <Mnavbar />
            <div className="container-fluid  hide  " >
                <Navbar/>

            </div>



            <div className="container-fluid  mt-1  hide">
                <div className="row" >





                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card mb-1 border-0">
                            <div className="card-body">


                                <div style={{ fontWeight: '400' }}>
                                    {formattedDate}
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card  border-0">
                            <div className="card-body" style={{

                                marginBottom: '40px',

                            }}    >



                                <h1 style={{
                                    fontFamily: '"Satisfy", cursive',
                                    fontWeight: 200,

                                    fontVariantCaps: 'petite-caps',

                                    fontSize: '58px',

                                    color: '#000',
                                    letterSpacing: '0px',


                                    marginBottom: '-40px', // Add margin-bottom
                                    //  padding: '10px', // Add padding

                                }}>
                                    NewsWaves

                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="card mb-1  border-0">
                            <div className="card-body">



                                <div className="buttonContainer">
                                    <Stock />
                                </div>




                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card  border-0">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <div className="search-container">



                                        <FaSearch className="search-icon" onClick={toggle} />


                                        <div className={showtoggle ? 'input-container active' : 'input-container'}>
                                            <input
                                                type="text"
                                                placeholder="Search..."
                                                value={searchQuery}
                                                onChange={handleInputChange}
                                            />
                                            <button onClick={handleSearch}>Go</button>
                                        </div>
                                    </div>

                                </h5>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card  border-0">
                            <div className="card-body"

                                style={{

                                    marginBottom: '-10px',

                                }}
                            >


                                <div>
                                    <span className="language-span" title="English">English</span>
                                    <span className="language-span"
                                        style={{ fontWeight: 600 }}

                                        title="Spanish">Spanish</span>

                                    <span className="language-span" title="French">French</span>
                                    <span className="language-span" title="Chinese">Chinese</span>
                                    <span className="language-span" title="Arabic">Arabic</span>
                                </div>



                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="card  border-0">
                            <div className="card-body">



                                <div className="buttonContainer">

                                    <button className="loginButton">
                                        <a href="/login" style={{ color: 'white', textDecoration: 'none' }}>
                                            Login
                                        </a>
                                    </button>


                                    <button className="subscribeButton">

                                        <a href="/subscription" style={{ color: 'white', textDecoration: 'none' }}>
                                            Subscribe
                                        </a>


                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>


            </div>









            <div className="container-fluid hide">

                <Category />


            </div>




            <Blog />
            <ImageandVideo />
            <MoreNews />
            <Sport />


            <Well />
            <Culture />

            <News />
            <Opinion />
            <Living />
            <Arts />
        </>

    );
}