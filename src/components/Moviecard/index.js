import React from 'react';
import {Link} from "react-router-dom";

const Moviecard = ({el, id}) => {
    return (
        <div key={el.id} className="popular--card">
            <Link to={`/movie/movie_details/${el.id}`}>
                <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`} alt="img"/>
            </Link>
            <h2> Название :  {el.title}</h2>
            <h3>Популярност : {el.popularity}</h3>
            <h3> Дата выпуск : {el.release_date} </h3>
        </div>
    );
};

export default Moviecard;