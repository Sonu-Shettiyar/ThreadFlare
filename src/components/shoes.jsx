import { Box, Heading, Card, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import React, { Component } from "react";
import Slider from "react-slick";


function Shoes() {

    const [dataValue, Setdata] = useState([])

    function RenderData() {
        fetch("https://koovs-api-data.onrender.com/mens?category=footwear&q=shoes")
            .then((req) => {
                return req.json()
            })
            .then((data) => {
                Setdata(data)

            })
    }

    useEffect(() => {
        RenderData()
    }, [])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: "linear"
    };

    return (
        <Box width="100%">
            <Heading size={"xl"} textAlign="center" fontWeight={"300"} mb={70} mt={70} textDecoration="underline">Sneaker Edit</Heading>
            <Box width="96%" margin={"auto"} pl={7}>
                <Slider {...settings}>

                    {
                        dataValue?.map((ele, ind) => {
                            return (
                                <Box key={ind} >
                                    <Card maxW='xs' fontSize={"13.5px"} borderRadius={"0px"} boxShadow="none">
                                        <Image
                                            className="image"
                                            src={ele.image1}
                                            height="420px"
                                        />
                                        <Box p={4}>
                                            <Text color={"rgba(0, 0, 0, 0.567)"}>{ele.brand}</Text>
                                            <Text fontWeight={500} mt={1}>{ele.info}</Text>
                                            <Box style={{ display: "flex", justifyContent: "space-between", width: "60%" }} mt={1} fontSize={"15px"}>

                                                <Text>Rs. {ele.oprice}.00</Text>
                                                <Text textDecoration={"line-through"}>Rs. {ele.price}.00</Text>
                                            </Box>


                                        </Box>
                                    </Card>

                                </Box>
                            )
                        })
                    }


                </Slider>
            </Box>
        </Box>

    )
}

export default Shoes


// <Box>
// <Box>
//     <Heading size={"2xl"} textAlign="center" fontWeight={"400"} mb={30} mt={10} textDecoration="underline">Sneaker Edit</Heading>

// </Box>
// <Box>
// </Box>


// </Box>