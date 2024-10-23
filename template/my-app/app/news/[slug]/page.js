




import { format } from 'date-fns';



async function generateMetadata() {
  const blog = await getNews(params?.slug);







  return {
    title: blog?.title,
    description: blog?.description?.substring(0, 160),
    openGraph: {
      images: blog?.images[0]?.secure_url,
    },
  };
}


















export default async function News({ params }) {



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


      <div className="container my-1 center">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h1 className="title  text-start" style={titleStyle}   >
          title
            </h1>
            <p className="text-start" style={descriptionStyle} >
           subtitle
            </p>

          

            <img 
            src={image}
            
             className="img-fluid" alt="News Image" />
            <p className="mt-3  text-start"


            >
          imagecaption
            
            
            </p>
            <div className="d-flex  mt-4 text-start">

              <img
              // src={news.user_id.image}

                className="rounded-circle mx-2 "

                style={editorImageStyle}
                width={50} height={50} alt="Editor 1" />

            </div>
            <div className="text-start">

              <span >
              user_idname
              
              </span>

              <div>
                <p> 
                formattedDate
                
                </p>
              </div>

            </div>




            <p className="mt-4 text-start "
              style={descriptionStyle}

            >

             description

            </p>
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
              className="img-fluid" alt="Inline Image" />

            <h5
              style={{
                textAlign: 'center', // Center the text horizontally
                margin: '20px 0',    // Add some vertical spacing
                color: 'blue'        // Optional: Change the text color
              }}
            >
              banner.title
            </h5>
          </div>
        </div>
      </div>


      <hr />



      <div className="container  center">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <h5 className="title  text-start"  >
              Read more
            </h5>
            </div>
            </div>
            </div>














      <div className="container my-1">
        <ul className="list-group ">

          {relatedNews.map((item, index) => (
            <li key={index} className="list-group-item   border-0 ">
              <div className="row   justify-content-center">
                <div className="col-md-6" style={{ cursor: 'pointer' }}    >
                  <span className="bg-primary px-2 rounded-circle mr-2">&#8226;</span>
                  <span className=" text-black "




                    style={{
                      fontSize: '1.2rem',

                      fontWeight: 'bold',
                      cursor: 'pointer', textDecoration: 'underline',

                    }}>



                    <a 
                  //  href={`/news/${item.slug}`}
                    >
                     item.title
                    </a>

                  </span>
                  <span>
                  item.description.substring(0, 200)
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>



      <hr />

  




    </>
  );
};

