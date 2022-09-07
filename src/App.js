import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { default as DataProvider } from "./context/data";

function App() {
  return (
    <DataProvider>
      <nav>
        <Link to="/">Anasayfa</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="movie/:id" element={<MovieDetails/>}/>
      </Routes>
    </DataProvider>
  );
}

export default App;
