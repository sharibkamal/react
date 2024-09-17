import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
    const [btnName, setBtnName]  = useState("Login");
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Status: { onlineStatus ? "green" : "red" }
                    </li>
                    <li>
                        <Link className="text-link" to ="/">Home</Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/about">About Us</Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link className="text-link" to="/grocery">Grocery</Link>
                    </li>
                    <li>Cart</li>
                    <li>
                        <button
                        className="login"
                        onClick={() => {
                            btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                        }}
                        >
                        {btnName}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;