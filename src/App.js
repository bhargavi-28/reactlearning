
import React from 'react'

function App() {
  return (
    <div>App</div>
  )
}

export default App

// import { Addcolor } from "./Addcolor";
// import "./App.css";
// import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
// import { ProductList } from "./ProductList.1";
// import { Profilemembers } from "./Profilemembers";
// import { useState } from "react";
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Button from '@mui/material/Button';
// import Brightness4Icon from '@mui/icons-material/Brightness4';
// import Brightness7Icon from '@mui/icons-material/Brightness7';
// import { NotFoundpage } from "./NotFoundpage";
// import { Productdetails } from "./Productdetails";
// import { Addproducts } from "./Addproducts";
// import { ReducerExample } from "./reducer";
// import { Home } from "./Home";
// import { Tictaktoe } from "./Tictaktoe";

// // import { Addpro, Addproduct } from "./Addproduct";
// export const PRO_LIST = [
//   {
//     name: "iphone14",
//     price: "1,40,500",
//     poster: "https://m.media-amazon.com/images/I/71xb2xkN5qL._SX679_.jpg",
//     category: "electonics",
//     rating: "5",
//     dicrip: "product discription bla..blaaaaa",
//     video: <iframe width="634" height="351" src="https://www.youtube.com/embed/FT3ODSg1GFE" title="Introducing iPhone 14 Pro | Apple" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

//   },
//   {
//     name: "onePlus",
//     price: "85,500",
//     poster: "https://m.media-amazon.com/images/I/613SAOPmLeL._SX679_.jpg",
//     category: "electonics",
//     rating: "7",
//     dicrip: "product discription bla..blaaaaa",
//     //video: 

//   },
//   {
//     name: "samsung",
//     price: "1,42,000",
//     poster: "https://m.media-amazon.com/images/I/71J8tz0UeJL._SX679_.jpg",
//     category: "electonics",
//     rating: "9",
//     dicrip: "product discription bla..blaaaaa",
//     //video: 

//   },
//   {
//     name: "tablet",
//     price: "40,500",
//     poster: "https://m.media-amazon.com/images/I/31dOJd9unDS._SY300_SX300_QL70_FMwebp_.jpg",
//     category: "electonics",
//     rating: "8.5",
//     dicrip: "product discription bla..blaaaaa",
//     //video:

//   }
// ]

// export default function App() {
//   // is the parent 
//   //-----js starts------
//   const [product_list, setproList] = useState(PRO_LIST)
//   const [mode, setmode] = useState("light")
//   //the above process is called lifting the state up or lifted from child to parent

//   const theme = createTheme({     //------step 1) creating the context
//     palette: {
//       mode: mode,  //"light"= light theme, "dark" = dark theme
//     },
//   });


//   const navigate = useNavigate();
//   //--------js ends--------
//   //---------jsx starts--------

//   return (
//     <ThemeProvider theme={theme}>
//       {/* ------step 2) publisher=> provider=> context. provider */}
//       <CssBaseline />
//       <div className="App">
//         <AppBar position="static">

//           <Toolbar  >
//             <Button color="inherit" onClick={() => navigate("/")}>
//               Home
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/products")}>
//               ProductList
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/products/add")}>
//               Add new products
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/colorBox")}>
//               Addcolor
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/productAppMembers")}>
//               Profilemembers
//             </Button>

//             <Button color="inherit" onClick={() => navigate("/blabla")}>
//               End
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/context")}>
//               context
//             </Button>
            
//             <Button color="inherit" onClick={() => navigate("/reducer")}>
//               reducer example
//             </Button>
//             <Button color="inherit" onClick={() => navigate("/tictaktoe")}>
//             tictaktoe
//             </Button>
//             <Button 
//               startIcon={mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}  // to change icon of dark to light theme 
//               color="inherit" onClick={() => setmode(mode === "light" ? "dark" : "light")}>
//               light mode
//             </Button>

//           </Toolbar>
//         </AppBar>
//         <>
//           {/* <nav>
//          ------ navigation in the web page/app
//           -------we prefer <Link to> tag over <a> cuz it chamges the page without reloading or refresh
//           <ul>
//             <li>
//               <Link to="/">Home</Link> ------or  <a href="/">Home</a>
//             </li>
//             <li>
//               <Link to="/products">ProductList</Link>--------- or <a href="/products">ProductList</a>
//             </li>
//             <li>
//               <Link to="/colorBox">Addcolor</Link> ----or <a href="/colorBox">Addcolor</a>
//             </li>
//             <li>
//               <Link to="/productAppMembers">Profilemembers</Link> ----- or <a href="/productAppMembers">Profilemembers</a>
//             </li>
//             <li>

//               <Link to="/blabla">End</Link>
//             </li>
           
//           </ul>
//         </nav> */}</>
//         <Routes>


//           <Route path="/" element={<Home />} />
//           <Route path="/products" element={<ProductList product_list={product_list} setproList={setproList} />} />
//           <Route path="/colorBox" element={<Addcolor />} />
//           <Route path="/productAppMembers" element={<Profilemembers />} />
//           <Route path="/products/:id" element={<Productdetails product_list={product_list} setproList={setproList} />} />
//           {/* the above root path is for showing info of one product */}
//           <Route path="/products/add" element={<Addproducts product_list={product_list} setproList={setproList} />} />

//           {/* <Route path="*" element={<NotFoundpage />} /> 
//           the above doesnt show 404 in the url*/}
//           <Route path="/404" element={<NotFoundpage />} />
//           <Route path="*" element={<Navigate replace to="/404" />} />
//           {/* doing the above 2 lines will show 404 in the url */}


//           {/* <Route path= "/addproduct" element={<Addproduct/>}/> */}

//           {/* below lets learn redirecting routes => product name is changed to item according market treand
//         hence we redirect item to product list page */}
//           <Route path="/items" element={<Navigate replace to="/products" />} />

//           {/* or we can write <Route path="/items" element={<ProductList product_list={product_list} setproList={setproList} />} /> */}
//           {/* <Route path="/context" element={<ExampleContext/>} /> */}
//           <Route path="/reducer" element={<ReducerExample />} />
//           <Route path="/tictaktoe" element={<Tictaktoe />} />


//         </Routes>
//         <div>
//           {/* <h1>Hello {name1}</h1>
//       <h2> {wel} Start !</h2> */}
//           {/* <Welcome n=" naruto" />
//       <Welcome n="itadori " />
//       <Welcome n="luffy " /> */}

//           {/* in the above lines we called welcome each times, 
//       instead we can use loop using map funtion */}
//           {/* ---------------------------------- */}
//           {/* { person.map((names) =>(
//       <Welcome n={names} />
//      ))} */}

//           {/* // compenent one over  */}


//           {/* <Profile
//         dp="https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2"
//         name="uzcumaki naruto"
//       />
//       <Profile
//         dp="https://i.pinimg.com/1200x/3f/f3/84/3ff3847f6487e15456dcf52d2f3dcbfe.jpg"
//         name="itadori yuji"
//       />
//       <Profile
//         dp="https://m.media-amazon.com/images/I/71azOmQbOYL.jpg"
//         name="luffy "
//       /> */}
//           {/* instead of above lines use looping by mapping */}

//           {/* {picture.map((pics)=>(
//         <Profile dp={pics.dp}
//         name={pics.name}/>
//       ))} */}
//           {/* <Buttonfun/> */}
//           {/* <Addcolor /> */}
//           {/* <ColorBoxs/> */}


//         </div >
//       </div>
//     </ThemeProvider>
//   );
//   {/* //jsx ends */ }
// }



