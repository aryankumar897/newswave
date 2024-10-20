
"use client"


import React, { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

export default function DashboardPage() {



    const [categoryCount, setCategoryCount] = useState(0);
    const [subcategoryCount, setSubcategoryCount] = useState(0);
    const [userCount, setUserCount] = useState(0);
    const [newspostCount, setNewspostCount] = useState(0);
    const [orderCount, setOrderCount] = useState(0);
    const [subscriptionCount, setSubscriptionCount] = useState(0);
    const [bannerCount, setBannerCount] = useState(0);
    const [imagelibCount, setImagelibCount] = useState(0);
    const [videolibCount, setVideolibCount] = useState(0);
    const [liveCount, setLiveCount] = useState(0);
    const [userRoleCount, setUserRoleCount] = useState(0);
    const [adminRoleCount, setAdminRoleCount] = useState(0);
    const [editorRoleCount, setEditorRoleCount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);
    const [orders, setOrder] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.API}/admin/home`); // Adjust the API endpoint
                const data = await response.json();
                console.log(data)
                setCategoryCount(data.categoryCount);
                setSubcategoryCount(data.subcategoryCount);
                setUserCount(data.userCount
                );
                setNewspostCount(data.newspostCount);
                setOrderCount(data.orderCount);
                setSubscriptionCount(data.subscriptionCount);
                setBannerCount(data.bannerCount);
                setImagelibCount(data.imagelibCount);
                setVideolibCount(data.videolibCount);
                setLiveCount(data.liveCount);
                setUserRoleCount(data.userRoleCount);
                setAdminRoleCount(data.adminRoleCount);
                setEditorRoleCount(data.editorRoleCount);
                setTotalAmount(data.totalPriceSum)
                setOrder(data.allorder)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);






    return (

        <>



            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     > ${totalAmount}</h5>
                                <p className="card-text"> Total  Earning </p>

                            </div>
                        </div>
                    </div>








                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{categoryCount}</h5>
                                <p className="card-text"> Total Category</p>

                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <FavoriteIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{subcategoryCount}</h5>
                                <p className="card-text"> Total Subcategory</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     > {userCount}</h5>
                                <p className="card-text"> Total  User </p>

                            </div>
                        </div>
                    </div>








                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{newspostCount}</h5>
                                <p className="card-text"> Total  Newspost</p>

                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <FavoriteIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{orderCount}</h5>
                                <p className="card-text"> Total Order</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     > {subscriptionCount}</h5>
                                <p className="card-text"> Total  subscription </p>

                            </div>
                        </div>
                    </div>








                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{bannerCount}</h5>
                                <p className="card-text"> Total  Banner</p>

                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <FavoriteIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{imagelibCount}</h5>
                                <p className="card-text"> Total Image</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     > {videolibCount}</h5>
                                <p className="card-text"> Total  videos</p>

                            </div>
                        </div>
                    </div>








                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{liveCount}</h5>
                                <p className="card-text"> Total live</p>

                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <FavoriteIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{userRoleCount}</h5>
                                <p className="card-text"> Total   user</p>


                            </div>
                        </div>
                    </div>
                </div>
            </div>






            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}

                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     > {adminRoleCount}</h5>
                                <p className="card-text"> Total  Admin</p>

                            </div>
                        </div>
                    </div>








                    {/* Card 2 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <ShareIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title"     >{editorRoleCount}</h5>
                                <p className="card-text"> Total Editor</p>

                            </div>
                        </div>
                    </div>

               
                </div>
            </div>









            <div style={{ padding: '10px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Arial, sans-serif' }}>
                <h2 style={{ textAlign: 'center', color: '#333', fontSize: '24px', marginBottom: '20px' }}>All Orders</h2>
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




        </>


    );
}
