import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetail/MovieDetails";
import { default as DataProvider } from "./context/data";
import ActorDetail from "./pages/ActorDetail/ActorDetail";
import { Header } from "./components/Header";
import Favorites from "./pages/Favorites/Favorites";
import Login from "./components/Auth/Login";
import { UserAuthContextProvider } from "./context/userAuthContext";
import Register from "./components/Auth/Register";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <UserAuthContextProvider>
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/person/:id" element={<ActorDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
        <ToastContainer theme="dark"/>
      </DataProvider> 
    </UserAuthContextProvider>
  );
}

export default App;
