import { PRO_LIST } from "./App";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import { ProductList } from "./ProductList.1";
import { Navigate, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// here 2 aaction->
// add new product
// mapping the products from the existing list and new add - in second div

export function Addproducts({ product_list, setproList }) {
  // const product_list = PRO_LIST;
  //const [product_list, setproList] = useState(PRO_LIST) //lifted to parent from child hence commented
  const [name, setname] = useState("");
  const [price, setprice] = useState("");
  const [poster, setposter] = useState("");
  const [category, setcat] = useState("");
  const [rating, setrating] = useState("");
  const [discrip, setdiscrip] = useState("");
  const navigate = useNavigate();
  return (
    <div>
      {/* <TextField id="outlined-basic" label="name" variant="outlined" /> */}

      <div className="newproduct">
        <TextField label="name" variant="outlined"
          onChange={(event) => setname(event.target.value)}
          value={name}
        />
        <TextField label="price" variant="outlined"
          onChange={(event) => setprice(event.target.value)}
          value={price}
        />
        <TextField label="poster" variant="outlined"
          onChange={(event) => setposter(event.target.value)}
          value={poster}
        />
        <TextField label="cat" variant="outlined"
          onChange={(event) => setcat(event.target.value)}
          value={category}
        />
        <TextField label="rating" variant="outlined"

          onChange={(event) => setrating(event.target.value)}
          value={rating}
        />
        <TextField label="dis" variant="outlined"
          onChange={(event) => (setdiscrip(event.target.value))}
          value={discrip}
        />
      </div>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon/>} 
        onClick={() => {
          const newpro = {
            //  name:name,
            //  price:price,
            //  poster:poster,
            //  category: cat,
            //  rating:rating,
            //  discrip:dicrip
            //instead of above we can use object shorthand as both key value are same
            name,
            price,
            poster,
            category,
            rating,
            discrip
          };
          setproList([...product_list, newpro]);
          navigate("/products")
        }}
        
        
        > add product
        
        </Button>


    </div >

    // {/* product mapping done in product list  component*/ } 
    
  )
}


