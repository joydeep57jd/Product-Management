import Navbar from './components/Navbar';
import Productlist from './components/Product/Productlist';
import OneProduct from './components/Product/OneProduct.jsx';
import AddProduct from './components/AddProduct/AddProduct.jsx';
import {useLocation} from 'react-router-dom';
import './App.css';

function App() {
  let location = useLocation();
  const urlPath= location.pathname;
  const productId=parseInt(location.pathname.split("/")[2]);
  let productValid=false;
  if(urlPath.indexOf("OneProduct")>=0 && productId>0){
    productValid=true;
  }
  
  return (
    <div className="App">
      <Navbar title="Product Management"/>
        {urlPath.indexOf("Productlist")>=0 && <Productlist productId="0"/>}
        {productValid && <OneProduct productId={productId} />}
        {urlPath.indexOf("AddProduct")>=0 && <AddProduct />}
    </div>
  );
}

export default App;
