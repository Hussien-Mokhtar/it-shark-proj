import { Link } from "react-router-dom";
 function Input() {
  return (
    <>
          <div className="cate">
        <h2 className="sidebar-title">Category</h2>

        <label className="sidebar-lable-container">
        <input type="radio" name="test" />
       <span className="chek-mark"> </span><Link to="/all"><h1>All</h1></Link>
    </label>

    <label className="sidebar-lable-container">
      <input type="radio" name="test" />
      <span className="chek-mark"></span> <Link to="/sneakers"><h1>Sneakers</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test" />
      <span className="chek-mark"></span><Link to="/flats"><h1>Flats</h1></Link> 
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span><Link to="/sandals"><h1>Sandals</h1></Link> 
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span><Link to="/heels"><h1>Heels</h1></Link> 
    </label>

    </div>

    </>
  )
} 
export default Input; 