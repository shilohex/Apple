import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Mac from "./pages/Mac";
import Ipad from "./pages/Ipad";
import Support from "./pages/Support";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mac" element={<Mac />} />
        <Route path="/ipad" element={<Ipad />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </BrowserRouter>
  );
}

// const Support = () => {
//   useEffect(() => {
//     document.title = "Supportpage - Apple"; 
//   }, []);

//   return <div>Official Apple Support</div>;
// };

export default App;
