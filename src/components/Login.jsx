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
            <Box width={"60%"} display={"flex"} margin={"auto"} mt={"50px"} borderRadius={"10px"} p={10} boxShadow={"rgba(0, 0, 0, 0.16) 0px 1px 4px"}>
                <Box>
                    <Image src="https://i.pinimg.com/736x/ec/fb/9f/ecfb9ffd184bceec03b3c19161eee7fd.jpg" />
                </Box>
                <Box width={"60%"}>
                    <Image width={"50%"} display={"block"} margin={"auto"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTo7kHT9XYYCnVNBIrKcz7Z-b3mwtnJj-0y_tsgvEc0k8WdHVJA4T2jskYT6nElVcskZpY&usqp=CAU" />
                    <FormControl mt={30}>
                        <FormLabel>Email address</FormLabel>
                        <Input type='email' placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} />
                        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
                        <FormLabel mt={5}>Password</FormLabel>
                        <Input type='password' placeholder="Enter your Password" onChange={(e) => setPassword(e.target.value)} />
                        <Button display={"block"} bgColor={"black"} onClick={handleLogin} color={"white"} margin={"auto"} mt={"50px"}>Submit</Button>
                        <Text mt={6} textAlign={"center"}>Not have a account? <Link to={"/signup"}>Sign up</Link></Text>
                    </FormControl>
                </Box>

            </Box>
        </Box>
    )
}

export default Login;