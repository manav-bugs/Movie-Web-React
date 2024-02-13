import React, { useContext, useEffect,useState } from "react";
const AppContext= React.createContext();

const API_URL=`https://www.omdbapi.com/?apikey=472e4a55&s=titanic`



const AppProvider =({children})=>{
    const [isLoading, setIsLoading] = useState(true)
    const [movie, setMovie] = useState([]);
    const [isError, setisError] = useState({show:'false', msg:''})

    const getMovies = async(url)=>{
        try {
            const res= await fetch(url);
            const data= await res.json();
            console.log(data);
            if(data.Response==='True'){
                setIsLoading(false);
                setMovie(data.Search);
            }else{
                setisError({
                    show:true,
                    msg:data.error,
                })
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getMovies(API_URL)
    })

    return <AppContext.Provider value={{isLoading,isError,movie}}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext=()=>{
    return useContext(AppContext);
}

export {AppContext,AppProvider,useGlobalContext};