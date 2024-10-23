"use client"

import React, { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

const SubscriptionDetails = () => {

  return (
    <div style={{ padding: '20px', backgroundColor: '  #800000', borderRadius: '8px', maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ backgroundColor: ' #ffcccc', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ padding: '50px' }}>

          {subscription && (
            <>
              <p style={{ marginBottom: '10px', fontSize: '16px', color: '#555' }}>
                <strong>Plan:</strong> {subscription.plan || 'Premium'}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '16px', color: '#555' }}>
                <strong>Start Date:</strong> {new Date(subscription.startDate).toLocaleDateString() || ""}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '16px', color: '#555' }}>
                <strong>End Date:</strong> {new Date(subscription.endDate).toLocaleDateString() || ""}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '16px', color: '#555' }}>
                <strong>Price:</strong> {subscription.price || '$0/year'}
              </p>
            </>
          )}
          {remainingDays !== null && (
            <p style={{ marginTop: '20px', fontSize: '16px', color: '#d32f2f' }}>
              <strong>Subscription expires in {remainingDays} days</strong>
            </p>
          )}


<h1>buy plan</h1>

        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;






//    const response = await fetch(`${process.env.API}/user/subscriptiondetails/${data?.user?._id}`);

