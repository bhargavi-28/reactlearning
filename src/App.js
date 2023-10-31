import { Addcolor } from "./Addcolor";
import "./App.css";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
import { ProductList } from "./ProductList";
import { Profilemembers } from "./Profilemembers";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// import { Addpro, Addproduct } from "./Addproduct";
export const PRO_LIST = [
  {
    name: "iphone14",
    price: "1,40,500",
    poster: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
    category: "electonics",
    rating: "5",
    dicrip: "product discription bla..blaaaaa"

  },
  {
    name: "onePlus",
    price: "85,500",
    poster: "https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg",
    category: "electonics",
    rating: "7",
    dicrip: "product discription bla..blaaaaa"

  },
  {
    name: "samsung",
    price: "1,42,000",
    poster: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg",
    category: "electonics",
    rating: "9",
    dicrip: "product discription bla..blaaaaa"

  },
  {
    name: "tablet",
    price: "40,500",
    poster: "https://m.media-amazon.com/images/I/31dOJd9unDS._SY300_SX300_QL70_FMwebp_.jpg",
    category: "electonics",
    rating: "8.5",
    dicrip: "product discription bla..blaaaaa"

  }
]

export default function App() {
  // is the parent 
  //-----js starts------
  const [product_list, setproList] = useState(PRO_LIST)
  const [mode, setmode] = useState("light")
  //the above process is called lifting the state up or lifted from child to parent

  const theme = createTheme({     //------step 1) creating the context
    palette: {
      mode: mode,  //"light"= light theme, "dark" = dark theme
    },
  });


  const navigate = useNavigate();
  //--------js ends--------
  //---------jsx starts--------

  return (
    <ThemeProvider theme={theme}>
      {/* ------step 2) publisher=> provider=> context. provider */}
      <CssBaseline />
      <div className="App">
        <AppBar position="static">
        </AppBar>
        <Toolbar style={{ background: "aqua" }} >
          <Button color="inherit" onClick={() => navigate("/")}>
            Home
          </Button>
          <Button color="inherit" onClick={() => navigate("/products")}>
            ProductList
          </Button>
          <Button color="inherit" onClick={() => navigate("/colorBox")}>
            Addcolor
          </Button>
          <Button color="inherit" onClick={() => navigate("/productAppMembers")}>
            Profilemembers
          </Button>
          <Button color="inherit" onClick={() => navigate("/blabla")}>
            End
          </Button>
          <Button
            startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  // to change icon of dark to light theme 
            color="inherit" onClick={() => setmode(mode === "light" ? "dark" : "light")}>
            light mode
          </Button>

        </Toolbar>
        <>
          {/* <nav>
         ------ navigation in the web page/app
          -------we prefer <Link to> tag over <a> cuz it chamges the page without reloading or refresh
          <ul>
            <li>
              <Link to="/">Home</Link> ------or  <a href="/">Home</a>
            </li>
            <li>
              <Link to="/products">ProductList</Link>--------- or <a href="/products">ProductList</a>
            </li>
            <li>
              <Link to="/colorBox">Addcolor</Link> ----or <a href="/colorBox">Addcolor</a>
            </li>
            <li>
              <Link to="/productAppMembers">Profilemembers</Link> ----- or <a href="/productAppMembers">Profilemembers</a>
            </li>
            <li>

              <Link to="/blabla">End</Link>
            </li>
           
          </ul>
        </nav> */}</>
        <Routes>


          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList product_list={product_list} setproList={setproList} />} />
          <Route path="/colorBox" element={<Addcolor />} />
          <Route path="/productAppMembers" element={<Profilemembers />} />
          <Route path="/products/:id" element={<Productdetails product_list={product_list} setproList={setproList} />} />

          <Route path="*" element={<NotFoundpage />} />
          {/* <Route path= "/addproduct" element={<Addproduct/>}/> */}
        </Routes>
        <div>
          {/* <h1>Hello {name1}</h1>
      <h2> {wel} Start !</h2> */}
          {/* <Welcome n=" naruto" />
      <Welcome n="itadori " />
      <Welcome n="luffy " /> */}

          {/* in the above lines we called welcome each times, 
      instead we can use loop using map funtion */}
          {/* ---------------------------------- */}
          {/* { person.map((names) =>(
      <Welcome n={names} />
     ))} */}

          {/* // compenent one over  */}


          {/* <Profile
        dp="https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2"
        name="uzcumaki naruto"
      />
      <Profile
        dp="https://i.pinimg.com/1200x/3f/f3/84/3ff3847f6487e15456dcf52d2f3dcbfe.jpg"
        name="itadori yuji"
      />
      <Profile
        dp="https://m.media-amazon.com/images/I/71azOmQbOYL.jpg"
        name="luffy "
      /> */}
          {/* instead of above lines use looping by mapping */}

          {/* {picture.map((pics)=>(
        <Profile dp={pics.dp}
        name={pics.name}/>
      ))} */}
          {/* <Buttonfun/> */}
          {/* <Addcolor /> */}
          {/* <ColorBoxs/> */}


        </div >
      </div>
    </ThemeProvider>
  );
  {/* //jsx ends */ }
}


function Home() {
  return (
  <><h1>welcome to product app</h1>
  <h2>now you are in the home page, please click on the above toolbar button to navigate though the desired pages  </h2></>

)}
function NotFoundpage() {
  return (
    <>
      <img style={{ height: "500px", display: "block", margin: "auto", }} src="https://www.shutterstock.com/image-vector/404-error-web-page-template-260nw-2170259451.jpg"
      />
    </>
  )

}
function Productdetails({ product_list }) {
  const { id } = useParams();
  const product = product_list[id];
  console.log(product_list[id]);
  return (
    <div>
      product details page - {product.name} - {id}
    </div>
  )
}
