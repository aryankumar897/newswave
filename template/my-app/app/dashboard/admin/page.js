
"use client"


import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
export default function DashboardPage() {


    return (

        <>
            


            <div className="container mt-4">
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4">
                        <div className="card custom-card text-center">
                            <div className="card-icon">
                                <IconButton>
                                    <FavoriteIcon className="custom-icon" />
                                </IconButton>
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Card Title 1</h5>
                                <p className="card-text">This is some text for the first card.</p>
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
                                <h5 className="card-title">Card Title 2</h5>
                                <p className="card-text">This is some text for the second card.</p>
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
                                <h5 className="card-title">Card Title 3</h5>
                                <p className="card-text">This is some text for the third card.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>




        </>
    );
}

