import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {Link} from "react-router-dom";
import img from "../img/photo_2023-03-27_16-15-27.jpg"
import {LanguageContext} from "../../context";

const PersonMovie = ({id}) => {
    const [person, setPerson] = useState([])
    const {language} = useContext(LanguageContext)
    console.log(language)
    console.log(id)
    const getPerson = (key) => {
        axios(`https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${key}&language=${language}`)
            .then((res) => {
                setPerson(res.data.cast)
            })
    }
    useEffect(() => {
        getPerson(API_KEY)
    }, [language])
    console.log(person)
    return (
        <div id="PersonMovie">
            <div className="container">
                <div className="PersonMovie">
                    {
                        person.map((el) => {
                            return (
                                <div className="PersonMovie--card">
                                    <Link to={`/movie/movie_details/${el.id}`}>
                                        {el.poster_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${el.poster_path}`}
                                                               alt=""/>
                                            : <img src={img} style={{
                                                width: "150px",
                                                border: "2px solid black",
                                                padding: "35px 0"
                                            }} alt=""/>}
                                        <h4>{el.title}</h4>
                                    </Link>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </div>
    );
};

export default PersonMovie;