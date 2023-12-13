import { Box,Button,Heading,Text,Image } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import CardCreation from "./cardCreation";
import SkeletonModel from "./SkeletonModel";
import { Link } from "react-router-dom";

function Versity(){
    const [dataValue,SetData]=useState([])
    const [skeleton,setSkeleton] = useState(true);


    function RenderData(){
        fetch("https://koovs-api-data.onrender.com/mens?brand=The%20Couture%20Club&q=jacket")
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            SetData(data)
            setSkeleton(false)
        })
    }

    useEffect(()=>{
        RenderData()
    },[])
    
    return(
        <Box >
            <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={70}>Varsity Jackets</Heading>
            <Text textAlign={"center"} textDecoration="underline" mt={10}>The couture club</Text>

            <Box style={{display:"grid",gridTemplateColumns:"repeat(4,20%)",gap:"20px 50px",justifyContent:"center"}} mt={50}>
                {
                    skeleton?<SkeletonModel size={15}/>:
                    dataValue?.map((ele,ind)=>{
                        return <CardCreation props={ele} key={ind}/>
                        
                    })
                }
            </Box>

            <Link to={"/products/men/jacket"}><Button bgColor={"black"} color="white" display={"block"} margin={"auto"} mt={10}>View All</Button></Link>

            <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt="100px">Featured Brands</Heading>
            <Box display={"flex"} m={"auto"} w={"90%"} justifyContent="space-between" mt="90px">
                <Box >
                    <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1007.jpg?v=1667990812&width=940"
                    w={"97%"}
                    />
                    <Text fontWeight={500} mt={3} fontSize={"17px"}>Essentials by Koovs</Text>
                </Box>
                <Box>
                    <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3213-141.jpg?v=1667995128&width=940"
                    w={"97%"}
                    />
                    <Text fontWeight={500} mt={3} fontSize={"17px"}>Koovs</Text>
                </Box>
            </Box>
        </Box>
    )
}

export default Versity;