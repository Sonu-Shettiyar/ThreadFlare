import "./CSS_Files/topf.css"

function Topfooter() {
    return (
        <div className="main-div" style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",marginTop:"100px" }}>
            <div style={{ display: "flex",justifyContent:"space-around",width:"80%",margin:"auto",padding:"30px" }}>
                <div style={{ display: "flex" }}>
                    <div>
                        <img className="topfooter-img" width={"50px"} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/delivery-truck.png?v=1668332734&width=360" alt="" />
                    </div>
                    <div className="details-div">
                        <h3>Free Shipping</h3>
                        <p className="topfotter-p">For orders above INR 1500.</p>
                    </div>


                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <img className="topfooter-img" width={"50px"} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/money-back.png?v=1668332753&width=360" alt="" />
                    </div>
                    <div className="details-div">
                        <h3 style={{fontWeight:"600"}}>Money Guarantee</h3>
                        <p className="topfotter-p">Within 30 days for an exchange.</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <img className="topfooter-img" width={"50px"} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/customer-care.png?v=1668332773&width=360" alt="" />
                    </div>
                    <div className="details-div">
                        <h3>Online Support</h3>
                        <p className="topfotter-p">10 AM - 6 PM, Mon - Sat</p>
                    </div>
                </div>
                <div style={{ display: "flex" }}>
                    <div>
                        <img className="topfooter-img" width={"50px"} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/credit-card.png?v=1668332788&width=360" alt="" />
                    </div>
                    <div className="details-div">
                        <h3>Flexible Payment</h3>
                        <p className="topfotter-p">Pay with Multiple Credit Cards</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Topfooter