import { useState } from "react"

export const Square = (props) => {
  const [state, setState]= useState(null)
  return <button className="SquareStyle" onClick={()=>setState("X")}>{state}</button>
}
