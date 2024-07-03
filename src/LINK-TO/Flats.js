import Nav from "../Navigation/Nav";
import Recommended from "../products/Recommended";
import Sidebar from "../sidebar/Sidebar";
import { AiFillStar } from "react-icons/ai";
import { IoBag } from "react-icons/io5";

export default function Flats() {
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />

            <section className="card-container">


                <section className="card" >

                    <img src="https://m.media-amazon.com/images/I/41M54ztS6IL._AC_SY625._SX._UX._SY._UY_.jpg" alt="Shoes" />

                    <div className="title">
                        <h1>Flat Slip On Pumps</h1>

                    </div>

                    <div className="stars">
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <span className="review">(123 reviews)</span>
                    </div>

                    <div className="price">
                        <del>$300</del>100    <span className="bag"> <IoBag /> </span>


                    </div>
                </section>
                <section className="card" >

                    <img src="https://m.media-amazon.com/images/I/71zKuNICJAL._AC_UX625_.jpg" alt="Shoes" />

                    <div className="title">
                        <h1>knit Ballet flat</h1>

                    </div>

                    <div className="stars">
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <span className="review">(123 reviews)</span>
                    </div>

                    <div className="price">
                        <del>$300</del>100    <span className="bag"> <IoBag /> </span>


                    </div>
                </section>
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

                    <img src="https://m.media-amazon.com/images/I/719gdz8lsTS._AC_UX575_.jpg" alt="Shoes" />

                    <div className="title">
                        <h1>Rainbow Chex Skate</h1>

                    </div>

                    <div className="stars">
                        <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /> <span className="review">(123 reviews)</span>
                    </div>

                    <div className="price">
                        <del>$140,00</del>100    <span className="bag"> <IoBag /> </span>


                    </div>
                </section>









            </section>

        </>
    )
}
