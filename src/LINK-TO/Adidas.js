import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Adidas() {
  return (
    <>
      <Sidebar/>
      <Nav/>
      <Recommended/>
 
      <section className="card-container">

      <section className="card" >

<img src="https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg" alt="Shoes" />

<div className="title">
<h1>knit Ballet flat</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$300</del>100    <span className="bag"> <IoBag/> </span>


</div>
</section>


<section className="card" >

<img src="https://m.media-amazon.com/images/I/616sA5XUKtL._AC_UY675_.jpg" alt="Shoes" />

<div className="title">
<h1>Chunky High Heel</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>50    <span className="bag"> <IoBag/> </span>


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
<section className="card" >

<img src="https://m.media-amazon.com/images/I/61uw5RDxKQL._AC_UY625_.jpg" alt="Shoes" />

<div className="title">
<h1>Bridal Sandals Glitter</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>70    <span className="bag"> <IoBag/> </span>


</div>
</section>
<section className="card" >

<img src="https://m.media-amazon.com/images/I/71yhoZP0l6L._AC_UY695_.jpg" alt="Shoes" />

<div className="title">
<h1>Wedding Prom Bridal</h1>

</div>

 <div className="stars">
 <AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/> <span className="review">(123 reviews)</span>
 </div>

<div className="price">
<del>$140,00</del>70    <span className="bag"> <IoBag/> </span>


</div>
</section>


</section>

    </>
  )
}
