
import React from 'react'


import Category from "@/components/international/section/Category"



async function getNews(slug) {

  const response = await fetch(`${process.env.API}/categorynews/${slug}`, {


    method: 'GET',

    next: { revalidate: 1 }

  })



  if (!response.ok) {
    throw new Error("Feailed to fetch product")
  }


  const data = await response.json()

  return data
}


export default async function News({ params }) {


  const { news, technews, worldNews, educationNews, banner } = await getNews(params?.slug)





  return (
    <>

      <h6 style={{
        
        margin: '20px',
         marginLeft: '20px',
         
          color: '#333', fontWeight: 'bold', fontSize: '23px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {news[0]?.categoryId?.name}



      </h6>
      {

        news && (

          <Category

news={news}

banner={banner}
technews={technews}

worldNews={worldNews}

educationNews={educationNews}


          />



        )


      }

    </>
  );
};

