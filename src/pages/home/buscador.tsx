import { useState, useEffect } from "react";
import React from "react";
import { API_KEY } from "../../config/api_key";
import { Movie, Container, Busca, IPNT, MovieList, Divizinha } from "./components";
import { Link } from "react-router-dom";

export default function Buscador() {
   
   
    const [movies, setMovies] = useState<any[]>([])
    const image_path ="https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return(
    
           <Divizinha>
            <Busca action="fetch">
                 <h1>Movies</h1>
                 <IPNT type="text" name="titulo" placeholder="Titulo" id="titulo"/>
                 <button>Search</button>
                    {
                     movies.map( movie => {
                        
                    return(
                        <Movie>
                            <Link to={`/details/${movie.id}`}> <img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </Movie>
                    )
                })             
            }
                 
            </Busca>
            <br/>
            <br/>
            <br/>
    </Divizinha>
    
    );
}
           