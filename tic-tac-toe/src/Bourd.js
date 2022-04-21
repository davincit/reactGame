import { Square } from './Square'

const BourdStyle = {
  backgroundColor: 'skyblue',
  margin: 10,
  padding: 20,
}

const renderSquare=(i)=>{
return(
    <Square/>
)
}
export const Bourd = () => {
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
