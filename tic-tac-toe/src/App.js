//import logo from './logo.svg';
import './App.css';
import { Bourd } from './Bourd';


const GameStyles = {
    background:"salmon",
    margin:10,
    padding:20,
    display:"flex",
    alignItems:"center",
    flexDirection: "column",

  };



function App() {
  return (
    <div style={GameStyles}>
Tik tak Toe
<Bourd/>

    </div>
  );
}

export default App;
