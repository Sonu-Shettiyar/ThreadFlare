import "./CSS_Files/womanDropdown.css"
import { Link } from "react-router-dom"

function WomanDropdown() {

    return (
        <div className="container" style={{ display: "flex", justifyContent: "space-between", fontSize: "14px", color: "rgba(0, 0, 0, 0.656)" }}>
            <div style={{ padding: "20px" }}>
                <p><Link to={"/products/women"}>Clothing</Link></p>
                <p><Link to={"/products/women"}>New in</Link></p>
                <p><Link to={"/products/women"}>View all</Link></p>
                <p><Link to={"/products/women"}>Lounge & sleep wear</Link></p>
                <p><Link to={"/products/women"}>Lingerie & innerwear</Link></p>
                <p><Link to={"/products/women/T-shirts"}>T-Shirts</Link></p>
                <p><Link to={"/products/women/sweatshirts"}>Sweatshirts</Link></p>
                <p><Link to={"/products/women/bra"}>Sports bra</Link></p>
                <p><Link to={"/products/women"}>Bodysuit</Link></p>
                <p><Link to={"/products/women"}>Outerwear</Link></p>
                <p><Link to={"/products/women"}>Jeans</Link></p>
                <p><Link to={"/products/women"}>Dress</Link></p>
                <p><Link to={"/products/women/shorts"}>Shorts</Link></p>
                <p><Link to={"/products/women"}>Pants</Link></p>
                <p><Link to={"/products/women/Legging"}>Legging</Link></p>
                <p><Link to={"/products/women"}>Socks</Link></p>

            </div>
            <div style={{ padding: "20px" }}>
                <p><Link to={"/products/women/shoes"}>Shoes</Link></p>
                <p><Link to={"/products/women/shoes"}>New in</Link></p>
                <p><Link to={"/products/women/shoes"}>View all</Link></p>
                <p><Link to={"/products/women/shoes"}>Sneakers</Link></p>
                <p><Link to={"/products/women/shoes"}>Heels</Link></p>
                <p><Link to={"/products/women/shoes"}>Sliders & flip flop</Link></p>
                <p><Link to={"/products/women/shoes"}>Boots</Link></p>

            </div>
            <div style={{ padding: "20px" }}>
                <p><Link to={"/products/women"}>Brands</Link></p>
                <p><Link to={"/products/women"}>Tigerbear</Link></p>
                <p><Link to={"/products/women"}>Bravesoul</Link></p>
                <p><Link to={"/products/women"}>Koovs sports</Link></p>
                <p><Link to={"/products/women"}>Koovs</Link></p>
                <p><Link to={"/products/women"}>Public desire</Link></p>
                <p><Link to={"/products/women"}>Keen</Link></p>
                <p><Link to={"/products/women"}>SHU</Link></p>
                <p><Link to={"/products/women"}>Arkk copenhagen</Link></p>
                <p><Link to={"/products/women"}>The couture club</Link></p>
                <p><Link to={"/products/women"}>Nike</Link></p>
                <p><Link to={"/products/women"}>BALL Copenhagen</Link></p>

            </div>
            <div style={{ padding: "20px" }}>
                <p><Link to={"/products/women/accessories"}>Accessories</Link></p>
                <p><Link to={"/products/women/accessories"}>Subglasses</Link></p>
                <p><Link to={"/products/women/accessories"}>Pins</Link></p>
                <p><Link to={"/products/women/accessories"}>Caps & Hats</Link></p>




            </div>
            <div style={{ marginRight: "-150px" }}>
                <img width={"89%"} style={{ borderRadius: "0px 5px 5px 0px", marginTop: "-9px" }} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Screenshot_2022-11-10_at_6.09.16_PM.png?v=1668083985&width=533" alt="" />

            </div>

        </div>
    )
}

export default WomanDropdown;