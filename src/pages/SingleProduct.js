import  {products} from '../ProductList';
import Product from '../Product';



const SingleProduct = () => {

  return (
  <>
  <h1  style={{display : "flex", justifyContent :"center", padding : 20, color: "black", marginTop : "5vh"}}>Product Price List</h1>
    <div className="productList-container" style={{marginTop : 50,marginBottom : 20}}>
      {products.map(
        product=>
        <Product key={product.id} productImage = {product.productImage}  productName = {product.productName} desc = {product.desc} price = {product.price} quantity = {0}/>

      )

      }
    </div>
    
    </>
  );
};
export default SingleProduct;
