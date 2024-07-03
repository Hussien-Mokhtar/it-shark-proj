import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import Products from "../products/Products";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Priceall() {
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <Products />


        </>
    )
}
