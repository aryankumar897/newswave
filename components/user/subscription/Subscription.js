"use client"



// components/SubscriptionDetails.js

import React, { useEffect, useState } from 'react';

import { useSession } from 'next-auth/react';

const SubscriptionDetails = () => {
  const { data } = useSession();
  const [subscription, setSubscription] = useState(null);
  const [remainingDays, setRemainingDays] = useState(null);

  useEffect(() => {
    if (!data?.user?._id) return;
    fetchSubscription();
  }, [data?.user?._id]);

  const fetchSubscription = async () => {
    try {

      const response = await fetch(`${process.env.API}/user/subscriptiondetails/${data?.user?._id}`);

      const dataa = await response.json();

      if (response.ok) {
        const endDate = new Date(dataa.endDate);
        const today = new Date();
        const diffTime = Math.abs(endDate - today);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        setSubscription(dataa);
        setRemainingDays(diffDays);
      } else {
        console.error('Error fetching subscription:', dataa.err);
      }
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  return (
    <div style={{ padding: '20px', backgroundColor: ' black', borderRadius: '8px', maxWidth: '500px', margin: '0 auto', marginTop: "30px", marginLeft: "50px", marginBottom: "50px",}}>
      <div style={{ backgroundColor: ' black', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ padding: '50px' }}>

          {subscription && (
            <>
              <p style={{ marginBottom: '10px', fontSize: '20px', color: 'white' }}>
                <strong>Plan:</strong> {subscription.plan || 'Premium'}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '20px', color: 'white' }}>
                <strong>Start Date:</strong> {new Date(subscription.startDate).toLocaleDateString() || ""}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '20px', color: 'white' }}>
                <strong>End Date:</strong> {new Date(subscription.endDate).toLocaleDateString() || ""}
              </p>
              <p style={{ marginBottom: '10px', fontSize: '20px', color: 'white' }}>
                <strong>Price:</strong> {subscription.price || ''}$/year
              </p>
            </>
          )}
          {remainingDays !== null && (
            <p style={{ marginTop: '20px', fontSize: '26px', color: '#d32f2f' }}>
              <strong>Subscription expires in {remainingDays} days</strong>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SubscriptionDetails;






//    const response = await fetch(`${process.env.API}/user/subscriptiondetails/${data?.user?._id}`);
