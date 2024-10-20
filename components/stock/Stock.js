// pages/index.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
    const [loading, setLoading] = useState(true);
    const [stockPrices, setStockPrices] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://latest-stock-price.p.rapidapi.com/any', {
                    headers: {
                        'X-RapidAPI-Key': '12e368a912msh94aea8333c0d665p132dedjsnc93312d059a0',
                        'X-RapidAPI-Host': 'latest-stock-price.p.rapidapi.com',
                    },
                });
                setStockPrices(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();

        // Clean up function if needed
        return () => {
            // Any cleanup code if necessary
        };
    }, []);



    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % stockPrices.length);
        }, 1000);

        return () => clearInterval(interval);
    }, [stockPrices.length]);

    return (

        <>

            {/* <h1  style={{color:"green"}}   >{currentIndex % stockPrices.length}</h1><br/>

            <h1  >{stockPrices.length}</h1>
            <h1 style={{ color: "red" }} >{currentIndex}</h1> */}

            <div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {stockPrices.map((stock, index) => (
                            <li key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                                {stock.identifier.slice(0, -3).charAt(0).toUpperCase() + stock.identifier.slice(0, -3).slice(1).toLowerCase()}
                                <span style={{ color: stock.pChange > 0 ? 'green' : 'red' }}>
                                    {stock.pChange > 0 ? '+' : ''} {stock.pChange} %
                                </span>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

