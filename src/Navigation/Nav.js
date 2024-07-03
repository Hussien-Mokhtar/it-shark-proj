import "../Main.css" 
import {FiHeart} from "react-icons/fi"
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";

 function Nav() {
  return (
    <>
    <form action="" >
    <nav>
    <div className="container">
<div className="up-left">
<input type="text" placeholder="Enter your search shose" required/> <button>search</button>

</div>
<div className="up-right">
    <a href="#"> <FiHeart className="nav-icons"/> </a>
    <a href="#"> <MdOutlineShoppingCart className="nav-icons"/> </a>
    <a href="#"> <FaRegUser className="nav-icons"/> </a>

</div>
    </div>

    </nav>

    </form>
    </>
  )
}
export default Nav;