import { Link } from "react-router-dom"


function TopSection(){

    

    return (
        <>
        <img style={{width:"100%"}} src="./images/topSection.png" alt="luv" />
        <Link to={"/products/men"}><button style={{fontSize:"15px",padding:"8px",backgroundColor:"black",color:"white",border:"none",fontWeight:"500",borderRadius:"5px",display:"block",margin:"auto",cursor:"pointer"}}>Shop Now</button></Link>
        </>
    )
}

export default TopSection;