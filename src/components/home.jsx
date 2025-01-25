import React, { useState, useEffect } from "react";
 import { Link } from "react-router-dom";
import "../App.css";

function Home({search,category}) {
    const [data, setData] = useState([]);
    const [id, setId] = useState();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then((out) => {
                setData(out.products);
            });
    }, []);

    const filteredData = data.filter((item) => {
        const matchesSearch = item.title.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "All" || item.category === category;
        return matchesSearch && matchesCategory;
      });

    return (
        <div className="main">
            <div className="session1">
                <div className="container" id="container">
                    
                {filteredData.filter((dt) =>dt.title.toLowerCase().includes(search.toLowerCase())).map((item, ind) => (
                            <div className="card" key={ind}>
                                <div className="content">
                                    <div className="imgg">
                                        <Link to={`/page2/${item.id}`}>
                                            <img
                                                src={item.thumbnail}
                                                alt={item.title}
                                                className="img2"
                                            />
                                        </Link>
                                    </div>
                                    <div className="title">
                                        <h2 className="name">{item.title}</h2>
                                        <h4 className="price">${item.price}</h4>
                                        <h3 className="discount">
                                            Min. {item.discountPercentage}% Off
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>

            <div className="session17">
                <div className="s17grid">
                    <div className="items item1">
                        <h4>Resources</h4>
                        <ul>
                            <li>Find A Store</li>
                            <br />
                            <li>Become A Member</li>
                            <br />
                            <li>Send Us Feedback</li>
                        </ul>
                    </div>
                    <div className="items item2">
                        <h4>Help</h4>
                        <ul>
                            <li>Get Help</li>
                            <br />
                            <li>Order Status</li>
                            <br />
                            <li>Delivery</li>
                            <br />
                            <li>Returns</li>
                            <br />
                            <li>Payment Options</li>
                            <br />
                            <li>Contact Us On Ekart.com Inquiries</li>
                            <br />
                            <li>Contact Us On All Other Inquiries</li>
                        </ul>
                    </div>
                    <div className="items item3">
                        <h4>Company</h4>
                        <ul>
                            <li>About Ekart</li>
                            <br />
                            <li>News</li>
                            <br />
                            <li>Careers</li>
                            <br />
                            <li>Investors</li>
                            <br />
                            <li>Sustainability</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Home;
