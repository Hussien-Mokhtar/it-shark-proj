import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function White() {
  return (
    <>
                        <Sidebar />
            <Nav />
            <Recommended />
            <section className="card-container">
            <section className="card" >

<img src="https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Nike Air Monarch IV</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$300</del>100    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg" alt="Shoes" />

<div className="title">
<h1>Loafer Flats</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>50    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/61TM6Q9dvxL._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Roma Basic Sneaker</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>150    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg" alt="Shoes" />

<div className="title">
<h1>Rainbow Chex Skate</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>100    <span className="bag"> <IoBag/> </span>


</div>
</section>


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

<img src="https://m.media-amazon.com/images/I/71h5+MbEK7L._AC_UY625_.jpg" alt="Shoes" />

<div className="title">
<h1>Amore Fashion Stilettos</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>150    <span className="bag"> <IoBag/> </span>


</div>
</section>

                </section>


    </>
  )
}
