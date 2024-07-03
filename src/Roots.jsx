import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Nike from "./LINK-TO/Nike";
import Adidas from "./LINK-TO/Adidas";
import Puma from "./LINK-TO/Puma";
import Verse from "./LINK-TO/Verse";
import All from "./LINK-TO/All";
import Sneakers from "./LINK-TO/Sneakers";
import Flats from "./LINK-TO/Flats";
import Sandals from "./LINK-TO/Sandals";
import Heels from "./LINK-TO/Heels";
import Priceall from "./PRICE-LINK-TO/Price-all";
import Price50 from "./PRICE-LINK-TO/Price-50";
import Price150 from "./PRICE-LINK-TO/Price-150";
import Priceabove from "./PRICE-LINK-TO/Price-above";
import Price100 from "./PRICE-LINK-TO/Price-100";
import Colorall from "./COLOR-LINK-TO/Color-all";
import Black from "./COLOR-LINK-TO/Black";
import Blue from "./COLOR-LINK-TO/Blue";
import Red from "./COLOR-LINK-TO/Red";
import Green from "./COLOR-LINK-TO/Green";
import White from "./COLOR-LINK-TO/White";


const roots =createBrowserRouter([

    {
        path:"/",
        element:<App/>
    },
    {
        path:"/nike",
        element:<Nike/>

    },
    {
        path:"/adidas",
        element:<Adidas/>
    },
    {
        path:"/puma",
        element:<Puma/>
    },
        {
        path:"/verse",
        element:<Verse/>
    },
    {
        path:"/all",
        element:<All/>
    },
    {
        path:"/sneakers",
        element:<Sneakers/>
    },
    {
        path:"/flats",
        element:<Flats/>
    },
    {
        path:"/sandals",
        element:<Sandals/>
    },

    {
        path:"/heels",
        element:<Heels/>
    },
    {
        path:"/price-all",
        element:<Priceall/>
    },
    {
        path:"/price-50",
        element:<Price50/>
    },
    {
        path:"/price-100",
        element:<Price100/>
    },
    {
        path:"/price-150",
        element:<Price150/>
    },
    {
        path:"/price-above",
        element:<Priceabove/>
    },
    {
        path:"/color-all",
        element:<Colorall/>
    },
    {
        path:"/black",
        element:<Black/>
    },
    {
        path:"/blue",
        element:<Blue/>
    },
    {
        path:"/red",
        element:<Red/>
    },
    {
        path:"/green",
        element:<Green/>
    },
    {
        path:"/white",
        element:<White/>
    },














])
export default roots;