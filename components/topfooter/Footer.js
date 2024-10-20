import Head from 'next/head';

import "./style.css"
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';




export default function HomePage() {

    const router = useRouter()
    const [categories, setCategories] = useState()

    useEffect(() => {

        const fetchCategories = async () => {
            try {




                const response = await fetch(`${process.env.API}/categoryapi/categorywithsubcategoryfooter`)



                const data = await response.json()



                if (data.success) {


                    setCategories(data.data)

                }


            } catch (error) {
                console.log(error)
            }




        }


        fetchCategories()

    }, [])

    const handleSubcategoryClick = (subcategoryName) => {

        router.push(`/subcategorynews/${subcategoryName}`)



    }

    return (


        <>
            <div className="container-fluid mt-2 ">

                <hr style={{ border: '1px solid dark', margin: 1 }} />



            </div>







            <div className="container-fluid"     >
                <div className="row">
                    {/* Left Side - Categories */}
                    <div className="col-md-9   ">
                        <h5 style={{
                            fontFamily: '"Satisfy", cursive',
                            fontWeight: 200,

                            fontVariantCaps: 'petite-caps',

                            fontSize: '30px',

                            color: '#000',
                            letterSpacing: '0px',

                            marginTop: '20px',
                            marginBottom: '10px', // Add margin-bottom
                            //  padding: '10px', // Add padding

                        }}>
                            NewsWaves

                        </h5>


                        <div className='d-flex flex-wrap'  >

                            {

                                categories && categories.map(category => (




                                    <div key={category._id}

                                        className='text-black m-2 ml-5 mb-2'


                                    >


                                        <div className='m-3 text-uppercase' style={{ fontWeight: "bold" }}   >



                                            {category.name}


                                        </div>



                                        <ul className="list-unstyled m-3" style={{ cursor: 'pointer' }}>

                                            {category.subcategories.map(subcategory => (



                                                <li
                                                    key={subcategory._id}
                                                    onClick={() => handleSubcategoryClick(subcategory.slug)}
                                                    className="font-weight-light  subcategory-item  text-capitalize"

                                                >


                                                    {subcategory.name}

                                                </li>



                                            ))}



                                        </ul>









                                    </div>



                                ))

                            }



                        </div>


                    </div>

                    {/* Right Side - Subscribe Button */}
                    <div className="col-md-3 border-left p-4 mt-5" >
                        <h2


                            className="font-weight-light text-center mb-2   subcategory-item  text-capitalize"
                            style={{ color: '#333' }}


                        >Subscribe</h2>
                        <button
                            className="btn btn-lg"
                            style={{
                                backgroundColor: "black",
                                color: "white",
                                width: "100%",
                                height: "50px",
                                border: "none",
                                borderRadius: "5px",
                                fontSize: "18px",
                                fontWeight: "bold",
                                cursor: "pointer",
                                transition: "background-color 0.3s, transform 0.3s"
                            }}
                            onMouseOver={(e) => e.currentTarget.style.backgroundColor = "#333"}
                            onMouseOut={(e) => e.currentTarget.style.backgroundColor = "black"}



                            onClick={() => router.push("/subscription")}
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

