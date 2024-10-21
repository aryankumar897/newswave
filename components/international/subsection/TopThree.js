import React from 'react';


export default async function TopThree({ news }) {



  return (
    <div className="container-fluid mt-5">
      <div className='m-2' style={{ backgroundColor: "black", height: "2px", width: "100%" }}></div>

      <div className="row mb-4">
        {/* use slice */}

        {news.slice(0, 3).map(post => (
          <div
            key={post._id}
            className="col-md-4">
            <img
              src={post?.image}
              className="img-fluid"
              alt="Blog Post"

            />
            <h3>

              <a
                style={{
                  cursor: 'pointer', fontWeight: "bold", fontSize: "20px",
                  color: "black", height: "5px", width: "100%", mb: "5px"
                }}
                href={`/news/${post.slug}`}

              >
                {post.title.substring(0,100)}
              </a>
            </h3>
            <p>
              {post.subtitle}
            </p>
          </div>
        ))}
      </div>

      <div className='m-2' style={{ backgroundColor: "black", height: "2px", width: "100%" }}></div>
    </div>
  );
}