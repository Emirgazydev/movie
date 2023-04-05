import React, {useEffect, useState} from 'react';
import axios from "axios";
import {useParams} from "react-router-dom";
import Moviecard from "../Moviecard";
import {API_KEY} from "../../API/api";

const Search = () => {
    const [searchMovie, setSearchMovie] = useState([])
    const {movieName} = useParams()
    const getSearch = (key) => {
        axios(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movieName}`)
    .then((res) => {
            setSearchMovie(res.data.results)
        })
    }
    useEffect(() => {
        getSearch(API_KEY)
    }, [movieName])
    console.log(searchMovie)
    return (
        <div id="popular">
            <div className="container">
                <div className="popular">
                    {
                        searchMovie.map((el) => (
                            <Moviecard el={el}/>
                        ))

                    }
                </div>
            </div>
        </div>
    );
};

export default Search;