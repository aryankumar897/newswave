"use client"

import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import Skeleton from 'react-loading-skeleton';
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



];



const ResultNews = ({ news }) => {

  const result = [news]

  return (


    <div className="container-fluid  mt-5">
      <div className="row">
        <div className="col-md-8">


          <div className="border-end pe-3 ">

            <hr />
            {
              result && result.length > 0 ? (
                result && result?.map(post => (
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
                          href={`/news/${post.slug}`}>
                          {post.title}{"  "}
                        </a>

                      </h4>
                      <p>{post.subtitle.substring(0, 200)}</p>


                      <div className="d-flex ">

                        <h6 className="m-2  mt-2" >

                          <a

                            style={{ color: "black", height: "5px", width: "100%", mb: "5px" }}
                            href={`/categorynews/${post.categoryId.slug}`}>
                            {post.categoryId.name}{"  "}
                          </a>

                        </h6>

                        <h6 className="m-2  mt-2"  >

                          <a

                            style={{ color: "black", height: "5px", width: "100%", mb: "5px" }}
                            href={`/subcategorynews/${post.subcategoryId.slug}`}>
                            {post.subcategoryId.name}{"  "}
                          </a>

                        </h6>

                      </div>

                    </div>
                    <div className="col-md-5">
                      <img src={post.image} className="img-fluid" alt="Blog Post" />
                    </div>
                    <hr className='m-2' style={{ color: "black" }} />
                  </div>
                ))

              ) : (
                <>

                  {

                    newsItems && newsItems?.map(post => (
                      <div key={post._id} className="row mb-4  ">

                        <div className="col-md-2">
                          <h5>{

                            <Skeleton />

                          }</h5>
                        </div>

                        <div className="col-md-5">
                          <h4>

                            <a



                            >
                              <Skeleton />{"  "}
                            </a>

                          </h4>
                          <p> <Skeleton /></p>


                          <div className="d-flex ">

                            <h6 className="m-2  mt-2" >

                              <a



                              >
                                <Skeleton />{"  "}
                              </a>

                            </h6>

                            <h6 className="m-2  mt-2"  >

                              <a


                              >
                                <Skeleton />{"  "}
                              </a>

                            </h6>

                          </div>

                        </div>
                        <div className="col-md-5">
                          <img src="https://placehold.co/400x300?text=NewsWave"
                            className="img-fluid" alt="Blog Post" />
                        </div>
                        <hr className='m-2' style={{ color: "black" }} />
                      </div>
                    ))



                  }




                </>
              )

            }
            <hr />

          </div>

        </div>

        <div className="col-md-4" >

          Advertisement
        </div>


      </div>
    </div>



  );
};

export default ResultNews;