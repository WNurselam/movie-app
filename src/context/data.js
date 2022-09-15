import { createContext, useContext, useState,useEffect } from "react";


export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({ children }) => {
  const [movies, setMovies] = useState([]); // api verisi
  const [loading, setLoading] = useState(false); // api yükelenme durumu
  const [favorite, setFavorite] = useState(localStorage.getItem('favorite') ? JSON.parse
  (localStorage.getItem('favorite')):[]);


  useEffect(() => {
    localStorage.setItem("favorite",JSON.stringify(favorite))
  },[favorite])

  const addToFavorite = (movie) => {
    const check = favorite.every((item) => {
      return item.id !== movie.id;
    });

    if (check) {
      setFavorite([...favorite, movie]);
    } else {
      alert("Favorilerde var");
    }
  };
  return (
    <DataContext.Provider
      value={{
        movies,
        setMovies,
        loading,
        setLoading,
        favorite,
        setFavorite,
        addToFavorite
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
export default Provider;
