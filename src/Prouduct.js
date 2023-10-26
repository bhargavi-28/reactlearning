// costom componenet 
import { useState } from "react";
import { Buttonfun } from "./Buttonfun";
import { useNavigate } from "react-router-dom";
import { ratingClasses } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import * as React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import IconButton from '@mui/material/IconButton';

export function Prouduct({ product, id }) {
  // const product = {
  //   name: "iphone14",
  //   price: "1,40,500",
  //   poster: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
  //   category: "electonics",
  //   rating: "⭐⭐⭐⭐",
  //   dicrip: "product discription bla..blaaaaa"
  // };
  const navi = useNavigate();
  const [show, setshow] = useState(true);
  const ratstyle = {
    color: product.rating > 8 ? "green" : "red"
  }
  const disstyle = {
    display: show ? "block" : "none"
  }
  return (
    <div className="product-container">
      <img className="pro-poster" src={product.poster} />

      <div className="pro-spec">
        <h2 className="pro-name"> {product.name} ({id})</h2>
        <h5 style={ratstyle} className="pro-rating"> ⭐{product.rating}</h5>
      </div>

      {/* toggle discription */}
      <IconButton onClick={() => setshow(!show)}
        aria-label="toggle" color="primary"
        >
        {show ? <ExpandLessIcon /> : <ExpandMoreIcon/>}
      </IconButton>

      {/* <button onClick={() => (navi("/products/" + id))}>info</button> */}
      <IconButton onClick={() => (navi("/products/" + id))} 
      aria-label="info" color="primary">
        <InfoIcon />
      </IconButton>
      <div>
        {/* navi to the route path name not the component name */}
        {/* +id we are using to navigate to one product page in the list of products 
      i.e, product 1 ; product 2; product 3
      index     (0)      (1)        (2)
      here index is passed as id thus + id */}
      </div>
      <p style={disstyle} className="pro-dicrip">{product.dicrip}</p>
      <p className="pro-price">{product.price}</p>
      <p className="pro-electonics">{product.electonics}</p>

      <p className="pro-category">{product.category}</p>
      <div className="button"><Buttonfun /></div>
    </div>
  );
}
