import React, { useReducer } from "react";
import { Box, Button, Heading, Text,Divider } from "@chakra-ui/react";
import { useEffect, useState} from "react";
import axios from 'axios';
import CardCreation from "./cardCreation";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react'
import { ChevronDownIcon,RepeatIcon,ChevronRightIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Checkbox, Stack } from '@chakra-ui/react';
import { MdViewHeadline,MdFormatAlignJustify } from "react-icons/md";

import SkeletonModel from "./SkeletonModel";
import Navbar from "./navBar";
import { useParams } from "react-router-dom";

  



function Drawerfun() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()

    return (
        <>
            <Button ref={btnRef} bgColor="white" _hover={{ backgroundColor: "white" }} onClick={onOpen} rightIcon={<ChevronDownIcon />}>
                Filter
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader fontSize={"25px"} mt={-2}>Filter</DrawerHeader>
                    <DrawerBody>

                        <Heading fontSize={"20px"} fontWeight={400}>Gender</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox>
                                Men
                            </Checkbox>
                            <Checkbox>
                                Women
                            </Checkbox>
                        </Stack>
                        <br />
                        <Heading fontSize={"20px"} fontWeight={400}>Brand</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox>
                                Koovs
                            </Checkbox>
                            <Checkbox>
                                The Couture Club
                            </Checkbox>
                            <Checkbox>
                                The cult sweatshirt
                            </Checkbox>
                            <Checkbox>
                                Bravesoul
                            </Checkbox>
                            <Checkbox>
                                BALL Copenhagen
                            </Checkbox>
                            <Checkbox>
                                Essentials By Koovs
                            </Checkbox>
                            <Checkbox>
                                Garcon
                            </Checkbox>
                        </Stack>
                        <br />
                        <Heading fontSize={"20px"} fontWeight={400}>Product Type</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox>
                                T-shirts
                            </Checkbox>
                            <Checkbox>
                                sweatshirts
                            </Checkbox>
                            <Checkbox>
                                jacket
                            </Checkbox>

                        </Stack>
                        <br />
                        <Heading fontSize={"20px"} fontWeight={400}>Extra Items</Heading>
                        <br />
                        <Stack spacing={5} ml={3} direction="column">
                            <Checkbox>
                                footwear
                            </Checkbox>
                            <Checkbox>
                                accessories
                            </Checkbox>


                        </Stack>
                    </DrawerBody>

                </DrawerContent>
            </Drawer>
        </>
    )
}


const initState={
    _sort:"",
    _order:""
}


const reducer=(state,action)=>{
    if(action.type=="asc"){
        return{
            ...state,
            _sort:"oprice",
            _order:action.payload
        }
    }
    else if(action.type=="desc"){
        return{
            ...state,
            _sort:"oprice",
            _order:action.payload
        }
    }
    else if(action.type=="ascname"){
        return{
            ...state,
            _sort:"info",
            _order:action.payload
        }

    }
    else if(action.type=="dscename"){
        return{
            ...state,
            _sort:"info",
            _order:action.payload
        }

    }
    else if(action.type=="reset"){
        return initState;
    }
}

function Product() {
    const [state,dispatch]=useReducer(reducer,initState)
    const [dataValue, setData] = useState([])
    const [page, Setpage] = useState(1)
    const [gridSize,setgridSize]=useState(5)
    const [totBtn,SettotBtn]=useState(0)
    const [skeleton,setSkeleton] = useState(true);
    

    const {category}=useParams()
    

    function RenderData() {
        axios.get(`https://koovs-api-data.onrender.com/mens?gender=men&_limit=15&_page=${page}&q=${category?category:""}`,{
            params:state
        })
            .then((req) => {
                console.log(req)
                setSkeleton(true)
                setData(req.data)
                let totalData=req.headers["x-total-count"]
                totalData=Math.ceil(totalData/15)
                SettotBtn(totalData)
                setSkeleton(false)
            })
    }

    const handleClick = (e) => {
        Setpage(e.target.innerText)
    }

    const handleClickGrid=(e)=>{
        setgridSize(e.target.value)
    }
    let newArray = new Array(totBtn).fill(0)

    useEffect(() => {
        RenderData()
    }, [page,gridSize,state]);

    
    
    return (
        <Box>
            <Navbar/>
            <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={10}>Products</Heading>
            <Text textAlign={"center"} mb={30}>Home <ChevronRightIcon /> Products <ChevronRightIcon /> Men <ChevronRightIcon/> {category}</Text>
            <Box mt={100} mb={5} marginLeft="75px" display={"flex"} justifyContent="space-between">
                <Box>
                    <Menu>
                        <Drawerfun />
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} bgColor="white" _hover={{ backgroundColor: "white" }} style={{ fontWeight: "600", fontSize: "14px" }} rightIcon={<ChevronDownIcon />}>
                            Featured
                        </MenuButton>
                        <MenuList >
                            <MenuItem onClick={(e)=>dispatch({type:"ascname",payload:e.target.value})} value={"asc"}>Alphabetically, A-Z</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"descname",payload:e.target.value})} value={"desc"}>Alphabetically, Z-A</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"asc",payload:e.target.value})} value={"asc"}>Price, low to high</MenuItem>
                            <MenuItem onClick={(e)=>dispatch({type:"desc",payload:e.target.value})} value={"desc"}>Price, high to low</MenuItem>
                            <Divider />
                            <MenuItem onClick={(e)=>dispatch({type:"reset"})}>Reset  <RepeatIcon ml={130} mt={1}/></MenuItem>
                        </MenuList>
                    </Menu>
                </Box>
                <Box mr={50} display="flex" justifyContent={"space-between"} width={"9%"}>
                    <Button onClick={(e)=>handleClickGrid(e)} value={"4"} bgColor="rgba(255, 0, 0, 0.464)" borderRadius="100px"><MdViewHeadline size={"30px"}/></Button>
                    <Button onClick={(e)=>handleClickGrid(e)} value={"5"} bgColor="rgba(255, 0, 0, 0.464)" borderRadius="100px"><MdFormatAlignJustify size={"25px"}/></Button>
                </Box>
            </Box>

            <Box style={{ display: "grid", gridTemplateColumns:gridSize==5?"repeat(5,15%)":"repeat(4,20%)", gap: "20px 50px", justifyContent: "center" }}>
                {
                    skeleton?<SkeletonModel size={15}/>:
                    dataValue?.map((ele, ind) => {
                        return <CardCreation props={ele} key={ind} size={gridSize} />

                    })
                }
            </Box>


            <Box display={"flex"} justifyContent="center" gap={"2px"} margin="auto" mt={50}>
                {
                    newArray?.map((ele, ind) => {
                        return (
                            <Button key={ind} borderRadius="100px" isDisabled={page == ind + 1} bgColor={page == ind + 1 ? "black" : ""} color={page == ind + 1 ? "white" : ""} onClick={(e) => handleClick(e)}>{ind + 1}</Button>
                        )
                    })
                }
            </Box>

        </Box>
    )
}

export default Product;