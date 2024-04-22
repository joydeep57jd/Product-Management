import { useState } from "react";
import { useNavigate }  from 'react-router-dom'
import './AddProduct.css'

export default function AddProduct(){ 
    const[inputData,setInputData]=useState();
    const[inputImage,setInputImage]=useState('');
    const navigate = useNavigate();
    
    
    function handleImage(e){        
        const imageurl=URL.createObjectURL(e.target.files[0]);
        console.log(imageurl);
        setInputImage(imageurl);  
    };

    function handleChange  (e)  {
        const { name, value } = e.target;
        setInputData((prevInputData) => ({
          ...prevInputData,
          [name]: value,
        }));
    };

      function handleSubmit (e) {
        e.preventDefault();
         let productInfo={     
                             ProductId: inputData.productId,
                             Title: inputData.prodTitle,
                             ImageUrl: inputImage,
                             Category: inputData.prodCat,
                             Price: inputData.prodPrice,
                             Description: inputData.prodDesc
                         };
         fetch('https://localhost:44391/api/Product/AddProduct',{
              method:"POST",
              headers: {'Content-Type':'application/json'},
              body: JSON.stringify(productInfo),
         })
             .then(res=>res.json())
             .then(json=>console.log(json))

            navigate('/Productlist',{ replace: true });
     } 

    return(
        <form onSubmit={handleSubmit} className="h-100 h-custom gradient-custom-2">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                        <div className="card card-registration card-registration-2">
                            <div className="card-body p-0">
                                <div className="row g-0">
                                    
                                    <div className="col-lg-12 bg-indigo text-white">
                                        <div className="p-3">
                                            <h3 className="fw-normal mb-3">Add Product</h3>
                                            <div className="row">
                                                <div className="col-md-6 mb-2 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" name="prodTitle" className="form-control form-control-lg" onChange={handleChange} required/>
                                                        <label className="form-label" >Product Title</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-2 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="file" name="prodImg" className="form-control" onChange={handleImage} required />
                                                        <label className="form-label">Product Image Url</label>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="row">
                                                <div className="col-md-6 mb-2 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" name="prodCat" className="form-control form-control-lg" onChange={handleChange} required />
                                                        <label className="form-label" >Product Category</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-2 pb-2">
                                                    <div data-mdb-input-init className="form-outline">
                                                        <input type="text" name="prodPrice" className="form-control form-control-lg" onChange={handleChange} required />
                                                        <label className="form-label">Product Price</label>
                                                    </div>
                                                </div>
                                            </div> 

                                            <div className="mb-2 pb-2">
                                                <div data-mdb-input-init className="form-outline form-white">
                                                <textarea type="text" name="prodDesc" className="form-control form-control-lg" onChange={handleChange} required />
                                                <label className="form-label">Product Description</label>
                                                </div>
                                            </div>

                  <button type="submit" data-mdb-button-init data-mdb-ripple-init className="btn btn-light btn-lg"
                    data-mdb-ripple-color="dark">Add Product</button>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</form>
    )
}