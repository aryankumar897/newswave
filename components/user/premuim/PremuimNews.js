"use client"

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';


import { useSession } from "next-auth/react"

const PremiumNews = () => {


  const [news, setNews] = useState([])
  const { data } = useSession()
  const router = useRouter()


  useEffect(() => {

    if (!data?.user?._id)
      return


    checkSubscription()

  }, [data?.user?._id])



  const checkSubscription = async () => {

    const response = await fetch(`${process.env.API}/user/premuim/${data?.user?._id}`)

    const datares = await response.json()

    if (!response.ok) {
      console.log(response)

    } else {


      setNews(datares)

    }




  }







  return (
    <div className="container-fluid  mt-5">
      <div className="row">
        <div className="col-md-12">


          <div className="border-end pe-3 ">




            <hr />



            {news && news.map(post => (
              <div key={post._id} className="row mb-4  ">

                <div className="col-md-2">
                  <h5>{

                    format(post.createdAt || new Date().toLocaleString(), 'MMMM d, yyyy')

                  }</h5>
                </div>

                <div className="col-md-5">
                  <h4>

                    <a

                      style={{ color: "black", height: "5px", width: "100%", mb: "5px" }}
                      href={`/premuim/${post.slug}`}>
                      {post.title.substring(0, 100)}{"  "}
                    </a>

                  </h4>
                  <p>{post.subtitle.substring(0, 200)}</p>
                </div>
                <div className="col-md-5">
                  <img src={post.image} className="img-fluid" alt="Blog Post" />
                </div>
                <hr className='m-2' style={{ color: "black" }} />
              </div>
            ))}





            {
              news.length === 0 && (
                <>
                  <h2 className="text-center mb-4" style={{ color: '#333' }}>Subscribe</h2>
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



                </>

              )
            }

            <hr />

          </div>

        </div>




      </div>
    </div>
  );
};

export default PremiumNews;
