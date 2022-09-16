import {Routes,Route,} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import SingleCocktill from "./components/SingleCocktill";

function App() {
  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/singlecocktill" element={<SingleCocktill />} />
    </Routes>
    </>
  );
}

export default App;
