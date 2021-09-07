import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Box1/>
        <Box2 data={{name:"Wes",  color:"Lime"}}/>
        <Box2 data={{name:"Alex", color:"Black"}}/>
        <Box2 data={{name:"Max",  color:"Orange"}}/>
    </div>
  );
}

export default App;
