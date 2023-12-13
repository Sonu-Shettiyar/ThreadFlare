import { Box, Heading } from '@chakra-ui/react';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import "./CSS_Files/middlesectionWomen.css";
import { BiDisc } from "react-icons/bi";

import { Link } from 'react-router-dom';






export default class MiddlesectionWomen extends Component {




    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            autoplay: true,
            slidesToScroll: 2,
            autoplaySpeed: 3000,
            cssEase: "linear",
            appendDots: dots => (
                <div
                    style={{
                        width: "10%",
                        borderRadius: "10px",
                        padding: "10px",

                        marginLeft: "89%"
                    }}
                >
                    <ul style={{ marginTop: "-560px" }}> {dots} </ul>
                </div>
            ),
            customPaging: i => (
                <div
                    style={{
                        color: "black",
                        width: "10px"
                    }}
                >
                    {<BiDisc />}
                </div>
            )
        };
        return (
            <div style={{ width: "95%", margin: "auto", marginTop: "100px" }}>
                <Heading size={"2xl"} fontWeight={"400"} mb={50} ml={10}>Shop Women's</Heading>
                <Slider {...settings}>
                    <Link to={"/products/women/Tops"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/tops-01_copy.jpg?v=1667987961&width=533'

                                />

                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Tops</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>



                        </Box>
                    </Link>
                    <Link to={"/products/women/Bra"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/SBRA2-01.jpg?v=1667988040&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Sports Bra</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link>

                    <Link to={"/products/women/T-shirts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Tee-01.jpg?v=1667898427&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>T-Shirts</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>



                        </Box>
                    </Link>
                    <Link to={"/products/women/shorts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/shorts_women-01.jpg?v=1667898316&width=533'

                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Shorts</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link>
                    <Link to={"/products/women/Leggings"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/leggings-01.jpg?v=1667899318&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Leggings</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link>
                    <Link to={"/products/women/sweatshirts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/sweats_women-01.jpg?v=1667898406&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"} >Sweatshirts</Heading>
                                    <Text>20 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link>
                </Slider>
            </div>
        );
    }
}
