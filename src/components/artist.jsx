import { Box,Text,Heading,Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CardCreation from "./cardCreation";
import SkeletonModel from "./SkeletonModel";
import { Link } from "react-router-dom";


function Artist() {
    const [dataValue,setData]=useState([])
    const [skeleton,setSkeleton] = useState(true);

    function RenderData(){
        fetch("https://koovs-api-data.onrender.com/mens?brand=Koovs&category=T-shirts")
        .then((req)=>{
            return req.json()
        })
        .then((data)=>{
            setData(data)
            setSkeleton(false)

        })
    }

    useEffect(()=>{
        RenderData()
    },[])
    return (
        <Box>
            <Text textAlign={"center"} textDecoration="underline" mt={70}>George Thomas x Koovs</Text>
            <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={10}>Artist Collab</Heading>

            <Box style={{display:"grid",gridTemplateColumns:"repeat(4,20%)",gap:"20px 50px",justifyContent:"center"}} mt={50}>
                {
                    skeleton?<SkeletonModel size={20}/>:
                    dataValue?.map((ele,ind)=>{
                        return <CardCreation props={ele} key={ind}/>
                        
                    })
                }
            </Box>

            <Link to={"/products/men/T-shirts"}><Button bgColor={"black"} color="white" display={"block"} margin={"auto"} mt={10}>Shop more</Button></Link>
        </Box>
    )
}

export default Artist