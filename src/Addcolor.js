import { useState } from "react";
import { ColorBoxs } from "./ColorBoxs";

export function Addcolor() {
  const [color, setcolor] = useState("skyblue");
  const styles = {
    backgroundColor: color
  };
  //const colorlist = ["red", "pink", "green"]
  const [colorlist, setcolorlist] = useState([color]);
  return (
    <div>
      <div className="add">
        <input
          type="text"
          style={styles}
          onChange={(event) => setcolor(event.target.value)}
          value={color} />
        <button
          onClick={() => {

            setcolorlist([...colorlist, color]);
            console.log(colorlist);

          }}
        >
          add color
        </button>
      </div>
      {colorlist.map((clr) => (
        <ColorBoxs newc={clr} />
      )
      )}
    </div>

  );
}
