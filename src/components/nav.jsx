import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Nav({setSearch,setCategory}) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const storedIds = Object.keys(localStorage); 
    setCartCount(storedIds.length); 
  }, []); 

  return (
    <>
      <nav className="topnav">
        <div className="logo1"></div>
        <div className="services">
          <a href="#" className="link1">find a store</a>
          <div className="verticalline"></div>
          <a href="#" className="link1">help</a>
          <div className="verticalline"></div>
          <a href="#" className="link1">join us</a>
          <div className="verticalline"></div>
          <a href="#" className="link2">sign in</a>
        </div>
      </nav>

      <nav className="nav">
        <div className="logo2"></div>
        <div className="ser">
          <ul className="category" role="menu">
            <li><a href="#" className="a1">Groceries</a></li>
            <li><a href="#" className="a1">Appliances</a></li>
            <li><a href="#" className="a1">Mobile</a></li>
            <li><a href="#" className="a1">Discount</a></li>
            <li><a href="#" className="a1">Sales</a></li>
            <li><a href="#" className="a1">Fashion</a></li>
            <li><a href="#" className="a1">SNKRS</a></li>
          </ul>
        </div>
        <div className="lastlogo">
          <div className="category">
            <select name="" className="categorys" onChange={(e) => setCategory(e.target.value)} id="">
              <option value="CATEGORIES" disabled selected hidden >CATEGORIES</option>
              <option value="All">All</option>
              <option value="beauty">beauty</option>
              <option value="fragrances">fragrances</option>
              <option value="furniture">furniture</option>
              <option value="groceries">groceries</option>
              <option value="home-decoration">home-decoration</option>
              <option value="womens-dresses">womens-dresses</option>
              <option value="skin-care">skin-care</option>
              <option value="sunglasses">sunglasses</option>
              <option value="womens-jewellery">womens-jewellery</option>
            </select>
          </div>
          <div className="inp">
            <input type="text" onChange={(e)=>{setSearch(e.target.value)}} className="inputsearch" placeholder="search" />
          </div>
          <div className="heart"></div>
          <Link to={`/cart`}>
            <div className="carry">
              <span id="span">{cartCount}</span> 
            </div>
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Nav;
