import "./CSS_Files/footerpart.css"
import { Input, Stack, InputGroup, InputLeftElement, InputRightElement } from '@chakra-ui/react'
import { EmailIcon, ArrowForwardIcon } from '@chakra-ui/icons'

function Footer() {
    return (
        <div style={{ backgroundColor: "#f5f5f5" }}>
            <div className="footer-div">
                <div className="footer-container">
                    <p>About</p>
                    <p>Our story</p>
                    <p>Contact us</p>
                    <p>Careers</p>
                    <p>Privacy policy</p>

                </div>
                <div className="footer-container">
                    <p>Support</p>
                    <p>Payments</p>
                    <p>Returns/Exchange</p>
                    <p>Shipment</p>
                    <p>Terms & conditions</p>

                </div>
                <div className="footer-container">
                    <p>Customer Care</p>
                    <p>Timings: 10 AM - 6 PM (Mon - Sat) <br />
                        Call: +91 7011263423 <br />
                        E-Mail: care@koovs.com</p>

                </div>
                <div className="footer-container">
                    <p>Subscribe</p>
                    <p>Enter your email below to be the first to know <br /> about new collections and product launches.</p>
                    <Stack spacing={4} mt={5}>
                        <InputGroup>
                            <InputLeftElement
                                // style={{ marginTop: "9px", marginLeft: "10px" }}
                                fontSize='20px'
                                children={<EmailIcon />}
                            />
                            <Input placeholder='Enter Your Email' style={{backgroundColor:"white"}} />
                            <InputRightElement  children={<ArrowForwardIcon color='green.500' />} />
                        </InputGroup>
                    </Stack>

                </div>
            </div>


            <div className="last-footer">
                <div style={{display:"flex",marginLeft:"30px",marginTop:"10px"}}>
                    <img style={{width:"15px",height:"15px",marginRight:"10px"}} src="./images/fbLogo.png" alt="luv" />

                    <img style={{width:"15px",height:"15px"}} src="./images/instaLogo.png" alt="luv" />

                </div>
                <div>
                    <p>© NEWBRAVE VENTURE PRIVATE LIMITED</p>

                </div>

                <div>
                    <img src="./images/cardfooter.png" alt="luv" />
                </div>

            </div>

        </div>
    )
}

export default Footer



// style={{ width: "70%", padding: "10px", paddingLeft: "40px", borderRadius: "5px", border: "none", fontSize: "17px" }}


// style={{ marginTop: "13px", marginRight: "80px" }}




