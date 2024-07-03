import { Link } from "react-router-dom";
 function Colors() {
  return (
    <div className="color">
      <h2 className="sidebar-titlecolor-title">Color</h2>

      <label className="sidebar-lable-container color-title">

      <input type="radio" name="test"/> 
      <span className="chek-mark"> </span> <Link to="/color-all"> <h1>All</h1></Link>
    </label>

    <label className="sidebar-lable-container">
       <input type="radio" name="test"/>
      <h2><span className="chek-mark"></span></h2> <Link to="/black"> <h1>Black</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test" />
      <h1><span className="chek-mark"></span></h1><Link to="/blue"> <h1>Blue</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <h3><span className="chek-mark"></span></h3><Link to="/red"> <h1>Red</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <h4><span className="chek-mark"></span></h4><Link to="/green"> <h1>Green</h1></Link>
    </label>

    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <h5><span className="chek-mark"></span></h5><Link to="/white"> <h1>White</h1></Link>
    </label>



    </div>
  )
}
export default Colors;