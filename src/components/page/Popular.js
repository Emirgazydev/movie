import React, {useState, useEffect, useContext} from "react";
import axios from "axios";
import {API_KEY} from "../../API/api";
import Moviecard from "../Moviecard";
import {FcNext, FcPrevious} from "react-icons/fc";
import {LanguageContext} from "../../context";

const Popular = () => {
    const [activ, setActiv] = useState(1)
    const [popular, setPopular] = useState([])
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    const getPopular = (key) => {
        window.scroll(0,0)
        axios(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=${language}&page=${activ}`)
            .then((res) => {
                console.log(res.data.results)
                setPopular(res.data.results)
            })
    }
    useEffect( () => {
        getPopular(API_KEY)
    },[activ,language])
    return (
        <div id="popular" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="popular">
                    {
                        popular.map((el) => {
                            return (
                              <Moviecard el={el} key={el.id}/>
                            )
                        })
                    }
                </div>
                <div className="popular--title">
                    <button onClick={() => setActiv(activ - 1)}><FcPrevious/></button>
                    <h3 style={{
                        textAlign: "center",
                        color: "white"
                    }}>Page:{activ}{activ ? activ === -0 : setActiv(1)}</h3>
                    <button onClick={() => setActiv(activ + 1)}><FcNext/></button>
                </div>
            </div>
        </div>
    );
};

export default Popular;