import Nav from "../Navigation/Nav";
import Products from "../products/Products";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Colorall() {
  return (
    <>
                  <Sidebar />
            <Nav />
            <Recommended />
            <Products/>

    </>
  )
}
