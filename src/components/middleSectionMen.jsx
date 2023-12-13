import { Box, Heading } from '@chakra-ui/react';
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Card, CardBody, Image, Stack, Text } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import { Icon } from '@chakra-ui/react';
import "./CSS_Files/middleSectionMen.css";
import { BiDisc } from "react-icons/bi";
import { Link } from 'react-router-dom';








export default class MiddlesectionMen extends Component {




    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
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
                <Heading size={"2xl"} fontWeight={"400"} mb={50} ml={10}>Shop Men's</Heading>
                <Slider {...settings}>
                    <Link to={"/products/men/sweatshirts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/ball_sweatshirt-01.jpg?v=1668170499&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Sweatshirts</Heading>
                                    <Text>72 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link >
                    <Link to={"/products/men/accessories"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/unisex_accessories-01.jpg?v=1668170734&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Accessories</Heading>
                                    <Text>10 items</Text>
                                </Box>
                            </Card>
                        </Box>
                    </Link >
                    <Link to={"/products/men/T-shirts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Untitled-6-01.jpg?v=1667985899&width=533'

                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>T-Shirts</Heading>
                                    <Text>67 items</Text>
                                </Box>
                            </Card>
                        </Box>
                    </Link >
                    <Link to={"/products/men/jacket"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1025.jpg?v=1667897521&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Jackets</Heading>
                                    <Text>21 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link >
                    <Link to={"/products/men/pants"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-0291.jpg?v=1667985664&width=533'


                                />
                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"} >Pants</Heading>
                                    <Text>16 items</Text>
                                </Box>
                            </Card>

                        </Box>
                    </Link >
                    <Link to={"/products/men/shorts"}>
                        <Box>
                            <Card className='card-container'>
                                <Image
                                    src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/shortsn-01.jpg?v=1667897412&width=533'

                                />

                                <Icon className='incons' w={12} h={12} as={ArrowForwardIcon} />
                                <Box style={{ marginTop: "-45px", marginLeft: "20px" }}>
                                    <Heading size={"sm"} fontWeight={"500"}>Shorts</Heading>
                                    <Text>34 items</Text>
                                </Box>
                            </Card>



                        </Box>
                    </Link >
                </Slider>
            </div>
        );
    }
}
