import { useState } from 'react'
import { Square } from './Square'

const BourdStyle = {
  backgroundColor: 'skyblue',
  margin: 10,
  padding: 20,
}

const initvalue = [null, null, null, null, null, null, null, null, null]
export const Bourd = () => {
  const [squares, setSquares] = useState(initvalue)
  console.log("🚀 ~ file: Bourd.js ~ line 13 ~ Bourd ~ squares", squares)
  const renderSquare = (i) => {
    return <Square value={squares[i]} />
  }
  return (
    <div style={BourdStyle}>
      Bourd
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
      >
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
      >
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div
        style={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap' }}
      >
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
