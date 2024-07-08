import Iphone from "../assets/images/iphoneads1.png"
import { useState, useEffect } from "react";


const phones = [
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },

    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "iphone",
        image: Iphone,
        name: "Iphone 12 pro",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
    {
        make: "samsung",
        image: Iphone,
        name: "Samsusng A51",
        price: 1000000,
        details: `6.7" - 64GBROM`
    },
];

function phoneCard(image, name, price, details) {
    return <div className="prod-item">
        <img src={image} alt="" />
        <div className="detail-conatainer">
            <p className="prodName">{name}</p>
            <p className="details">{details}</p>
            <p className="price">#{price}</p>
            <button data-testid="btnForAddtoCart" className="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
}

const PhoneCardArray = (props) => {
    let products = props.prod;
    let inView = props.view;
    const [phone, setPhone] = useState("all");
    useEffect(() => { setPhone(inView) }, [inView]);
    let displayedPhones;
    if (phone === "all") {
        displayedPhones = products;
    } else {
        displayedPhones = products.filter(product => inView === product.make)
    }
    return <div >
        <div className="prod-container">
            {displayedPhones.map((item =>
                phoneCard(item.image, item.name, item.price, item.details)

            ))}
        </div>
    </div>
};


function ProductSection() {

    const [inView, setView] = useState("all");

    function btnFunction(view) {
        setView(view)
    }

    const btnStyle = (btnId) => ({
        backgroundColor: inView === btnId ? "rgba(9, 10, 65, 1)" : "rgba(243, 240, 251, 1)",
        color: inView === btnId ? "rgba(255, 255, 255, 1)" : "",
    });


    return <div id="products">
        <div id="filter-btn-container">
            <button style={btnStyle("all")} onClick={() => btnFunction("all")} id="all">Popular Products</button>
            <button style={btnStyle("iphone")} onClick={() => btnFunction("iphone")} id="iphone">Apple</button>
            <button style={btnStyle("samsung")} onClick={() => btnFunction("samsung")} id="samsung">Samsung</button>
        </div>

        <PhoneCardArray prod={phones} view={inView} />


    </div>
}

export default ProductSection;