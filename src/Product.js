import { useContext, useState } from "react";
import "./Product.css";
import { QuantityContext, UpdateCartContext } from "./App";
import {formatter} from './Utilities/CurrencyFormater'

 
 const Product = (props) => {
  const [quantity,setQuantity] = useContext(QuantityContext);
  const [cardQuantity,setCardQuantity] = useState(0)
  const [updateCart,setUpdateCart] = useContext(UpdateCartContext)
  const incrementBoth =()=>{
    setCardQuantity(cardQuantity + 1);
    setQuantity(quantity + 1);
  }
let id =0;
  const decrementBoth =()=>{
    setCardQuantity(cardQuantity - 1);
    setQuantity(cardQuantity == 0 ? quantity - 0 :quantity - 1);
  }

 
  const addTo=()=>{
    let len = updateCart.length;
    if(cardQuantity > 0){
   setUpdateCart([...updateCart, {product : props.productName, quantity : cardQuantity, price : props.price}])
    }else{
       console.log(props.productName + " quantity is 0")
    }
  }
  

  return (
    <>
 
  <div class="card mb-2">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={props.productImage} class="img-fluid rounded-start" alt="..." style={{marginLeft : 50}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h3 class="card-title text-primary text-uppercase">{props.productName}</h3>
        <p class="card-text">{props.desc}</p>
        <h3 class = "card-text">{formatter.format(props.price)}</h3>
        <div className="d-flex align-items-center" id="counter">
    <button className="bg-danger-subtle " style={{border: "none", outline : "none", width : 50}} onClick={()=>decrementBoth()}>-</button>
    <p className="m-3 outline-black">{cardQuantity < 0 ? setCardQuantity(0) : cardQuantity}</p>
    <button className="bg-success-subtle" style={{border: "none", outline : "none", width : 50}} onClick={()=>incrementBoth()}>+</button>
    </div>

        <button type="button" class="btn btn-success" onClick ={()=>addTo()}>Add to cart</button>
      
      </div>
    </div>
  </div>
</div>

    </>
  );
};
export default Product;

