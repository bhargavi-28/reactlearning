import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
export function Buttonfun() {

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
  const [like, setLike] = useState(1);
  const [dis, setDis] = useState(10);
  return (
    <>
      <IconButton
        aria-label="like btn"
        onClick={() => {
          setLike(like + 1);
          console.log(like);
        }}
        color="primary"
      >
        {/* 👍{like} */}
        <Badge badgeContent={like} color="primary">
          👍
          {/* <MailIcon color="action" /> */}
        </Badge>

      </IconButton>

      <IconButton
        aria-label="like btn"
        onClick={() => {
          setDis(dis + 1);
          console.log(dis);
        }}
        color="error"
      >
        {/* 👍{like} */}
        <Badge badgeContent={dis} color="error">
        👎
          {/* <MailIcon color="action" /> */}
        </Badge>

      </IconButton>

      
    </>
  );
}
