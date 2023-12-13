import { Box, Image, Heading, Text, Card } from "@chakra-ui/react"
import { Link } from "react-router-dom"

function CardCreation({ props, size }) {




    return (
        <Link to={`/product/${props.id}`}>
            <Box cursor={"pointer"} _hover={{ width: "97%" }}>
                <Card maxW='sm' fontSize={"13.5px"} borderRadius={"0px"} boxShadow="none">
                    <Image
                        className="image"
                        src={!props.image1?"https://cdn.shopify.com/s/files/1/0677/1464/6315/products/KOOVS_20OCT22-0303.jpg?v=1677070412&amp;width=360":props.image1}
                        height={size==5?"350px":"450px"}

                    />
                    <Box p={4}>
                        <Text color={"rgba(0, 0, 0, 0.567)"}>{props.brand}</Text>
                        <Text fontWeight={500} mt={1}>{props.info}</Text>
                        <Box style={{ display: "flex", justifyContent: "space-between", width: size == 5 ? "100%" : "60%" }} mt={1} fontSize={"15px"}>

                            <Text>Rs. {props.oprice}.00</Text>
                            <Text textDecoration={"line-through"}>Rs. {props.price}.00</Text>
                        </Box>


                    </Box>
                </Card>

            </Box>
        </Link>
    )
}

export default CardCreation