import { useContext } from "react"
import { UpdateCartContext } from "../App"
import { formatter } from "../Utilities/CurrencyFormater"
import Product from "../Product"



export const Cart = (props)=>{
    const [updateCart,setUpdateCart] = useContext(UpdateCartContext)
    console.log("cart" + {updateCart})
    let productPrice;
    const totalPrice = [];
    
    return < >
    <h1 className="d-flex justify-content-center">Cart Summary</h1>
    <span className="d-flex justify-content-between p-2">
                <h4 className="col">Product</h4>
                <h4 className="col">Quantity</h4>
                <h4 className="col">Price</h4>
                <h4 className="col">Total</h4>
                </span>
    <div className=" text-start">
        {updateCart.map(
            cart =>
            <div className="row" style={{width : "100vw"}}>
                <h5 className="col bg-success-subtle" >{cart.product}</h5>
                <p className="col" style={{Width : "5vw", textAlign : "center", justifySelf : "center" }}>{cart.quantity}</p>
                <h5 className="col">{cart.price == null ? " ": formatter.format(cart.price)}</h5>
                {totalPrice.push(productPrice = cart.price * cart.quantity)}
                <p className="col">{"price"}</p>
                
            </div>
            
        )}
    </div>
   <hr></hr>
   <span>
    {/* <h1>Total:{productPrice = isNaN ? "": productPrice} </h1> */}
    
   </span>
    </>
}