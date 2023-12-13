import { Box } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import "./CSS_Files/singlepageslider.css"

function SinglePageSlider({dis}) {

    return (
        <Box>
            <Tabs>
                <TabList alignItems={"center"}  justifyContent="center">
                    <Tab fontWeight={"500"} color={"black"}>Product description</Tab>
                    <Tab fontWeight={"500"} color={"black"}>Shipping & Return</Tab>
                    <Tab fontWeight={"500"} color={"black"}>Material & Care</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel >
                        <p className="slider-values">{dis}</p>
                    </TabPanel>
                    <TabPanel>
                        <p className="slider-values">India-wide Shipping Average time: 4-6 days after the order confirmation.<br/>
                            <span className="bold-letter-slider">SHIPPING POLICY</span> <br/>
                            Any product bought from https://koovs.com, will be shipped to the cusrtomer maximum within 4 to 6 days. In case of any exceptions, due to non-availability of a certain product, we will inform the <br/> customer through the email id provided in the customer registration form.<br/>
                            If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be processed in multiple shipments, in which case <br/> you will be notified of the tracking number when each shipment occurs.<br/>
                            Any COD orders, if available, will be charged extra @ INR 100 Flat.<br/>
                            <span className="bold-letter-slider">RETURN/EXHANGE POLICY</span><br/>
                            Koovs has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the product.<br/>
                            To initiate return or exchange, mail us at care@koovs.com<br/>
                            <span className="bold-letter-slider">No returns or exchange allowed for inner wear & under garments.</span><br/></p>
                    </TabPanel>
                    <TabPanel>
                        <p className="slider-values">Wash inside out <br />

Wash with similar colours</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default SinglePageSlider