import React, {useState, useEffect, useContext} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";
import {API_KEY} from "../../API/api";
import Actors from "../Actors";
import Trailer from "../Trailer";
import {LanguageContext} from "../../context";


const MovieDetails = () => {
    const [details, setDetails] = useState({})
    const {movieId} = useParams()
    const {language} = useContext(LanguageContext)
    console.log(language)
    const getDetails = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=${language}`)
    .then((res) => {
            console.log(res.data)
            setDetails(res.data)
        })
    }
    const {poster_path, title, release_date, overview, runtime, vote_average , backdrop_path , genres} = details

    useEffect(() => {
        getDetails(API_KEY)
    },[language])
    return (
        <>
            <div id="details" style={{
            backgroundImage: `url(${`https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/${backdrop_path}`})`
        }}>>
            <div className="container">
                <div className="details">
                    <div className="details--img">
                        <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${poster_path}`} alt="img"/>
                    </div>
                    <div className="details--info">
                        <h1>{title}</h1>
                        <div className="details--info__genres">
                            {
                                genres?.map((el) => {
                                    return(
                                        <h4>{el.name}</h4>
                                    )
                                })
                            }
                        </div>

                        <h2><span>{Math.round(vote_average * 10)}<small>%</small></span>Рейтинг</h2>
                        <h3>Длительность: {Math.floor(runtime / 60 )} <small>ч</small> {runtime % 60} <small>мин</small></h3>
                        <h4> <span>Обзор</span> <br/> {overview}</h4>
                        <h3>Дата выхода: {release_date}</h3>
                    </div>
                </div>
            </div>
        </div>
            <Actors movieId={movieId}/>
            <Trailer movieId={movieId}/>
        </>
    );
};

export default MovieDetails;