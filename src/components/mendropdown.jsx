import "./CSS_Files/menDropdown.css"
import { Navigate,Link } from "react-router-dom";


function Dropdown(){

    const handletoProduct=()=>{
        
    }

    return(
        <div  className="container" style={{display:"flex",justifyContent:"space-between",fontSize:"14px",color:"rgba(0, 0, 0, 0.656)"}}>
            <div style={{padding:"20px"}}>
                <p>Clothing</p>
                <p><Link to={"/products/men"}>New in</Link></p>
                 <p><Link to={"/products/men"}>View all</Link></p>
                <p><Link to={"/products/men"}>T-Shirt</Link></p>
                <p><Link to={"/products/men"}>jackets & Coats</Link></p>
                <p><Link to={"/products/men"}>Hoodies & Sweatshirts</Link></p>
                <p><Link to={"/products/men"}>Sweatpants</Link></p>
                <p><Link to={"/products/men"}>Shorts</Link></p>
                <p><Link to={"/products/men"}>Co-ord sets</Link></p>

            </div>
            <div style={{padding:"20px"}}>
                <p><Link to={"/products/men/footwear"}>Footwear</Link></p>
                <p><Link to={"/products/men/footwear"}>View all</Link></p>
                <p><Link to={"/products/men/footwear"}>Sneakers</Link></p>
                <p><Link to={"/products/men/footwear"}>Slides</Link></p>

            </div>
            <div style={{padding:"20px"}}>
                <p><Link to={"/products/men/accessories"}>Accessories</Link></p>
                <p><Link to={"/products/men/accessories"}>Sunglasses</Link></p>
                <p><Link to={"/products/men/accessories"}>Caps & Hats</Link></p>
                <p><Link to={"/products/men/accessories"}>Pins</Link></p>
                

            </div>
            <div style={{padding:"20px"}}>
                <p><Link to={"/products/men"}>Brands</Link></p>
                <p><Link to={"/products/men"}>Essentials by koovs</Link></p>
                <p><Link to={"/products/men"}>BALL Copenhagen</Link></p>
                <p><Link to={"/products/men"}>Bravesoul</Link></p>
                <p><Link to={"/products/men"}>The couture club</Link></p>
                <p><Link to={"/products/men"}>Arkk copenhagen</Link></p>
                <p><Link to={"/products/men"}>SHU</Link></p>
                <p><Link to={"/products/men"}>Nike</Link></p>
                <p><Link to={"/products/men"}>Tigerbear</Link></p>
                <p><Link to={"/products/men"}>Keen</Link></p>
                <p><Link to={"/products/men"}>5ive</Link></p>
                <p><Link to={"/products/men"}>Kangol</Link></p>
                <p><Link to={"/products/men"}>Comatoes</Link></p>
                <p><Link to={"/products/men"}>Garcon</Link></p>

            </div>
            <div style={{marginRight:"-150px"}}>
                <img style={{borderRadius:"0px 5px 5px 0px",width:"90%",marginTop:"-8px"}} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Screenshot_2022-11-10_at_5.37.53_PM.png?v=1668083230&width=533" alt="" />

            </div>
            
        </div>
    )
}

export default Dropdown;