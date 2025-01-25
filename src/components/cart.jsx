import React, { useState, useEffect } from 'react';
import "./cart.css";

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    
   
    useEffect(() => {
        const storedIds = Object.keys(localStorage); 
        const fetchItems = async () => {
            const itemsData = [];
            for (const id of storedIds) {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                const productData = await response.json();
                itemsData.push(productData);
            }
            setCartItems(itemsData);
        };

        fetchItems();
    }, []);

    const removeItem = (id) => {
        localStorage.removeItem(id);
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="session111">
            <div className="container11">
                
                <div className="items" id="items">
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty!</p>
                    ) : (
                        cartItems.map(item => (
                            <div className="carted-items" key={item.id}>
                                <div className="imgdiv">
                                    <img src={item.thumbnail} alt={item.title} />
                                </div>
                                <div className="item-details">
                                    <h2>{item.title}</h2>
                                    <h4>${item.price}</h4>
                                    <button onClick={() => removeItem(item.id)}>REMOVE</button>
                                </div>
                            </div>
                        ))
                    )}
                </div>

               
                <div className="bill" id="bill">
                    <table border="1" className='tb'>
                        <thead>
                            <tr>
                                <th colSpan="2">PRODUCT DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>PRICE</td>
                                <td>
                                    ${cartItems.reduce((total, item) => total + item.price, 0)}
                                </td>
                            </tr>
                            <tr>
                                <td>DISCOUNT</td>
                                <td className="drate">
                                    {/* Assume a flat discount rate for now */}
                                    ${cartItems.reduce((total, item) => total + (item.price * 0.1), 0)}
                                </td>
                            </tr>
                            <tr>
                                <td>DELIVERY CHARGE</td>
                                <td>$10</td> {/* Example delivery charge */}
                            </tr>
                            <tr>
                                <td>TOTAL AMOUNT</td>
                                <td>
                                    ${cartItems.reduce((total, item) => total + item.price, 0) - 
                                    cartItems.reduce((total, item) => total + (item.price * 0.1), 0) + 10}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Cart;
