import React from 'react';

export default async function NewsSection({ newsItems }) {







  return (
    <div className="container-fliud">
      <div className="row">
        {newsItems.map((item, index) => (
          <div key={index} className="col-lg-2 col-md-4 col-sm-12 ">
            <div className="card  border-0" >
              <div className="card-body">
                <span className="card-title">
                {  item.subcategoryId.name}
                </span>
                <img
                 src={item.image}
                  className="img-fluid mb-2"
                alt={item.title}
                />
                <h6 className="card-subtitle mb-2 text-muted">

                  <a
                    style={{
                      cursor: 'pointer', fontWeight: "bold", fontSize: "20px",
                      color: "black", height: "5px", width: "100%", mb: "5px"
                    }}
                    href={`/news/${item.slug}`}
                
                  >
                    {item.title.substring(0, 100)}
                  </a>
                </h6>
                <p className="card-text">

                {  item.subtitle.substring(0, 100)}



                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

