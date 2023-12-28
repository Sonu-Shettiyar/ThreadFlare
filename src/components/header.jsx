import React from "react";
import { Link } from "react-router-dom";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons';
import { ImFacebook } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

{/*  */ }

function Header() {

    return (

        <div style={{ boxShadow: "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px", fontSize: "15px", fontFamily: "Roboto, sans-serif", padding: "10px" }}>
            <div style={{ display: "flex", margin: "0px 70px 0px 70px", justifyContent: "space-between" }}>
                <div style={{ display: "flex" }}>
                    <Link to={"https://www.facebook.com/koovs"}>
                        <div style={{ display: "flex" }}>
                            <ImFacebook style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                            <p style={{ marginRight: "20px" }}>2.5M Followers</p>
                        </div>
                    </Link>
                    <Link to={"https://www.instagram.com/koovsfashion/"}>
                        <div style={{ display: "flex" }}>
                            <FaInstagram style={{ width: "20px", height: "20px", marginRight: "10px" }} />
                            <p>998k Followers</p>
                        </div>
                    </Link>
                </div>
                <div style={{ marginLeft: "-210px" }}>
                    <p>Welcome to a realm of fashion possibilities | Dynamic and youthful</p>

                </div>

                <div style={{}}>
                    <><span>English </span><ChevronDownIcon /></>
                </div>
            </div>

        </div >
    )
}

export default Header;