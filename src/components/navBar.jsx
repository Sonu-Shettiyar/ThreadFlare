import React from "react";
import Dropdown from "./mendropdown"
import WomanDropdown from "./womanDropdown";
import "./CSS_Files/navBar.css"
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Text,
    Box,
    Image,
    Divider,
    Input,
    InputRightElement,
    InputGroup
} from '@chakra-ui/react';
import { ChevronDownIcon, SearchIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    DrawerFooter,


} from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { CiLogout, CiLogin } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { AiOutlineStar} from "react-icons/ai";

import DrawerExample from "./DrawerExample.jsx";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";




function DrawerSearch() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    

    return (
        <>
            <SearchIcon style={{ marginTop: "2px", cursor: "pointer", width: "18px", height: "19px" }} src="./images/Search.png" alt="" onClick={onOpen} />
            <Drawer
                zIndex="10"
                isOpen={isOpen}
                placement='top'
                onClose={onClose}
                finalFocusRef={btnRef}
                
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    

                    <DrawerBody>
                        <Image display="block" margin="auto" src="https://lh3.googleusercontent.com/aOuR7XliYNQ4TjN15PTO-ieh77M_zL9RJ5kh-orU6gOofgqX66I_JJcqrk7493UDKUfyNvfDMUaO-A9uz0lvkqT2mpzX_thJYt-a-KBA7ILaWp-NfJtaZJUHTaorghZ2k2oGTWjTX51xKlQ6f8Pf4o-X_xDs4TDtP35xg1quQ9_BWhWf_IQHyx-F12GC4nW2yMo3y3zIrnnkIB6m8mwQR14E4OQMH5krCKqLdN6JAEzZ94tWnhh3Tbbn7dxnWIoFqkzNRpnRM1iesoYmSYMTdEFGmq3cMY4TAyzl2m_ioq-qvwzGfhV-ttO9puxqNByaPq9fKuSnfo_NCtfATjPdQYJAHx2Rp3bmLDYHN6PbCYLqAZP086mhHx4WfqHYNzhMAFu2TwAUGZtHiy6QMi0BAkJ4a5Afa2XtHVDEkFzFnnATwfgxomUeAyNt-yNT2aVTeHpoBgucHfP3QujBp8r3aNHsfOaIUXHeCdpJt-57bESTH4zIaLyGlljbdNAjcPeFoTOiQQjvMegoGMA6ZMOl455Yn-R08HpICGtmEVaGEJOU945PAN1k7a6s-Vr9P8pfDiLPbnp-BpUQPE_oXJ0yTQfb9LWFqvR-DiEtuFNq389WprJuoZVol02EBd0-Ox-3lO_7Cs1kT9bj2hY-lN6FJsvLC2Ai4FKiFkRnnf41sn1Aort1wnCuYmHg7jaH0u5QtINio3CE8qPF32zSE-9fJjITXxSgQxlIoR64jxK_sxQnyTo9oo9Zmru-w36Ses4kqxAkN-S6QYZW7MZ5cxEI173EOvZG9yqkGKCK0Ilvzsaj77pg-VtDaqPDeqf7gQXxXbOY1JMR6VA9XNZnBN7uSaODfJSNav_OFwYgEn5rMqcsxxcvTcbglYuj2lI6MXGtZ0HD8O4R19pxHJeR53wnxmKBBFcnGvYOtPsKGxoczOIFDy6PK7l7inrSD1k8tgNrez8L8Ch1QZgTnlITCwuEDFc=w133-h49-s-no?authuser=0"/>
                        <InputGroup display="block" margin="auto" mt={7}  width={"50%"}>
                            <Input
                                pr='4.5rem'
                                type="text"
                                placeholder='Search Products..'
                                width="100%"
                            />
                            <InputRightElement width='4.5rem'>
                                <SearchIcon />
                            </InputRightElement>
                        </InputGroup>
                    </DrawerBody>

                    <DrawerFooter>

                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}




