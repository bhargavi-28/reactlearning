import { Addcolor } from "./Addcolor";
import "./App.css";
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { ProductList } from "./ProductList.1";
import { Profilemembers } from "./Profilemembers";
import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { NotFoundpage } from "./NotFoundpage";
import { Productdetails } from "./Productdetails";
import { Addproducts } from "./Addproducts";
import { ReducerExample } from "./reducer";
import { Home } from "./Home";
import { Tictaktoe } from "./Tictaktoe";

// import { Addpro, Addproduct } from "./Addproduct";
export const PRO_LIST = [
  {
    name: "iphone14",
    price: "1,40,500",
    poster: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
    category: "electonics",
    rating: "5",
    dicrip: "product discription bla..blaaaaa",
    video: <iframe width="634" height="351" src="https://www.youtube.com/embed/FT3ODSg1GFE" title="Introducing iPhone 14 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

  },
  {
    name: "onePlus",
    price: "85,500",
    poster: "https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg",
    category: "electonics",
    rating: "7",
    dicrip: "product discription bla..blaaaaa",
    //video: 

  },
  {
    name: "samsung",
    price: "1,42,000",
    poster: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg",
    category: "electonics",
    rating: "9",
    dicrip: "product discription bla..blaaaaa",
    //video: 

  },
  {
    name: "tablet",
    price: "40,500",
    poster: "https://m.media-amazon.com/images/I/31dOJd9unDS._SY300_SX300_QL70_FMwebp_.jpg",
    category: "electonics",
    rating: "8.5",
    dicrip: "product discription bla..blaaaaa",
    //video:

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

          <Toolbar  >
            <Button color="inherit" onClick={() => navigate("/")}>
              Home
            </Button>
            {/* <Button color="inherit" onClick={() => navigate("/products")}>
              ProductList
            </Button>
            <Button color="inherit" onClick={() => navigate("/products/add")}>
              Add new products
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
            <Button color="inherit" onClick={() => navigate("/context")}>
              context
            </Button>
            
            <Button color="inherit" onClick={() => navigate("/reducer")}>
              reducer example
            </Button>
            <Button color="inherit" onClick={() => navigate("/tictaktoe")}>
            tictaktoe
            </Button>
            <Button 
              startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  // to change icon of dark to light theme 
              color="inherit" onClick={() => setmode(mode === "light" ? "dark" : "light")}>
              light mode
            </Button> */}

          </Toolbar>
        </AppBar>
        {/* nav  */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
  {/* //jsx ends */ }
}



