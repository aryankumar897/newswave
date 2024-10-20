
"use client"

import "./style.css"


import React, { useEffect, useState } from 'react';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
export default function FeaturesDisplay() {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const [categories, setCategories] = useState([]);
    const router = useRouter();
    const [newslatters, setNewslatters] = useState([])

    const [lives, setLives] = useState([]);


    const [podcast, setPodcast] = useState([]);
    // Fetch categories with subcategories
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch(`${process.env.API}/categoryapi/categorywithsubcategory`); // Replace with your actual API route
                const data = await response.json();

                console.log("dataxxxx", data)
                if (data.success) {
                    setCategories(data.data);
                    setNewslatters(data?.newslatter)
                    setLives(data.live)
                    setPodcast(data.podcast)
                }
            } catch (error) {
                console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    const handleCategoryHover = (categoryName) => {
        setHoveredCategory(categoryName);
    };

    const handleCategoryLeave = () => {
        setHoveredCategory(null);
    };
    console.log("categories", categories)


    const handleSubcategoryClick = (subcategoryName) => {


        router.push(`/subcategorynews/${subcategoryName}`)

    }


    const handleCategoryClick = (categoryName) => {

        router.push(`/categorynews/${categoryName}`)

    }



    return (
        <>




            <div className="mega-menu justify-content-center">


                {categories.map(category => (
                    <div
                        key={category._id} // Assuming categories have unique _id fields
                        className="mega-menu-category"
                        onMouseEnter={() => handleCategoryHover(category?.name)}
                        onMouseLeave={handleCategoryLeave}
                    >
                        <h6 className="mega-menu-category-title"

                            onClick={() => handleCategoryClick(category.slug)}
                        >
                            {category.name}
                            {hoveredCategory === category.name ? <FiChevronUp /> : <FiChevronDown />}
                        </h6>

                        {hoveredCategory === category.name && category.name === 'Technology' ? (



                            <div
                                className="mega-menu-content"     >

                                <div className="d-flex">



                                    <ul className="mega-menu-subcategories  mega-menu-hover">
                                        <h1 className="mega-menu-section-title "   >Live News</h1>



                                        {

                                            category.subcategories && category.subcategories.map(subcategory => (




                                                <li
                                                    key={subcategory._id}
                                                    className="mega-menu-subcategory"
                                                    onClick={() => handleSubcategoryClick(subcategory.slug)}
                                                >

                                                    {subcategory.name}

                                                </li>

                                            ))

                                        }


                                    </ul>

                                    <ul className="mega-menu-blog-post d-flex justify-content-center"   >

                                        {/* live newspost */}



                                        {lives && lives.slice(0,5).map((live) => (


                                            <li
                                                
                                                key={live._id}
                                                className="mega-menu-blog-post mt-1 list-unstyled "

                                                onClick={() => router.push(`news/${live.slug}`)}

                                            >

                                                <img
                                                    src={live.image}
                                                    alt={live.title}

                                                    className="img-fluid"
                                                    width="200"
                                                    height="150"
                                                />

                                                <h6 className="mega-menu-blog-post-title" >

                                                    {live.title.substring(0, 20)}

                                                </h6>
                                                <p className="mega-menu-blog-post-content"    >{live.subtitle.substring(0, 30)}</p>
                                            </li>






                                        ))}










                                    </ul>




                                </div>


                                <h3 className="mega-menu-section-title" >   podcast  news </h3>

                                <ul className="mega-menu-blog-post d-flex justify-content-center"   >

                                    {/*   podcast newspost */}


                                    {podcast && podcast.slice(0,5).map((l) => (
                                        <li
                                           
                                            key={l._id}
                                            className="mega-menu-blog-post mt-1 list-unstyled "
                                          
                                        >

                                            <img
                                                src={l.image}
                                                alt={l.title}

                                                className="img-fluid"
                                                style={{ width: '150px', height: '150px' }}
                                            />

                                            <h6 
                                                
                                                onClick={() => router.push(`news/${l.slug}`)}
                                            
                                            className="mega-menu-blog-post-title" >

                                                {l.title.substring(0, 20)}

                                            </h6>
                                            <p className="mega-menu-blog-post-content"    >{l.subtitle.substring(0, 30)}</p>
                                        </li>






                                    ))}



                                </ul>

                            </div>

                        ) : ""}











                        {



                            hoveredCategory === category.name && category.name === 'Education' ? (<>


                                <div className="mega-menu-content">
                                    <h3 className="mega-menu-section-title" >  newslatter  news </h3>
                                   
                                   
                                    <div className="d-flex"    >

                                        <ul className="mega-menu-subcategories     mega-menu-hover   list-unstyled"   >


                                            {

                                                category.subcategories && category.subcategories.map((subcategory => (
                                                    <li
                                                        key={subcategory._id}
                                                        classNmae="mega-menu-subcategory"
                                                        onClick={() => handleSubcategoryClick(subcategory.slug)}

                                                    >

                                                        {subcategory.name}


                                                    </li>




                                                )))


                                            }


                                        </ul>



                              

                                        <ul className="mega-menu-newsletter-pots"    >

                                            {newslatters && newslatters.map((news) => (

                                                <li
                                                    onClick={() => router.push(`/news/${news?.slug}`)}

                                                    key={news._id}
                                                    className="mega-menu-newsletter-post list-unstyled "




                                                >



                                                    <img
                                                        src={news.image}
                                                        alt={news.title}
                                                        className="img-fluid"

                                                        width="200"
                                                        height="150"

                                                    />

                                                    <h6 className="mega-menu-newsletter-post-title"    >{news.title.substring(0, 20)}</h6>

                                                    <p className="mega-menu-newsletter-post-content"    >{news.subtitle.substring(0, 30)}</p>



                                                </li>



                                            ))}



                                        </ul>





                                    </div>

                                </div>







                            </>) : ""


                        }











                        {


                            hoveredCategory === category.name && (category.name != 'Education' && category.name != 'Technology') ? (<>


                                <div className=" mega-menu-content"   >


                                    <div className="d-flex">
                                        <ul className=" mega-menu-subcategories mega-menu-hover"   >



                                            {


                                                category.subcategories && category.subcategories.map(subcategory => (
                                                    <li

                                                        key={subcategory._id}
                                                        className="mega-menu-subcategory"


                                                        onClick={() => handleCategoryClick(subcategory.slug)}
                                                    >



                                                        {subcategory.name}


                                                    </li>



                                                )

                                                )
                                            }



                                        </ul>


                                    </div>

                                </div>





                            </>) : ""


                        }









                    </div>
                ))}

            </div>








            <div className="container-fluid mt-2">
                <hr style={{ border: '1px solid black', margin: 1 }} />
                <hr style={{ border: '1px solid black', margin: 0 }} />
            </div>
        </>
    );
}
