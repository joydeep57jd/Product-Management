import Productlist from "./Productlist"
export default function OneProduct({productId}){
    const prodID=parseInt(productId);
    return(
        <div>
        {prodID > 0 ? <Productlist productId={productId}/> : <p>Invalid Product ID</p>}
        </div>
);
}