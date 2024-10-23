import React, { useEffect, useState } from 'react';

const Orders = () => {
 
  return (
    <div style={{ padding: '10px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
      <h2 style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom: '20px' }}>Your Orders</h2>
      {orders.length === 0 ? (
        <p style={{ textAlign: 'center', fontSize: '18px', color: '#999' }}>No orders found.</p>
      ) : (
        // Add responsive container with horizontal scrollbar
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', minWidth: '800px' }}>
            <thead>
              <tr style={{ backgroundColor: 'black', color: '#fff' }}>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Order ID</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Status</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Payment Method</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Payment Status</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Transaction ID</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Total Price</th>
                <th style={{ padding: '10px', textAlign: 'left', fontSize: '16px', whiteSpace: 'nowrap' }}>Order Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map(order => (
                <tr key={order._id} style={{ borderBottom: '1px solid #ddd', transition: 'background-color 0.3s ease', cursor: 'pointer' }}>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{order._id}</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{order.orderStatus}</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{order.paymentMethod}</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{order.paymentStatus}</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{order.transactionId.substring(0, 10)}...</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>${order.totalPrice}</td>
                  <td style={{ padding: '20px', fontSize: '14px', whiteSpace: 'nowrap' }}>{new Date(order.createdAt).toLocaleDateString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
