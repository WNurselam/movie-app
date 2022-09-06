import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import DetailsMovie from "./pages/DetailsMovie";
import { default as DataProvider } from "./context/data";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="details" element={<DetailsMovie/>}/>
      </Routes>
    </DataProvider>
  );
}

export default App;
