import { Box,Heading,Image } from "@chakra-ui/react"


function BrandSection(){

    return(
        <Box>
            <Heading size={"2xl"} fontWeight={"400"} mb={50} mt={50} textAlign={"center"}>Brands on koovs</Heading>
            <Box style={{display:"grid",gridTemplateColumns:"repeat(8,10.5%)",gap:"40px 24px",width:"90%",margin:"auto"}}>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/essentials_logo-02.jpg?v=1668331830&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/kangol_logo-01.jpg?v=1668331868&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-01.png?v=1668331907&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-02.png?v=1668331923&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Ball_logo.jpg?v=1668332152&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-04.jpg?v=1668332188&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-02.jpg?v=1668332226&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-08.jpg?v=1668332439&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-07.jpg?v=1668332432&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-09.jpg?v=1668332464&width=360"/>
                <Image src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360"/>

            </Box>
        </Box>
    )
}

export default BrandSection