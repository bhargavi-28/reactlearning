import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
 
//to map the products from productlist 

export function Productdetails({ product_list }) {
  const { id } = useParams();
  const product = product_list[id];
  console.log(product_list[id]);
  const navigate = useNavigate()
  return (
    // <div>
    //   product details page - {product.name} - {id}
    // </div>
    <div className="product-container">
      {/* <img className="pro-poster" src={product.poster} /> */}
       <p>{product.video}</p>
      <div className="pro-spec">

        <h2 className="pro-name"> {product.name} ({id})</h2>
        <h5  className="pro-rating"> ⭐{product.rating}</h5>
      </div>

      
      <p  className="pro-dicrip">{product.dicrip}</p>
      <p className="pro-price">{product.price}</p>
      <p className="pro-electonics">{product.electonics}</p>

      <p className="pro-category">{product.category}</p>
      {/* <div className="button"><Buttonfun /></div> */}
      <Button variant="contained" endIcon={<SendIcon />} 
      onClick={()=>{
         navigate(-1)
      }}
      >
        BACK
      </Button>
    </div>
  );
}
