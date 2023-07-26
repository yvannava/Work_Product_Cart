import { useContext } from "react"
import { UpdateCartContext } from "../App"
import { formatter } from "../Utilities/CurrencyFormater"
import Product from "../Product"

export const Cart = ()=>{
    const [updateCart,setUpdateCart] = useContext(UpdateCartContext)
    console.log("cart" + {updateCart})
    let productPrice;
    const totalPrice = [];
    console.log(totalPrice)
    return < >
    <h1 className="d-flex justify-content-center">Cart Summary</h1>
    <span className="d-flex justify-content-between">
                <h4>Product</h4>
                <p>Quantity</p>
                <h5>Price</h5>
                <p>Total</p>
                </span>
    <div className="container text-align-justify">
        {updateCart.map(
            cart =>
            <div className="d-flex justify-content-between" >
                <h4>{cart.product}</h4>
                <p className="align-self-center">{cart.quantity}</p>
                <h5>{cart.price == null ? " ": formatter.format(cart.price)}</h5>
                {totalPrice.push(productPrice = cart.price * cart.quantity)}
                <p>{"null"}</p>
            </div>
            
        )}
    </div>
   <hr></hr>
   <span>
    <h1>Total:{productPrice = isNaN ? "": productPrice} </h1>
    
   </span>
    </>
}