import { useState } from "react"
export default function Navbar({title}){
    const[productID,setProductID]= useState("");
    
    const getproductID = (e) => {
        setProductID(e.target.value)
        };

    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link active" href="/Productlist">Product List <span className="sr-only">(current)</span></a>
                        <a className="nav-item nav-link" href="/AddProduct">Add Product</a>                        
                    </div>
                </div>
                <form className="form-inline my-2 my-lg-0">
                    <input value={productID} onChange={getproductID} className="form-control mr-sm-2" type="number" placeholder="Product ID" aria-label="Search"></input>
                    <a className="nav-item nav-link active" href={productID > 0 ? "/OneProduct/" + productID : undefined}>Fetch Single Product</a>
                </form>
            </nav>
        </div>
    )
}