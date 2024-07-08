import React from "react";
import { MobileMart, CartIcon, SearchIcon } from "../assets/svgs"
import { NavLink } from "react-router-dom";
import ProductSection from "./Productcard";
import Iphone from "../assets/images/iphoneads1.png"
import Footer from "./Footer";
function Products() {
    return (
        <div id="landing">
            <nav>
                <NavLink exact to="/">
                    <MobileMart id="MMmerch" />
                </NavLink>

                <aside>
                    <div id="searchbar">

                        <SearchIcon style={{ color: `rgba(10, 10, 11, 0.5)` }} />
                        <input type="text" data-testid="inputForSearch" placeholder="Search Product" />
                    </div>
                    <NavLink to={"./cart"}>
                        <CartIcon data-testid="cartButton" id="CartIcon" />
                        <div id="cartItemNo">3</div>
                    </NavLink>
                </aside>
            </nav>
            <div id="Hero">
                <div id="aside">
                    <h4>Iphone 13</h4>
                    <h1>
                        Incredible Camera & Storage
                    </h1>

                    <button id="buynowBtn"> Buy Now</button>


                </div>
                <img src={Iphone} alt="iphone13" />
            </div>
            <ProductSection />
            <Footer />
        </div>
    )


}

export default Products;