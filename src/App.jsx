import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import Support from "./pages/Support";
import Head from "./pages/Head";

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/> 
      <Route path="/mac" element={<Mac />}/> 
      <Route path="/ipad" element={<Ipad />}/> 
      <Route path="/support" element={<Support/>}/> 
      <Route path="/head" element={<Head/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
