import React, { useEffect, useReducer, useState } from 'react'

import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure, FormControl,
    FormLabel,
    Input,
    Button,
    Box

} from '@chakra-ui/react'


import {
    
    Text,
    Divider,
    Image

} from '@chakra-ui/react'
import { Link,Navigate } from "react-router-dom";
import axios from 'axios';




const initstate = {
    Name: "",
    Mobile: "",
    Address: "",
    Pincode: "",
    Landmark: "",
}

const reducer = (state, action) => {
    if (action.type == "name") {
        return {
            ...state,
            Name: action.payload,
        }
    }
    else if (action.type == "mobile") {
        return {
            ...state,
            Mobile: action.payload
        }
    }
    else if (action.type == "address") {
        return {
            ...state,
            Address: action.payload
        }
    }
    else if (action.type == "pincode") {
        return {
            ...state,
            Pincode: action.payload
        }
    }
    else if (action.type == "landmark") {
        return {
            ...state,
            Landmark: action.payload
        }
    }


}




function AddressSection({isArr,price}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [formStatus, SetFormStaus] = useState(false)
    const [state, dispatch] = useReducer(reducer, initstate)


    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        SetFormStaus(true)
    }
    const handleData=()=>{
        isArr.forEach((ele)=>{
            axios.delete(`https://koovs-api-data.onrender.com/cartdata/${ele}`)
            .then((req)=>{
                console.log("data deleted")
            })
        })
    }



    useEffect(() => {

    }, [formStatus])



    if (formStatus) {
        return (
            <>
                <Button onClick={onOpen}>Got To Payment page</Button>


                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}

                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Payment</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>

                            <Box>
                                <Text fontSize={"18px"} fontWeight={"500"} mb={5}>Total Amount: Rs.{price}.00</Text>
                                <Text fontSize={"18px"} fontWeight={"500"}>Deliver to This Address</Text>
                                <Divider />
                                <Text mt={5}>{state.Name}</Text>
                                <Text>{state.Address}</Text>
                                <Text>{state.Mobile}</Text>
                                <Text>{state.Pincode}</Text>
                                <Text>{state.Landmark ? state.Landmark : ""}</Text>
                                <Divider />
                            </Box>

                            <Divider />
                            <form action="">
                                <FormControl>
                                    <Box>
                                        <Text textAlign={"center"} fontSize={"18px"} fontWeight={"500"}>Payment Type</Text>
                                        <Image width={"50%"} display={"block"} margin={"auto"} src="https://img.freepik.com/free-vector/flat-design-cash-delivery_23-2148808658.jpg?w=2000" alt="" />
                                        <Button onClick={handleData} bgColor={"black"} color={"white"} width={"100%"} mb={5} mt={5}><Link to={"/PaymentSuccessfull"}>Cash on Delivery</Link></Button>
                                    </Box>
                                    <Divider />

                                    <Box mt={4}>
                                        <FormLabel>Card No*</FormLabel>
                                        <Input type='number' placeholder='Card no.' isRequired />
                                    </Box>
                                    <Box display={"flex"} justifyContent={"space-between"} mt={4}>
                                        <Box width={"60%"} mr={2}>
                                            <FormLabel>Expiry Date*</FormLabel>
                                            <Input placeholder="Select Date and Time"
                                                size="md"
                                                type="datetime-local" isRequired />
                                        </Box>
                                        <Box>
                                            <FormLabel>CVV*</FormLabel>
                                            <Input type='number' placeholder='Enter CVV' isRequired />
                                        </Box>

                                    </Box>

                                    <Box display={"flex"} alignItems={"center"} justifyContent={"right"} textAlign={"right"} mt={5}>
                                        <Button onClick={onClose} mr={5}>Cancel</Button>
                                        <input type="submit" value="Card Payment" style={{ fontSize: "16px", padding: "8px 15px", borderRadius: "5px", backgroundColor: "black", color: "white" }} />

                                    </Box>



                                </FormControl>
                            </form>
                        </ModalBody>

                    </ModalContent>
                </Modal>


            </>
        )
    }


    return (
        <>
            <Button bgColor={"black"} color={"white"} width={"94%"} ml={5} onClick={onOpen}>Place order</Button>


            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Details</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <form action="" onSubmit={(e) => { handleSubmit(e) }}>

                            <Box>
                                <FormLabel>Full Name*</FormLabel>
                                <Input ref={initialRef} placeholder='Enter your full name' onChange={(e) => { dispatch({ type: "name", payload: e.target.value }) }} isRequired />
                            </Box>

                            <Box mt={4}>
                                <FormLabel>Mobile No*</FormLabel>
                                <Input type='number' placeholder='Mobile no.' onChange={(e) => { dispatch({ type: "mobile", payload: e.target.value }) }} isRequired />
                            </Box>
                            <Box mt={4}>
                                <FormLabel>Address*</FormLabel>
                                <Input type='text' placeholder='Enter Your Address' onChange={(e) => { dispatch({ type: "address", payload: e.target.value }) }} isRequired />
                            </Box>
                            <Box display={"flex"} justifyContent={"space-between"} mt={4}>
                                <Box width={"30%"}>
                                    <FormLabel>Pincode*</FormLabel>
                                    <Input type='number' placeholder='Pincode' onChange={(e) => { dispatch({ type: "pincode", payload: e.target.value }) }} isRequired />
                                </Box>
                                <Box>
                                    <FormLabel>Landmark</FormLabel>
                                    <Input type='text' placeholder='Landmark' onChange={(e) => { dispatch({ type: "landmark", payload: e.target.value }) }} />
                                </Box>

                            </Box>

                            <Box display={"flex"} alignItems={"center"} justifyContent={"right"} textAlign={"right"} mt={5}>
                                <Button onClick={onClose} mr={5}>Cancel</Button>
                                <input type="submit" value="submit" style={{ fontSize: "16px", padding: "8px 15px", borderRadius: "5px", backgroundColor: "black", color: "white" }} />




                            </Box>




                        </form>
                    </ModalBody>

                </ModalContent>
            </Modal>


        </>
    )
}

export default AddressSection;