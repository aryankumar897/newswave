


"use client"
import { DiscussionEmbed } from 'disqus-react';
import { format } from 'date-fns';

import { useRouter } from 'next/navigation'



import Share from "./Share"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react";

import { useSession } from "next-auth/react";










export default function News() {
  


  const titleStyle = {
    fontStyle: 'italic',
    fontWeight: 'bold',
  };

  const descriptionStyle = {
    marginTop: '2rem',
    lineHeight: '1.5', // Adjust as needed
    fontWeight: '500',
    letterSpacing: '.5px',
    wordSpacing: '3px',
    fontSize: '18px'
  };


  const editorImageStyle = {

    borderRadius: '50%', // Makes the image circular
  };





  return (
    <>

      <ToastContainer />




      <div className="container my-1 center">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1 className="title  text-start" style={titleStyle}   >
              {news?.title}
            </h1>
            <p className="text-start" style={descriptionStyle} >{news.subtitle}</p>

            <Share news={news} />

            <img src={news.image} className="img-fluid" alt="News Image" />
            <p className="mt-3  text-start"


            >{news.imagecaption}</p>
            <div className="d-flex  mt-4 text-start">

              <img src={news.user_id.image}

                className="rounded-circle mx-2 "

                style={editorImageStyle}
                width={50} height={50} alt="Editor 1" />

            </div>
            <div className="text-start">

              <span >{news.user_id.name}</span>

              <div>
                <p> {formattedDate}</p>
              </div>

            </div>




            <p className="mt-4 text-start "
              style={descriptionStyle}

            >

              {news.description}

            </p>
            <hr />

          </div>
        </div>
      </div>


      <hr />













    </>
  );
};


