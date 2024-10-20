
async  function  getNews(){

 const  response =await fetch(`${process.env.API}/singlenews/morenews`,{  
    method: 'GET',

 next :{revalidate:1},
  })


 //console.log("res",response)

 if(!response.ok){

 throw new Error('Failed to fetch   news')


 }

 const data = await response.json()


  return  data
}




export default async function MorePage() {


  const { news, trendingNews  }=await getNews()






  return (
    <div className="container-fluid">

      <div className="row  ">
        <div className="col-lg-8 ">
          <div className="container-fluid mt-2 ">

            <hr style={{ border: '1px solid black', margin: 1 }} />
            <hr style={{ border: '1px solid black', margin: 0 }} />

            <h5 style={{ margin: 5 }}  > More News 
    
            
             </h5>
          </div>






       <div className="row  d-flex">
            {news.slice(0,20).map((news, index) => (


              <div
                key={index}
                className="col-md-4 ">
                <img
                 src={news.image}
                 alt={news.title}

                  className="img-fluid" />


                <h6>

                  <a
                 href={`/news/${news.slug}`} 

                    style={{ color: 'black',fontWeight:"bold",fontSize:"20px" }}>
           {news.title.substring(0,100)}
                  </a>


                </h6>


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
             key={newsItem._id}
                >
                  <h6 className="card-title subcategory-item ">
                    <a



                href={`/news/${newsItem.slug}`} 

                     
                      style={{  color:"black" , cursor: 'pointer',  }}
               

                      
                      
                      >
               {newsItem.title}
                    </a>
                  </h6>
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
