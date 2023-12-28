import { Box, Button, Heading, Image } from "@chakra-ui/react";
import {
    FormControl,
    FormLabel,
    Input,
    Text
} from '@chakra-ui/react';
import Navbar from "./navBar";
import { Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./Authcontext";
import { useContext } from "react";


function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loginStatus, setLoginStatus] = useState(false)
    const { SetisAuth } = useContext(AuthContext)
    const [alerti, Setalerti] = useState(false)


    const handleLogin = () => {
        axios.get(`https://koovs-api-data.onrender.com/users?email=${email}&password=${password}`)
            .then((req) => {
                if (req.data.length != 0) {
                    alert(`Welcome ${req.data[0].name}`)
                    setLoginStatus(true)
                    SetisAuth(true)
                } else {
                    alert("Wrong Credentials")
                    setLoginStatus(false)
                }
            })

    }

    useEffect(() => {

    }, [loginStatus])

    if (loginStatus) {
        return <Navigate to={"/"} />
    }


    return (
        <Box>
            <Navbar />
            <Heading fontWeight={"500"} textAlign={"center"} mt={39}>Login</Heading>
            <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"} bgColor={'#4250691f'} gap='50px' borderRadius={"10px"} p={10} boxShadow={"rgba(209, 199, 199, 0.16) 2px 5px 4px 5px"}>
                <Box>
                    <Image src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" />
                </Box>
                <Box width={"60%"}>
                    <Image width={"40%"} display={"block"} borderRadius='50%' margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU" />
                    <FormControl mt={30}>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input type='password' placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                        <Button display={"block"} bgColor={"black"} onClick={handleLogin} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button>
                    </FormControl>
                </Box>


            </Box>
            <Text mt={6} textAlign={"center"}>Don't have an account ? <Link to={"/signup"}>Create new</Link></Text>
        </Box>
    )
}

export default Login;