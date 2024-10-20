"use client"
import readingTime from  'reading-time'

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';








const TwoSidedComponent = ({
    title, imageUrl, slug, desc

}) => {
    const router = useRouter()




    return (

        <div className="conatainer my-2">

            <div className="row  align-items-center">
                <div className="col-md-6">


                    <h5

                        onClick={() => router.push(`/news/${slug}`)}
                        style={{ cursor: 'pointer', marginLeft: "25px", fontSize: '18px', }}
                        className='subcategory-item'


                    >


                        {title.substring(0,100)}
                    </h5>

                    <p
                        style={{ marginLeft: "25px" }}



                    >

                  {   readingTime(desc).text}

                    </p>

                </div>




<div   className=" col-md-6 text-center"    > 

<img   
src={imageUrl}

alt="image"


className='img-fluid'

style={{width: "150px", height: "150px"}}

  />
 </div>


            </div>


        </div>



    )


}








const Home = () => {



    const [news, setNews] = useState([])



    useEffect(() => {




        const fetchData = async () => {

            try {


                const response = await fetch(`${process.env.API}/missed`)







                const data = await response.json()
                setNews(data?.data)
                console.log("missed news", data)


            } catch (error) {
                console.log(error)
            }





        }
        fetchData()

    }, [])










    return (
        <div>


            <h1 style={{
                color: 'white', // Set text color
                textAlign: 'center', // Center align text
                fontSize: '2rem', // Adjust font size
                position: 'relative', // For positioning underline
                margin: '20px 0' // Optional: add some margin around the title
            }}>

                <span style={{
                    color: 'red', // Change color for "Missed News"
                    fontWeight: 'bold',
                    display: 'inline-block',
                    marginLeft: '10px', // Add some space between "News" and "Missed News"
                    position: 'relative' // For positioning the underline
                }}>
                    In Case You Missed It
                    <span style={{
                        content: '""',
                        display: 'block',
                        width: '100%',
                        height: '2px', // Thickness of underline
                        backgroundColor: 'red', // Color of underline
                        position: 'absolute',
                        bottom: '-5px', // Position the underline below the text
                        left: '0',
                    }}></span>
                </span>
            </h1>


            {

                news.slice(0,6).map((item, index) => (

                    <TwoSidedComponent

                        key={index}
                        title={item.title}

                        imageUrl={item.image}
                        slug={item.slug}


                        desc={item.description}




                    />




                ))


            }





        </div>
    );
};

export default Home;