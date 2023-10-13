import "./App.css";
import { useState } from "react";

export default function App() {
  //js starts
  const name1 = "bhargavi";
  const wel = "welcome";
  const person= ["naruto","itadori", "luffy"];
  const picture= [
    {
      dp:"https://imgix.ranker.com/list_img_v2/18411/518411/original/my-top-10-favorite-anime-characters-u2",
        name:"uzcumaki naruto",
    },
    {
      dp:"https://i.pinimg.com/1200x/3f/f3/84/3ff3847f6487e15456dcf52d2f3dcbfe.jpg",
        name:"itadori yuji"
    },
    {
      dp:"https://m.media-amazon.com/images/I/71azOmQbOYL.jpg",
        name:"luffy "
    }
  ]
  //js ends
  //jsx starts
  return (
    <div className="App">
      <h1>Hello {name1}</h1>
      <h2> {wel} Start !</h2>
      {/* <Welcome n=" naruto" />
      <Welcome n="itadori " />
      <Welcome n="luffy " /> */}

      {/* in the above lines we called welcome each times, 
      instead we can use loop using map funtion */}
     
     { person.map((names) =>(
      <Welcome n={names} />
     ))}

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

      {picture.map((pics)=>(
        <Profile dp={pics.dp}
        name={pics.name}/>
      ))}
      <Buttonfun/>
      <Dislike/>
    </div>
  );
  //jsx ends
}
function Profile({ dp, name }) {
  return (
    <div>
      <h1> this is second custom component </h1>
      <h2> {name} </h2>
      <img className="profilepic" src={dp} alt="no dp" />
    </div>
  );
}
function Welcome({ n }) {
  //this is a custom fuction,
  //should alsways start with capital,
  //return only one jsx ie, only one div or <>
  return (
    // <> or simply use <> so that node is created
    <div className="welc">
      {/* <h1> this is welcome component </h1> */}
      <h2> hi {n} </h2>
    </div>
  );
}
function Buttonfun()
{
  
  // return(
  //   <> <button
  //        onClick={() => {
  //         like++;
  //         console.log(like);
  //        }}> like</button>
  //   <p>{like}</p>
  //   </>
  // )
 //using hook statment to create a event cuz in the above
 // like is not getting incremented in the ui
 const [like, setLike]= useState(1);
 return(
  <>
  <button
  onClick={()=>{
    setLike(like+1);
    console.log(like);
  }}> like

  </button>
  <p>{like}</p>
   </>
  
 )
}

function Dislike()
{
  const [dis, setDis]= useState(10);
  return(
    <>
  <button
  onClick={()=>{
    setDis(dis+1);
    console.log(dis);
  }}> 👎 {dis}

  </button>
  
   </>
  
  )

}
//app-> core cpmponent
// root-> elemnt
//JSX-> javascript XML-> new syntax looks like html css
//will be converted into js
//{}
