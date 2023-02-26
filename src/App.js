import NavBar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import News from "./components/news/News";
import Predictions from "./components/predictions/Predictions";
import Fixtures from "./components/fixtures/Fixtures";
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
