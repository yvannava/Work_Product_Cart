import {ShoppingBag } from "lucide-react"
import { Link, Outlet} from "react-router-dom"
import { useContext } from "react"
import { QuantityContext } from "./App"


export const Navbar = ()=>{
   const [quantity,setQuantity] = useContext(QuantityContext);

    return <>
    <div className='shadow-sm m-3 bg-white' style={{display : "flex", justifyContent : "space-between" , alignItems : "center", top : 0, position : "sticky", zIndex : 10} }>
        <ul style={{display : 'flex' , justifyContent : "center",gap : 50, padding : 10,listStyle : "none" , fontSize : "1.25rem" , textDecoration : "none", alignItems : "center"}}>
      <li>
        <Link to="" style={{textDecoration : "none", color : "black"}}>Home</Link>
      </li>
            <li>
                <Link to="singleProduct" style={{textDecoration : "none", color : "black"}}>Single Products</Link>
            </li>
            <li>
                <Link to="bundles" style={{textDecoration : "none", color : "black"}}>Bundles</Link>
            </li>
        </ul>
    <div >
    <Link to="cart" style={{ color : "black"}}><ShoppingBag style={{WebkitTransform : "Scale(1.25)", marginRight : 20}}/></Link>
    <p className="bg-success-subtle" style={{position : "absolute" , borderRadius : "50%", height : 25,color: "green", width : 25, right : 10,top : 35 ,verticalAlign : "middle", textAlign : "center"}} >
        {quantity}</p>
    </div>
    </div>
    <Outlet/>
    </>
}