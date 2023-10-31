import React, { useState } from 'react'

export function Tictaktoe() {
  const [board, setBoard]= useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ] ) ;
  return (
    <div className="fullgame">
      <h1>Tictaktoe </h1>
      {board.map((val, index)=>(
        <GameBox val= {val} />
      ))}
    
    </div>
  )
}
 function GameBox({val}){
  return

 }