
import React from 'react';
import Category from "@/components/international/subsection/Category"

async function getNews(slug) {
  const response = await fetch(`${process.env.API}/subcategorynews/${slug}`, {

    method: 'GET',
    next: { revalidate: 1 }


  })

  console.log(response)




  if (!response.ok) {
    throw new Error("Failed to  fetch news")

  }


  const data = await response.json()

  return data

}






export default async function News({ params }) {
  const {

    news,
    beautynews,
    schoolnews,
    diplomacyNews,
    banner



  } = await getNews(params.slug);




  return (
    <>

      <h6 style={{ margin: '20px', color: '#333', fontWeight: 'bold', fontSize: '16px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {params.slug}

   
      </h6>



      {
        news && (
          <Category

            news={news}
            banner={banner}
            beautynews={beautynews}
            schoolnews={schoolnews}

            diplomacyNews={diplomacyNews}

          />




        )


      }



    </>
  );
};

