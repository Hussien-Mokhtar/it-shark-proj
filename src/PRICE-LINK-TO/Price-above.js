import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Priceabove() {
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <section className="card-container">

            <section className="card" >

<img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Nike Air Vapormax Plus</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$300</del>200    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/71VaQ+V6XnL._AC_UY695_.jpg" alt="Shoes" />

<div className="title">
<h1>Nike Zoom Freak</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>200    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="hhttps://m.media-amazon.com/images/I/61-cBsLhJHL._AC_UY695_.jpg" alt="Shoes" />

<div className="title">
<h1>Nike Men's Sneaker</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>200    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/519MRhRKGFL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Nike Air Vapormax Plus</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>200    <span className="bag"> <IoBag/> </span>


</div>
</section>

                </section>

        </>
    )
}
