import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Sandals() {
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <section className="card-container">


            <section className="card" >

<img src="https://m.media-amazon.com/images/I/71gpFHJlnoL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Low-Top Trainers</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>100    <span className="bag"> <IoBag/> </span>


</div>
</section>

<section className="card" >

<img src="https://m.media-amazon.com/images/I/71pf7VFs9CL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Vans Unisex Low-Top</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>100    <span className="bag"> <IoBag/> </span>


</div>
</section>


<section className="card" >

<img src="https://m.media-amazon.com/images/I/61N4GyWcHPL._AC_UY575_.jpg" alt="Shoes" />

<div className="title">
<h1>VClassic Bandana Sneakers</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>50    <span className="bag"> <IoBag/> </span>


</div>
</section>






            </section>
        </>
    )
}
