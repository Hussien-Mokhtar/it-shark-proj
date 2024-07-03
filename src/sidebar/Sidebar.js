import { TiShoppingCart } from "react-icons/ti";
import Category from "./Category";
import Price from "./Price";
import Colors from "./Colors";
 function Sidebar() {

  return (
    <>
    <section className="sidebar">
<div className="logo-container"> 
   <h1> <TiShoppingCart/></h1>


</div>
<Category />


<Price />


<Colors />
    </section>
    
    </>
  )
}
export default Sidebar;