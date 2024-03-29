import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from './MyComponents/Header';
import Home from './MyComponents/Home';
import Login from './MyComponents/Login';
import Details from './MyComponents/Details';
import About from './MyComponents/About';
import Header1 from './MyComponents/Header1';


function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<><Header1/><Home /></>} />
      <Route path='/login' element={<><Header1/><Login /></>} />
      <Route path='/details' element={<Details />} />
      <Route exact path="/about" element={<><Header/><About/></>}></Route>
    </Routes>
    </Router>
  </>
  );
}

export default App;