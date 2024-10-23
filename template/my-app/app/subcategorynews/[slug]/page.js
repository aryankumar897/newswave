
import React from 'react';
import Category from "@/components/international/subsection/Category"




export default async function News({ }) {





  return (
    <>

      <h6 style={{ marginLeft: '20px', color: '#333', fontWeight: 'bold', fontSize: '16px', fontFamily: 'Arial, sans-serif', textTransform: 'uppercase', letterSpacing: '1px' }}>
        {params.slug}
      </h6>

      {news && (<Category
        news={news}
        banner={banner}
        environmentnews={environmentnews}
        schoolNews={schoolNews}
        diplomacyNews={diplomacyNews}
      />)}

    </>
  );
};

