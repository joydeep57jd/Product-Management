
function ProductJson({prodjson, productId, handleRemove}){
    let singleProd=false;
    
    if (parseInt(productId)>0){
        singleProd=true;        
    }

    return (
        <tbody>
        {!singleProd ?
            prodjson.map((item,index)=>(
                <tr key={index}>
                    <td key={item.productId}>{item.productId}</td>
                    <td key={item.productId + '1'} className="col-sm-1"><img src={item.imageUrl} alt="product logo" className="img-fluid img-thumbnail"></img></td>
                    <td key={item.productId + '2'}>{item.title}</td>
                    <td key={item.productId + '3'}>{item.price}</td>
                    <td key={item.productId + '4'}>{item.category}</td>
                    <td key={item.productId + '5'}>{item.description}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                            <a className="btn btn-danger" onClick={()=>handleRemove(item.productId)}>Delete</a>
                        </div>
                    </td>   
                </tr>
                ))
        :            
                <tr key={prodjson.productId}>
                    <td>{prodjson.productId}</td>
                    <td className="col-sm-1"><img src={prodjson.imageUrl} alt="product logo" className="img-fluid img-thumbnail"></img></td>
                    <td >{prodjson.title}</td>
                    <td >{prodjson.price}</td>
                    <td >{prodjson.category}</td>
                    <td >{prodjson.description}</td>
                    <td>
                        <div className="btn-group btn-group-sm">
                            <a className="btn btn-danger" onClick={()=>handleRemove(prodjson.productId)}>Delete</a>
                        </div>
                    </td>   
            </tr>                
        }
        </tbody>
    );
}

export default ProductJson;