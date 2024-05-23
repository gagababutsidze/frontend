import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams} from "react-router-dom"
import moviesTypes from "../types/types";
import './movieComponent.css'

const MovieComponent = () => {
    const { id } = useParams();
 let [movie, setMovie] = useState<moviesTypes| null>(null);
 let [textComment, setTextComment] = useState<string>('')

    useEffect(() => {
        axios.get(`http://localhost:4000/movies/${id}`)
        .then((response)=> {
            const data = response.data
            setMovie(data)
         
        })
    },[])

    
    return (
      <>
      <div className='main-div'>
        {movie === null ? null : (
           <div>
                <div className='div'>
                 <img className='movie-photo' src={require(`../movies/${movie.image}`)} alt="" />
                  <video className='movie-player' controls>
                    <source src={require(`../movies/${movie.link}`)} />
                  </video>  
                 </div>
                <div className='article'>
                    <h2 className='title'>{movie.name}</h2>

                    <p>{movie.description}</p>
                </div>
                <div >
                  {movie.comments.map((item)=>(
                  <div className='comments'>
                    <div>
                      <h2>{item.user.name}</h2>
                    </div>
                    <div>
                      <h1>{item.comment}</h1>
                    </div>
                   </div>
                  )

                  )}
                  <form>
                    <input onChange={(e)=>{
                      setTextComment(e.target.value)
                    }} type="text" />
                    <input type="submit" onClick={() => {
                      const save = localStorage.getItem('userId')

                      const sendComment = {
                        userId: save,
                        movieId: id,
                        content: textComment
                      }
                    
                    axios.post("http://localhost:4000/comment/",sendComment)
                    .then((res) => {
                      console.log(res.data);
                      
                    });
                      
                    }}/>
                  </form>
               
                </div>
           </div>
          
        )}

        </div>
      </>
    );
}


export default MovieComponent