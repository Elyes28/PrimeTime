import logo from './logo.svg';
import './App.css';
import Product from './Components/Product'
import NavBar from './Components/NavBar'

import React, { useEffect, useState } from "react";
import Products from './products.json';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const menu = (<div>
    <ul id="nav">
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">FAQ</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
    </div>
    );


  return (
    
    
    <div>
      <NavBar/>
    </div>
  );
}

export default App;
