

import { NavLink } from "react-router-dom";

function Cart() {
    return (

        <div>
            <NavLink push to={"/checkout"}>
                <button>checckout</button></NavLink>
        </div>

    )
}
export default Cart;