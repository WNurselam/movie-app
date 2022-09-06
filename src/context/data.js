import { createContext, useContext, useState } from "react";

export const DataContext = createContext();
export const useData = () => useContext(DataContext);

const Provider = ({children}) => {
    const [movies,setMovies] = useState([]) // api verisi
    const [loading,setLoading] = useState(false) // api yükelenme durumu
    const [currentPage,setCurrenPage] = useState(1) // Mevcut sayfayı çağırma 1. sayfada olduğumuz
    const [moviesPage,setMoviesPage] = useState(10) // sayfa başına kaç tane data geleceği


    return (
        <DataContext.Provider
            value={{
                movies,
                setMovies,
                currentPage,
                setCurrenPage,
                loading,
                setLoading,
                moviesPage,
                setMoviesPage  
            }}
        >{children}   
        </DataContext.Provider>
    )
}
export default Provider;
