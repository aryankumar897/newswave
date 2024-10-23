import React from 'react';
const blogPosts = [
  {
    id: 1,
    title: "The Importance of Responsive Web Design",
    image: "https://dummyimage.com/1200x900/000/fff",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
  },
  {
    id: 2,
    title: "How to Optimize Your Website for SEO",
    image: "https://dummyimage.com/1200x900/000/fff",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
  },
  {
    id: 3,
    title: "Understanding the Basics of Web Development",
    image: "https://dummyimage.com/1200x900/000/fff",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...."
  },
];

export default async function BlogPost({ news }) {



  return (
    <div className="container-fluid mt-5">
      <div className='m-2' style={{ backgroundColor: "black", height: "2px", width: "100%" }}></div>

      <div className="row mb-4">
        {/* use slice */}

        {news.map(post => (
          <div key={post._id} className="col-md-4">
            <img
              src={post.image}
              className="img-fluid"
              alt="Blog Post"

            />
            <h3>

              <a

                style={{ color: "black", height: "5px", width: "100%", mb: "5px" }}
                href={`/news/${post.slug}`}>
                {post.title}{"  "}
              </a>
            </h3>
            <p>{post.subtitle}</p>
          </div>
        ))}
      </div>

      <div className='m-2' style={{ backgroundColor: "black", height: "2px", width: "100%" }}></div>
    </div>
  );
}