export default function Navbar({ status }) {

    const {isAuth,SetisAuth}=useContext(AuthContext)


    const handleAuth=()=>{
        SetisAuth(false)
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between",position:"sticky",top:"0",backgroundColor:"white",zIndex:"9",boxShadow:"rgba(0, 0, 0, 0.1) 0px 2px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px"}}>
            <div style={{ display: "flex", justifyContent: "space-around", width: "30%", marginLeft: "20px" }}>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Men
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "125%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <Dropdown />
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Women
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "100%", height: "600px", borderRadius: "5px", marginTop: "-5px" }}>
                        <WomanDropdown />
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Artist collab
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">George Thomas</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Boomranng</MenuItem>
                    </MenuList>
                </Menu>
                <Menu>
                    <MenuButton as={Button} _hover={{ backgroundColor: "white" }} rightIcon={<ChevronDownIcon />} style={{ border: "none", marginTop: "10px", fontSize: "15px" }} bgColor="white" height="40px">
                        Collections
                    </MenuButton>
                    <MenuList bgColor="white" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px", width: "140%", borderRadius: "5px", marginTop: "-5px", padding: "10px" }}>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Summer Tees</MenuItem>
                        <MenuItem className="menu-item" color="rgba(0, 0, 0, 0.656)">Varsity</MenuItem>
                    </MenuList>
                </Menu>

            </div>
            <div style={{ marginRight: "220px" }}>
                <Link to={"/"}> <img width={"150px"} style={{ marginTop: "10px", marginLeft: "-30px",paddingBottom:"10px" }} src="https://lh3.googleusercontent.com/aOuR7XliYNQ4TjN15PTO-ieh77M_zL9RJ5kh-orU6gOofgqX66I_JJcqrk7493UDKUfyNvfDMUaO-A9uz0lvkqT2mpzX_thJYt-a-KBA7ILaWp-NfJtaZJUHTaorghZ2k2oGTWjTX51xKlQ6f8Pf4o-X_xDs4TDtP35xg1quQ9_BWhWf_IQHyx-F12GC4nW2yMo3y3zIrnnkIB6m8mwQR14E4OQMH5krCKqLdN6JAEzZ94tWnhh3Tbbn7dxnWIoFqkzNRpnRM1iesoYmSYMTdEFGmq3cMY4TAyzl2m_ioq-qvwzGfhV-ttO9puxqNByaPq9fKuSnfo_NCtfATjPdQYJAHx2Rp3bmLDYHN6PbCYLqAZP086mhHx4WfqHYNzhMAFu2TwAUGZtHiy6QMi0BAkJ4a5Afa2XtHVDEkFzFnnATwfgxomUeAyNt-yNT2aVTeHpoBgucHfP3QujBp8r3aNHsfOaIUXHeCdpJt-57bESTH4zIaLyGlljbdNAjcPeFoTOiQQjvMegoGMA6ZMOl455Yn-R08HpICGtmEVaGEJOU945PAN1k7a6s-Vr9P8pfDiLPbnp-BpUQPE_oXJ0yTQfb9LWFqvR-DiEtuFNq389WprJuoZVol02EBd0-Ox-3lO_7Cs1kT9bj2hY-lN6FJsvLC2Ai4FKiFkRnnf41sn1Aort1wnCuYmHg7jaH0u5QtINio3CE8qPF32zSE-9fJjITXxSgQxlIoR64jxK_sxQnyTo9oo9Zmru-w36Ses4kqxAkN-S6QYZW7MZ5cxEI173EOvZG9yqkGKCK0Ilvzsaj77pg-VtDaqPDeqf7gQXxXbOY1JMR6VA9XNZnBN7uSaODfJSNav_OFwYgEn5rMqcsxxcvTcbglYuj2lI6MXGtZ0HD8O4R19pxHJeR53wnxmKBBFcnGvYOtPsKGxoczOIFDy6PK7l7inrSD1k8tgNrez8L8Ch1QZgTnlITCwuEDFc=w133-h49-s-no?authuser=0" alt="luv" /></Link>
            </div>
            <div style={{ marginRight: "60px", width: "10%", display: "flex", justifyContent: "space-between", marginTop: "20px" }}>

                <DrawerSearch />



                <Menu>
                    <MenuButton as={Box} cursor="pointer" >
                        <img style={{ width: "22px", height: "22px" }} src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Pic.png" alt="" />
                    </MenuButton>
                    {
                        isAuth ? <MenuList width="30px">


                            <MenuItem>
                                <Image width={"20%"} src="https://portkennedyps.wa.edu.au/wp-content/uploads/2017/06/user-icon-male.jpg" alt="" />
                                <Text ml={20}>Luv kumar</Text>
                            </MenuItem>
                            <Divider />

                            <MenuItem mb={1} pt={3} justifyContent="space-between">
                                Your Profile
                                <CgProfile />
                            </MenuItem>
                            <Divider />

                            <MenuItem onClick={handleAuth} justifyContent="space-between">
                                Logout
                                <CiLogout />
                            </MenuItem>

                        </MenuList> : <MenuList width="30px" textAlign="center">
                            <MenuItem fontSize="18px" mb={5} >
                            <Text >Signup or Login</Text>
                            </MenuItem>


                            <Link to="/login"><MenuItem mb={1} pt={3} justifyContent="space-between">
                                Login
                                <CiLogin />
                            </MenuItem></Link>
                            <Divider />

                            <Link to="/signup">
                            <MenuItem justifyContent="space-between">
                                Signup
                                <CgProfile />
                            </MenuItem>
                            </Link>

                        </MenuList>
                    }
                </Menu>
                <AiOutlineStar style={{ marginTop: "-2px", cursor: "pointer", width: "25px", height: "25px" }} />

                <DrawerExample status={status} />
            </div>


        </div>


    )
}




