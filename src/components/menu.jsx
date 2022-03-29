import React, {useState, useEffect} from "react"
import { getMenuItems } from "../services/api";
import MenuItems from "./menuItems";

const Menu = () => {

  //state variables here
  const [menuItems, setMenuItems] = useState([]);

  //runs on first load
  useEffect(() => {
      setMenuItems(getMenuItems());
  }, []);

  return MenuItems.map((MenuItems, i) => <MenuItems key={i} number={i+1} data={menuItems}/>);
};
export default Menu;

