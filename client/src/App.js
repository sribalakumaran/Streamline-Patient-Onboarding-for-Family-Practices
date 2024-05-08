import "./App.css";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import {Section1} from "./pages/section1";
import {Section2} from "./pages/section2";
import {Section3} from "./pages/section3";
import {Section4} from "./pages/section4";
import {Home} from "./pages/home";
import {Generate} from "./pages/generate";
import {Navbar} from "./components/navbar";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/section1" element={<Section1/>}/>
          <Route path="/section2" element={<Section2/>}/>
          <Route path="/section3" element={<Section3/>}/>
          <Route path="/section4" element={<Section4/>}/>
          <Route path="/generate" element={<Generate/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
