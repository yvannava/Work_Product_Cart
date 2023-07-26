
import "bootstrap/dist/css/bootstrap.min.css";
import './Product.css'
import { Navbar } from "./Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import SingleProduct from "./pages/SingleProduct";
import {Cart} from "./pages/Cart";
import BundleKits from "./pages/BundleKits";
import { createContext, useState } from "react";

export const QuantityContext = createContext();
export const UpdateCartContext = createContext();
function App() {
  const [quantity,setQuantity] = useState(0);
  const [updateCart,setUpdateCart] = useState([{}])
  return (
  <div className="App bg-light">
<UpdateCartContext.Provider value={[updateCart,setUpdateCart]}> 
    <QuantityContext.Provider value={[quantity,setQuantity]}>
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route path="singleProduct" element={<SingleProduct/>}/>
        <Route path="bundles" element={<BundleKits/>}/>
        <Route path="cart" element= {<Cart/>} > </Route>
        </Route>
      </Routes>
      </BrowserRouter>
     
      </QuantityContext.Provider> </UpdateCartContext.Provider>
    </div>
    
  );
}

export default App;
