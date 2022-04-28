import { useState } from 'react'
import { Square } from './Square'

const BourdStyle = {
  backgroundColor: 'skyblue',
  margin: 10,
  padding: 20,
}

const initvalue = Array(9).fill(null)
export const Bourd = () => {
  const [squares, setSquares] = useState(initvalue)
  const [xIsNext, setXIsNext] = useState(true)
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClickEvent={() => handleClick(i)} />
  }
  //const status1 = `Next Player : ${xIsNext ? 'x' : 'o'}`
  const handleClick = (i) => {
    const newSquers = [...squares]

    const winnerDeclare = Boolean(caculateWinner(squares))
    const squareFilled = Boolean(newSquers[i])
    if (winnerDeclare || squareFilled) {
      return
    }
    newSquers[i] = xIsNext ? 'x' : 'o'
    setSquares(newSquers)
    setXIsNext(!xIsNext)
  }

  function caculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [2, 4, 6],
      [0, 4, 8],
    ]
    for (let line of lines) {
      const [a, b, c] = line
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a]
      }
    }
    return null
  }

  const winner = caculateWinner(squares)
  const status = `${
    winner ? 'Winner: ' + winner : 'Next Player: ' + (xIsNext ? 'X' : 'O')
  }`

  return (
    <div style={BourdStyle}>
      <div>{status}</div>
      {/* <div>{status2}</div> */}
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
