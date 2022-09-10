import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import { default as DataProvider } from "./context/data";
import ActorDetail from "./pages/ActorDetail";
import { Header } from "./components/Header";


function App() {
  return (
    <DataProvider>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movie/:id" element={<MovieDetails/>}/>
        <Route path="/person/:id" element={<ActorDetail/>}/>
      </Routes>
    </DataProvider>
  );
}

export default App;
