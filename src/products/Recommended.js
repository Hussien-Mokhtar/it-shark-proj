import { Link } from "react-router-dom";
 function Recommended() {
  return (
    <div className="rec-container">
          <div className="rec"> 
      <h1>Recommended</h1>

  <div className="rec-d">
   <button className="btn"> <Link to="/"><h1>All Products</h1> </Link></button>
    <button className="btn"><Link to="/Nike"><h1>Nike</h1> </Link></button>
    <button className="btn"><Link to="/adidas"><h1>Adidas</h1> </Link></button>
    <button className="btn"><Link to="/puma"><h1>Puma</h1> </Link></button>  
    <button className="btn"><Link to="/verse"><h1>Verse</h1> </Link></button> 
 
  </div>
    </div>

    </div>
  )
}
export default Recommended;