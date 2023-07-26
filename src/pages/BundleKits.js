import { bundles} from '../BundlesList';
import Bundles from '../Bundles'

const BundleKits = () =>{
return <>
      <h1  style={{display : "flex", justifyContent :"center", padding : 20, color: "black", marginTop : "5vh"}}>Care Product Bundles</h1>
    
        <div className='grid'>
            {bundles.map(
                bundle => <Bundles key = {bundle.id} productName = {bundle.productName} desc = {bundle.desc} price = {bundle.price} cardQuantity ={0}/>
            )}
     
   </div>
</>
}
export default BundleKits;