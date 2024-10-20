




import { format } from 'date-fns';

import SingleMore  from  "@/components/singlemore/Single"
import Share from  "./Share"



async function getNews(slug) {
  const response = await fetch(`${process.env.API}/singlenews/${slug}`, {



    method: "GET",
    next: {
      revalidate: 1
    },
  })


  console.log(response)
  if (!response.ok) {

    throw new Error("FAILED TO FETCH pRODUCT")
  }
  const data = await response.json();

  console.log("data", data)

  return data



}











export default async function News({ params }) {

  const { slug } = params

  const { news, relateNews, banner } = await getNews(params?.slug)
  const currentDate = news.user_id.createdAt
  const formattedDate = format(currentDate, 'MMMM d, yyyy')



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
              {news.title}
            </h1>
            <p className="text-start" style={descriptionStyle} >
              {news.subtitle}
            </p>
            <Share news={news}  />


            <img
              src={news.image}

              className="img-fluid" alt="News Image" />
            <p className="mt-3  text-start"


            >
              {news.imagecaption}


            </p>
            <div className="d-flex  mt-4 text-start">

              <img
                src={news.user_id.image}

                className="rounded-circle mx-2 "

                style={editorImageStyle}
                width={50} height={50} alt="Editor 1" />

            </div>
            <div className="text-start">

              <span >
                {news.user_id.name}

              </span>

              <div>
                <p>
                  {formattedDate}

                </p>
              </div>

            </div>




            <p className="mt-4 text-start "
              style={descriptionStyle}

            >

              {news.description.substring(0,500)}

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


            {
              banner.slice(2, 3).map((b) => (
                <>

                  <img
                    src={b.imageUrl}
                    className="img-fluid" alt="Inline Image" />

                  <h5
                    style={{
                      textAlign: 'center', // Center the text horizontally
                      margin: '20px 0',    // Add some vertical spacing
                      color: 'blue'        // Optional: Change the text color
                    }}
                  >
                    {b.title}
                  </h5>


                </>



              ))


            }




            <p className="mt-4 text-start "
              style={descriptionStyle}

            >

              {news.description.substring(500)}

            </p>
         

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

          {relateNews.map((item, index) => (
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
                   href={`/news/${item.slug}`}
                    >
                    {item.title}
                    </a>

                  </span>
                  <span>
                  {  item.description.substring(0, 200)}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>



      <hr />


      <SingleMore/>



    </>
  );
};

