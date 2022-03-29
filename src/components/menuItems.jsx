import React, {useState, useEffect} from "react"
import { colors } from "../config";

const MenuItems = ({menuData}) => {
  
  let {title, description, price} = menuData;


  return (
    <div>
      <div id='Title'>
        <p>Title</p>
        <p>{title}</p>
      </div>
      <div id='Description'>
        <p>Description</p>
        <p>{description}</p>
      </div>
      <div id='Price'>
        <p>Price</p>
        <p>{price}</p>
      </div>
    </div>
  )
};

export default MenuItems;
