import React from 'react'
import { useReducer } from 'react'

export function ReducerExample() {
    const [state, dispatch]= useReducer((state, action)=>{
        //action type
        if(action.type==="updateName"){
            return{ ...state,   name: action.value};
        }
        if(action.type==="likeButton"){
            return {...state,    btn: state.btn+1 };
        }
        if(action.type==="paas"){
            return {...state, password: action.value};
        }
    },
    {
        name: "jack",
        btn : 10,
        password: "12434"
    }
    )
  return (
    <div> <h1>reducer exapmle</h1> 
    <p>{state.name}</p>
    <p>{state.btn}</p>
    <p> {state.password} </p> 
    <input 
    type="text"
    onChange={(e)=>dispatch({type:"updateName", value: e.target.value})}

    />
    <button
    onClick={()=>dispatch({type:"likeButton"})}
    >
        Like button
    </button>
    <input
    type="text"
    onChange={(event)=>dispatch({type: "paas",value: event. target.value })}
    />
      
     


    </div>
  )
}

