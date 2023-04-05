import React, {useState, useEffect, useContext} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import {useParams} from "react-router-dom";
import PersonMovie from "../PersonMovie";
import {LanguageContext} from "../../context";


const PeopleDetails = () => {
    const [people, setPeople] = useState({})
    const [bio, setBio] = useState(300)
    const {language} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    console.log(language)
    const {peopleId} = useParams()
    const getPeople = (key) => {
        axios(`https://api.themoviedb.org/3/person/${peopleId}?api_key=${key}&language=${language}`)
            .then((res) => {
                setPeople(res.data)
            })
    }
    const more = (text) => {
        if (bio === 300) {
            setBio(text.length)
        }else{
            setBio(300)
        }
    }


    useEffect(() => {
        getPeople(API_KEY)
    }, [language])
    const {profile_path, name, biography, place_of_birth,birthday,also_known_as
    } = people
    console.log(people)

    return (
        <>
            <div id="PersonDetails" style={{
                background: dark === true ? "black" : "white"
            }}>
                <div className="container">
                    <div className="PersonDetails">
                        <div className="PersonDetails--img">
                            {
                                profile_path ? <img src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${profile_path}`} alt=""/> : <img className="user" src="" style={{
                                    padding: "70px 0 ",
                                    borderRadius: "5px 60px 5px 60px",
                                }} alt=""/>
                            }
                        </div>
                        <div className="PersonDetails--title">
                            <h1 style={{
                                            color: dark === true ? "white" : "black"
                            }}>{name}</h1>
                            <h3 style={{
                                            color: dark === true ? "white" : "black"
                            }}>Дата рождения: {birthday}</h3>
                            <h3 style={{
                                            color: dark === true ? "white" : "black"
                            }}>Место рождения: {place_of_birth}</h3>
                            <h4 style={{
                                            color: dark === true ? "white" : "black"
                            }}>Также известность как: </h4>
                            <div className="PersonDetails--title__about">
                                {
                                    also_known_as?.map((el) => (
                                        <p style={{
                                            fontSize: "15px",
                                            margin: "5px 20px 30px 0"
                                        }}>{el}</p>
                                    ))
                                }
                            </div>
                            <h5 style={{
                                            color: dark === true ? "white" : "black"
                            }}>Биография</h5>
                            <p style={{
                                            color: dark === true ? "white" : "black"
                            }}>{biography?.slice(0,bio)}</p>
                            <h6 onClick={() => {
                                more(biography)
                            }} style={{
                                cursor: "pointer",
                                color: "blue"
                            }}>{bio === 300 ? "Читать ещё" : "Закрыть"}</h6>
                            <PersonMovie id={peopleId}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PeopleDetails;