import Sidebar from "../sidebar/Sidebar"
import Nav from "../Navigation/Nav"
import Recommended from "../products/Recommended"
import Products from "../products/Products"
export default function All() {
    return (
        <>
            <Sidebar />
            <Nav />
            <Recommended />
            <Products />

        </>
    )
}
