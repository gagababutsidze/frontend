import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";
import moviesTypes from "../types/types";
import { useEffect, useState } from "react";
import "./api.css";

const Api = () => {
  let [movies, setMovies] = useState<moviesTypes[] | null>(null);
  useEffect(() => {
    axios.get("http://localhost:4000/movies/").then((response) => {
      const data = response.data;

      setMovies(data);
    });
  }, []);

  
  return (
    <>
      <div className="divApi">
        {movies &&
          movies.map((movie) => (
            
            <>
            {console.log(movie)
            }
              <div className="image-div">
                <Link to={`/watch/${movie._id}`}>
                  <img
                    key={movie._id}
                    className="movie-img"
                    src={require(`../movies/${movie.image}`)}
                    alt="fghjkl;"
                  />
                </Link>
              </div>
            </>
          ))}
      </div>
    </>
  );
};



export default Api;
