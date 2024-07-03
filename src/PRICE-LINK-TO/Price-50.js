import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Price50() {
  return (
    <>
      <Sidebar />
      <Nav />
      <Recommended />

      <section className="card-container">

      <section className="card" >

        <img src="https://m.media-amazon.com/images/I/61V9APfz97L._AC_UY695_.jpg" alt="Shoes" />

        <div className="title">
          <h1>Loafer Flats</h1>

        </div>

        <div className="stars">
          <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <span className="review">(123 reviews)</span>
        </div>

        <div className="price">
          <del>$140,00</del>50    <span className="bag"> <IoBag /> </span>


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




 

 </section>

    </>
  )
}
