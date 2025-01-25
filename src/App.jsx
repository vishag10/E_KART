import React, { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Page from "./components/page2";
import Cart from "./components/cart";
function App(){
   const [search,setSearch]=useState("")
   const [category, setCategory] = useState("All");
      return(
        <>
          <BrowserRouter>
            <Nav setSearch={setSearch} setCategory={setCategory}/>
             <Routes>
             <Route path="/" element={<Home search={search} category={category}/>} />
             <Route path="/page2/:id" Component={Page} />
             <Route path="/cart" Component={Cart} />
             </Routes>
          </BrowserRouter>
        </>
      )
    }

export default App;
