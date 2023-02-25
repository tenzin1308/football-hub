import NavBar from "./Components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./Components/News/News";
import Predictions from "./Components/Predictions/Predictions";
import Fixtures from "./Components/Fixtures/Fixtures";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <>
      <NavBar/>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<News />}></Route>
        <Route path="/home" element={<News/>}></Route>
        <Route path="/predictions" element={<Predictions />}></Route>
        <Route path="/fixture" element={<Fixtures />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
