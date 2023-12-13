import { Box, Text, Heading, Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardCreation from "./cardCreation";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';


function ExploreMen() {
    const [dataValue, setData] = useState([]);
    const [selectVal,setSelectVal]=useState("Koovs")
   

    const handleChange=(e)=>{
        setSelectVal(e.target.value)
    }

    function RendeData() {
        fetch(`https://koovs-api-data.onrender.com/mens?brand=${selectVal}&_limit=8`)
            .then((req) => {
                return req.json()
            })
            .then((data) => {
                setData(data)
            })
    }

    useEffect(() => {
        RendeData()
    }, [selectVal])
    return (
        <Box>
            <Heading size={"xl"} textAlign="center" fontWeight={"400"} marginBottom={"100px"} mt={"150px"} color="rgba(0, 0, 0, 0.555)">Explore brands
                <Menu>
                    <MenuButton as={Button} bgColor="white" _hover={{backgroundColor:"white"}} color={"black"} pb={2} pl={4} borderBottom="1px solid black" borderRadius={"0px"} fontSize="30px" rightIcon={<ChevronDownIcon />}>
                        Koovs
                    </MenuButton>
                    <MenuList >
                        <MenuItem onClick={(e)=>handleChange(e)} value={"Koovs"}>Koovs</MenuItem>
                        <MenuItem onClick={(e)=>handleChange(e)} value={"The Couture Club"}>The Couture Club</MenuItem>
                        <MenuItem onClick={(e)=>handleChange(e)} value={"Bravesoul"}>Bravesoul</MenuItem>
                    </MenuList>
                </Menu>
            </Heading>

            <Box style={{ display: "grid", gridTemplateColumns: "repeat(4,20%)", gap: "20px 50px", justifyContent: "center" }} mt={50}>
                {
                    dataValue?.map((ele, ind) => {
                        return <CardCreation props={ele} key={ind} />

                    })
                }
            </Box>

            {/* <Button bgColor={"black"} color="white" display={"block"} margin={"auto"} marginBottom="200px" mt={10}>View more</Button> */}
        </Box>
    )
}

export default ExploreMen

{/* <span style={{textDecoration:"underline",color:"black"}}> Koovs sports</span> */ }