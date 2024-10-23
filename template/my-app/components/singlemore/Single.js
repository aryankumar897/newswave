





export default async function YourPage() {









  return (
    <div className="container-fluid">

      <div className="row  ">
        <div className="col-lg-8 ">
          <div className="container-fluid mt-2 ">

            <hr style={{ border: '1px solid black', margin: 1 }} />
            <hr style={{ border: '1px solid black', margin: 0 }} />

            <h5 style={{ margin: 5 }}  > More News</h5>
          </div>






          <div className="row  d-flex">
            {news.map((news, index) => (


              <div 
            //  key={index}
               className="col-md-4 ">
                <img
             //    src={news.image}
              //    alt={news.title}
                  
                   className="img-fluid" />


                <h5>

                  <a
                  // href={`/news/${news.slug}`} 
                   
                   style={{ color: 'black', }}>
               title
                  </a>


                </h5>


              </div>


            ))}
          </div>
        </div>






        <div className="col-md-4">

          <div className="container-fluid mt-2 ">

            <hr style={{ border: '1px solid black', margin: 1 }} />
            <hr style={{ border: '1px solid black', margin: 0 }} />

            <h5 style={{ margin: 5 }}  >Trending News </h5>
          </div>





           <div className="card    border-0">
            <div className="card-body">

              {trendingNews.map((newsItem) => (
                <div 
              //  key={newsItem._id}
                >
                  <h5 className="card-title">
                    <a



                     // href={`/news/${newsItem.slug}`} 
                      
                      style={{ color: 'black', }}>
                    title
                    </a>
                  </h5>
                  <hr />
                </div>
              ))}

            </div>
          </div> 
        </div>




      </div>
    </div>
  );
};
