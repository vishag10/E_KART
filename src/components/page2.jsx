import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
function Page() {
    const [data, setData] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(product => setData(product));
    }, []);
    const addToCart = (id) => {
        localStorage.setItem(id, 'inCart');
        alert('Added to cart');
    };

    const gotoCart = () => {
        alert('Going to Cart');
        
    };

    if (!data) {
        return (
            <div className="loading-container">
                <div className="spinner"></div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div className="session1">
                <div className="left">
                    <div className="sideimg">
                        <img src={data.thumbnail} alt="" />
                        <img src={data.thumbnail} alt="" />
                        <img src={data.thumbnail} alt="" />
                        <img src={data.thumbnail} alt="" />
                    </div>
                    <div className="img">
                        <img src={data.thumbnail} alt="" className="mainimg" />
                    </div>
                </div>
                <div className="right">
                    <h1 className="name">{data.title}</h1>
                    <div className="rating">
                        <span>{data.rating}★</span>
                    </div>
                    <h2 className="rate">${data.price}</h2>

                    <dl className="offer">
                        <dt>Available offers</dt>
                        <dd>➣ Bank Offer: Flat ₹1,200 off on HDFC Bank Credit Card EMI Txns on 6 and 9 months tenure</dd>
                        <dd>➣ Bank Offer: Flat ₹1,500 off on HDFC Bank Credit Card EMI Txns on 12 months tenure</dd>
                        <dd>➣ Bank Offer: 5% Unlimited Cashback on Flipkart Axis Bank Credit Card T&C</dd>
                        <dd>➣ Special Price: Get extra 80% off (price inclusive of cashback/coupon)</dd>
                    </dl>
                </div>
            </div>

            <div className="session2">
                <div className="bycart">
                    <div className="l">
                        {localStorage.getItem(data.id) ? (
                            <button className="add" onClick={gotoCart}>
                                GO TO CART
                            </button>
                        ) : (
                            <button className="add" onClick={() => addToCart(data.id)}>
                                ADD TO CART
                            </button>
                        )}
                    </div>
                    <div className="r">
                        <button className="by">BUY NOW</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;
