import React from 'react';
import { format } from 'date-fns';






export default async function BlogPost({ news, banner }) {

  // const currentDate = news?.createdAt
  // const formattedDate = format(currentDate, 'MMMM d, yyyy');


  return (
    <div className="container-fluid  mt-5">
      <div className="row">
        <div className="col-md-8">


          <div className="border-end pe-3 ">




            <hr />
            {news.map(post => (
              <div key={post._id} className="row mb-4  ">

                <div className="col-md-2">
                  <h5>{

               //     format(post.createdAt, 'MMMM d, yyyy')

                  }</h5>
                </div>

                <div className="col-md-5">
                  <h3>

                    <a

                      style={{ color: "black", height: "5px", width: "100%", mb: "5px" }}
                    //  href={`/news/${post.slug}`}
                      >
                      post.title
                    </a>

                  </h3>
                  <p>
                  post.subtitle
                  </p>
                </div>
                <div className="col-md-5">
                  <img
                  // src={post.image} 
                   className="img-fluid" alt="Blog Post"
                    />
                </div>
                <hr className='m-2' style={{ color: "black" }} />
              </div>
            ))}
            <hr />

          </div>

        </div>




        <div className="col-md-4  ">



          <div className="ads-section">
            <hr />
            <h5
              style={{
                textAlign: 'center', // Center the text horizontally
                margin: '20px 0',    // Add some vertical spacing
                color: 'blue'        // Optional: Change the text color
              }}
            >
              Advertisement
            </h5>

            <img
            // src={banner[0].imageUrl}
              className="img-fluid"


              alt="Advertisement" />
            <h3>
              banner[0].title
            </h3>

          </div>








        </div>
      </div>
    </div>
  );
}

