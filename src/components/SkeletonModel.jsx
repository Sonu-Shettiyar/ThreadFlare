import { Box, SkeletonCircle, SkeletonText,Stack,Skeleton } from "@chakra-ui/react";
export default function SkeletonModel({ size }) {

    let arr = new Array(size).fill(0)

    return (
        arr.map((ele,ind) => {
            return (
                <Box padding='6' width={"100%"} height={"400px"} boxShadow='lg' bg='white' key={ind}>
                    <Stack>
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                        <Skeleton height='20px' />
                    </Stack>
                    
                </Box>
            )
        })
    )
}

{/* <SkeletonCircle size='10' /> */}
                    // <SkeletonText mt='4' noOfLines={4} spacing='4' skeletonHeight='2' />