import './App.css';
import Navbar from "./components/Navbar";
import Box1 from "./components/Box1";
import Box2 from "./components/Box2";

function App() {
  return (
    <div className="App">
        <Navbar className="Nav"/>
        <Box1/>
        <Box2 data={{name:"Chris",  color:"Blue", age:23}}/>
        <Box2 data={{name:"Kyle", color:"Red", age:22}}/>
        <Box2 data={{name:"Nick",  color:"Green", age:18}}/>
    </div>
  );
}

export default App;
