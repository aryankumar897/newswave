
import React from 'react';

export default async function BlogPost({ news }) {



  return (
    <div className="container-fluid  mt-5">





      <div className='m-2' style={{ backgroundColor: "black", height: "2px", width: "100%" }}></div>


      {news.slice(0, 1).map(post => (
        <div
           key={post._id} 
          className="row mb-1 ">


          <div className="col-md-4"
            style={{ display: "flex", justifyContent: "center", alignItems: "center" }}

          >

            <div>

              <h3 style={{ mb: "15px" }}   >
                <a

                  style={{
                    cursor: 'pointer', fontWeight: "bold", fontSize: "20px",
                     color: "black", height: "5px", width: "100%", mb: "5px" }}
                 href={`/news/${post.slug}`}
                >
                 { post.title.substring(0,100)}
                </a>

              </h3>
              <p>

             {   post.description.substring(0, 650)}

              </p>


            </div>

          </div>
          <div className="col-md-8">
            <img
                src={post.image} 
              className="img-fluid"
              alt="Blog Post"

              style={{ width: "100%" }}


            />
          </div>

        </div>
      ))}
      <div className='m-2' style={{ backgroundColor: "black", height: "3px", width: "100%" }}></div>



    </div>
  );
}

