
import React from 'react';
import { useState, useEffect  } from 'react';
import ProductJson from './ProductJson';
import { useNavigate }  from 'react-router-dom'

export default function Productlist({productId}){ 
    const[Data,setData]= useState([]);
    const[validData,setValidData]= useState(true);
    var navigate=useNavigate();

    var url='https://localhost:44391/api/Product/GetAllProducts' //'https://fakestoreapi.com/products';
    if(parseInt(productId)>0){
        url='https://localhost:44391/api/Product/GetProductById?id=' + productId;
    }
    function getProdJson(){
       fetch(url)
            .then(response => response.json()) //setting the response in our data object
            .then(data => setData(data))         
            .catch(err => setValidData(false))
    }
     useEffect(()=>{
        getProdJson();
     },[]);
     
     function handleProductDelete(productId){
        if(parseInt(productId)>0){
            url='https://localhost:44391/api/Product/RemoveProductById?id=' + productId;
            fetch(url,{
                    method:"DELETE"
            })
            .then(response => response.json())
            .then(data => {
                if(data){
                    window.location.reload();
                }
            })     
            .catch(err => setValidData(false))
        }
     }

    return(
        <div>
            {validData ?
                <table id="tblProductList" className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">ID</th>
                        <th scope="col">image</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Category</th>
                        <th scope="col">Description</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <ProductJson prodjson={Data} productId={productId} handleRemove={handleProductDelete}/>
                    
                </table>
            :
                <div class="alert alert-danger" role="alert">
                    No product found
                </div>
}
        </div>
    );
};