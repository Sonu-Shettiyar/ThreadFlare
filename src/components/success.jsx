import { Box } from "@chakra-ui/react";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    Text
} from '@chakra-ui/react'

import Navbar from "./navBar";
import Confetti from "react-confetti";
import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react'


function Success() {

 const [status,SetStatus]=useState(false)
 let [value,SetVal]=useState(5)

    const navigate1=()=>{
    
           
         SetStatus(true)

    }

    setInterval(()=>{
       SetVal(value-1)
    },1000)


    useEffect(() => {
        setTimeout(()=>{
            navigate1()
            SetVal(value--)
        },5000)
       console.log("sonu")
    }, [])


    if(status){
        return <Navigate to={"/"} />
    }


    return (
        <Box>
            <Confetti numberOfPieces={350} width={"1500%"} />
            <Navbar />
            <Box display={"block"} margin={"auto"} marginTop={100}>

                <Text textAlign={"center"} fontSize={"20px"} >You will Redirected to Home Page in {value}..... seconds<CircularProgress marginLeft={"20px"} isIndeterminate color='green.300' /></Text>

                <Alert
                    status='success'
                    variant='subtle'
                    flexDirection='column'
                    alignItems='center'
                    justifyContent='center'
                    textAlign='center'
                    height='200px'
                    width={"50%"}
                    margin={"auto"}
                    marginTop={50}
                    borderRadius={"10px"}
                >
                    <AlertIcon boxSize='40px' mr={0} />
                    <AlertTitle mt={4} mb={1} fontSize='lg'>
                        Order Placed Successfully
                    </AlertTitle>
                    <AlertDescription maxWidth='sm'>
                        Thanks So Much for Your Order! I Hope You Enjoy Your New Purchase!
                    </AlertDescription>
                </Alert>
            </Box>
        </Box>
    )
}

export default Success;