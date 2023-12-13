
import React from "react";
import { useState, useEffect } from "react"
import {
    Button,
    Text,
    Box,
    Image,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
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
import { GoPencil } from "react-icons/go";
import { RiCoupon2Fill, RiTruckLine } from "react-icons/ri";
import { AiOutlineShoppingCart } from "react-icons/ai";

import axios from "axios";
import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react';
import AddressSection from "./Address";




export default function DrawerExample({ status }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    const [cartData, Setdata] = useState([])
    const [price, Setprice] = useState(0)
    const [relprops, setprops] = useState(true)
    const [remStatus, setRemStatus] = useState(false)
    const [isArr,setisArr]=useState([])


    console.log(cartData)

    const handleDel = (e) => {
        setRemStatus(true)
        let val=e.target.value;
        axios.delete(`https://koovs-api-data.onrender.com/cartdata/${val}`)
            .then((req) => {
                setprops(!relprops)
                setRemStatus(false)
            })


    }


    function RenderData() {
        axios.get("https://koovs-api-data.onrender.com/cartdata")
            .then((req) => {
                Setdata(req.data)
                let total = 0
                let arr=[]
                req.data.forEach(element => {
                    total += (element.oprice * element.quantity)
                    arr.push(element.id)
                });
                Setprice(total)
                setisArr(arr)
            })
    }

    useEffect(() => {
        RenderData()
    }, [relprops, status])




    return (
        <>
            <AiOutlineShoppingCart style={{ cursor: "pointer", width: "20px", height: "20px" }} onClick={onOpen} />
            <Drawer
            zIndex="10"
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
                size={"md"}
            >
                <DrawerOverlay />
                <DrawerContent >
                    <DrawerCloseButton />
                    <DrawerHeader  mt={-2} fontSize={"2xl"}>Shopping Cart</DrawerHeader>
                    {
                        cartData.length == 0 ? <Box><Image width={"60%"} margin="auto" mt={140} src="https://cdn.shopify.com/s/files/1/0099/2867/1291/products/meshdustbinsmallblkhbldbjbstwdn0001902.jpg.3773045578.989xx.jpg?v=1669287459" /> <Text textAlign={"center"} ml={10} mt={50} fontSize={"25px"} textDecoration="underline">Your Cart is Empty!</Text> </Box> :
                            <Text fontSize={"18px"} ml={7} pb={1}>Congrats! You are eligible for <span style={{ fontWeight: "600" }}>FREE Shipping</span></Text>
                    }


                    {
                        remStatus ? <Alert mt={2} status='success' alignItems='center'
                            justifyContent='center'
                            textAlign='center' variant='subtle'>
                            <AlertIcon />
                            Product is Successfully Removed From Cart
                        </Alert> : ""
                    }
                    <DrawerBody>


                        <Box width={"94%"}>
                            <Box mt={5}>
                                {
                                    cartData?.map((ele, ind) => {
                                        return (


                                            <Box width={"100%"} pb={"5px"} mb={"5px"} borderBottom={"1px solid rgba(0, 0, 0, 0.200)"} key={ind} >
                                                <Box display="flex" >
                                                    <Image src={ele.image1} width="17%" />
                                                    <Box ml={5}>
                                                        <Text>{ele.info}</Text>

                                                        <Text mt={2}>Rs. {ele.oprice}.00</Text>
                                                        <Box display="flex" alignItems={"center"}>

                                                            <Text>Quantity: {ele.quantity}</Text>
                                                            <Button fontSize="20px" bgColor={"rgba(255, 0, 0, 0.464)"} position={"relative"} left={"190px"} bottom={"25px"} onClick={(e)=>handleDel(e)} value={ele.id}><DeleteIcon /></Button>
                                                        </Box>



                                                    </Box>


                                                </Box>
                                            </Box>
                                        )
                                    })
                                }

                            </Box>
                        </Box>
                    </DrawerBody>




                    <DrawerFooter bgColor={"#f5f5f5"} display={cartData.length == 0 ? "none" : "block"} marginTop={cartData.length == 0 ? "340px" : "0px"}>

                        <Box width={"100%"}>
                            <Box display={"grid"} gridTemplateColumns={"repeat(3,30%)"} width={"100%"} fontSize={"17px"} fontWeight={500} textAlign={"center"} ml={5}>
                                <Box borderRight={"2px solid #e5e7eb"}>
                                    <GoPencil style={{ marginLeft: "60px" }} />
                                    <Text>Note</Text>
                                </Box>
                                <Box borderRight={"2px solid #e5e7eb"}>
                                    <RiTruckLine style={{ marginLeft: "60px" }} />
                                    <Text>Shipping</Text>
                                </Box>
                                <Box>
                                    <RiCoupon2Fill style={{ marginLeft: "60px" }} />
                                    <Text>Coupan</Text>
                                </Box>
                            </Box>

                            <Box>
                                <Box display={"block"}>
                                    <Box display={"flex"} p={5} justifyContent="space-between">
                                        <Text>Shipping:</Text>
                                        <Text>FREE</Text>
                                    </Box>
                                </Box>
                                <br />
                                <Box display={"block"} mt={-39}>
                                    <Box display={"flex"} padding="0px 20px 0px 20px" justifyContent="space-between">
                                        <Text fontSize={"18px"} fontWeight={500}>Subtotal:</Text>
                                        <Text fontSize={"18px"} fontWeight={500}>Rs. {price}.00</Text>
                                    </Box>
                                </Box>
                                <Text fontSize={"14px"} textAlign="right" textDecoration={"underline"} mt={5} mr={5}>5% Extra off on UPI</Text>
                                {/* <Button bgColor={"black"} color={"white"} width={"94%"} ml={5}>Place order</Button> */}
                            </Box>
                        </Box>
                        <AddressSection isArr={isArr} price={price}/>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}