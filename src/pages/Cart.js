import { useContext } from "react"
import { UpdateCartContext } from "../App"
import { formatter } from "../Utilities/CurrencyFormater"




export const Cart = (props)=>{
    const [updateCart,setUpdateCart] = useContext(UpdateCartContext)
    console.log("cart : " + JSON.stringify(updateCart))
    let productPrice = [];
    let itemPrice = 0;
    let grandTotal = 0;
    return < >
    <h1 className="d-flex justify-content-center" style={{color : "purple"}}>Cart Summary</h1>
    <span className="d-flex justify-content-between mb-2" style={{backgroundColor : "plum"}}>
                <h2 className="col-4">Product</h2>
                <h2 className="col-2">Quantity</h2>
                <h2 className="col-3">Per Item</h2>
                <h2 className="col-3">Total</h2>
                </span>
    <div className="p-2">
        {updateCart.map(
            cart =>
            <div className="row d-flex justify-content-between my-2" style={{width : "100vw"}}>
                <h4 className="col-3">{cart.product}</h4>
                <p className="col-3" style={{ textAlign : "center", justifySelf : "center" }}>{cart.quantity}</p>
                {/* <h5 className="col" >{cart.price == null ? " ": formatter.format(cart.price)}</h5> */}
                <h5 className="col">{formatter.format(cart.price)}</h5>
                <h5 className="col">{formatter.format(cart.price * cart.quantity)}</h5>
                <p style={{display : "none"}}>{productPrice.push(cart.price * cart.quantity)}</p>
            </div>
            
        )}
    </div>
   <hr></hr>
   <span>
        <h1>{formatter.format(grandTotal = productPrice.reduce(
            (accumulator,currentValue) =>accumulator + currentValue,itemPrice))
   }</h1>
    
   </span>
    </>
}