import { Link } from "react-router-dom";
 function Price() {

  return (
    <div className="ml">
       <h2 className="sidebar-titleprice-title">Price</h2>
       
       <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span> <Link to="/price-all"> <h1>All</h1></Link>
    </label>

    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span> <Link to="/price-50"><h1>$0 - $50</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test" />
      <span className="chek-mark"></span> <Link to="/price-100"> <h1>$50 - $100</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span><Link to="/price-150">  <h1>$100 - $150</h1></Link>
    </label>
    <label className="sidebar-lable-container">
      <input type="radio" name="test"/>
      <span className="chek-mark"></span> <Link to="/price-above"> <h1>Over $150</h1></Link>
    </label>

    </div>
  )
}
export default Price;