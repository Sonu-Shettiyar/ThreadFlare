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
                            <ImFacebook style={{ width: "20px", height: "20px" }} />
                            <p style={{ marginRight: "20px" }}>1.5M Followers</p>
                        </div>
                    </Link>
                    <Link to={"https://www.instagram.com/koovsfashion/"}>
                        <div style={{ display: "flex" }}>
                            <FaInstagram style={{ width: "20px", height: "20px", marginRight: "10px" }}/>
                            <p>628k Followers</p>
                        </div>
                    </Link>
                </div>
                <div style={{ marginLeft: "-210px" }}>
                    <p>Open doors to a world of fashion | Young and fresh</p>

                </div>

                <div style={{}}>
                    <Menu>
                        <MenuButton as={Button} bgColor="white" _hover={{ backgroundColor: "white" }} p={0} style={{ height: "10px", fontWeight: "300", fontSize: "14px" }} rightIcon={<ChevronDownIcon />}>
                            English
                        </MenuButton>
                        <MenuList>
                            <MenuItem >English</MenuItem>
                        </MenuList>
                    </Menu>
                </div>
            </div>

        </div >
    )
}

export default Header

// style={{ marginTop: "15px", paddingRight: "10px" }}
// style={{ marginTop: "15px", paddingRight: "10px" }}

// style={{ border: "none", marginTop: "15px", fontSize: "16px" }}