import React, { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import Home from "./components/home";
import Page from "./components/page2";
import Cart from "./components/cart";
function App(){
   const [search,setSearch]=useState("")
      return(
        <>
          <BrowserRouter>
            <Nav setSearch={setSearch} />
             <Routes>
             <Route path="/" element={<Home search={search}/>} />
             <Route path="/page2/:id" Component={Page} />
             <Route path="/cart" Component={Cart} />
             </Routes>
          </BrowserRouter>
        </>
      )
    }

export default App;