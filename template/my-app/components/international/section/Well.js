import React from 'react';
//import WellHome from './WellHome';



export default async function HomePage({ news, title }) {
  return (
    <div className="container-fluid"  >

      <div className="container-fluid mt-2 ">

        <hr style={{ border: '1px solid black', margin: 1 }} />
        <hr style={{ border: '1px solid black', margin: 0 }} />

        <h5 style={{ margin: 5 }}  >title</h5>
      </div>




      {/* <WellHome
       newsItems={news} 

       /> */}
    </div>
  );
};

