import React, {useContext, useEffect, useState} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import Moviecard from "../Moviecard";
import {LanguageContext} from "../../context";

const TopRated = () => {
    const array = [1,2,3,4,5,6,7,8,9,10]
    const [TopRated, setTopRated] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)
    const [active, setActive] = useState(1)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=${language}&page=${active}`)
            .then((res) => {
                setTopRated(res.data.results)
            })
    }
    useEffect( () => {
        getPopular(API_KEY)
    },[active,language])
    return (
        <div id="TopRated" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="TopRated">
                    {
                       TopRated.map((el) => {
                           return (
                               <Moviecard el={el} key={el.id}/>
                           )
                       })
                    }
                </div>
                <div className="top--pages">
                    {
                       array.map((btn) => (
                           <button onClick={() => setActive(btn)}>{btn}</button>
                       ))
                    }
                </div>
            </div>
        </div>
    );
}

export default TopRated;