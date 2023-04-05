import React, {useContext, useState} from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LanguageContext} from "../../context";
import {CiLight} from "react-icons/ci";
import {MdDarkMode} from "react-icons/md";
const Header = () => {
    const [search, setSearch] = useState("")
    const nav = useNavigate()
    const {setLanguage} = useContext(LanguageContext)
    const {setDark} = useContext(LanguageContext)
    const {dark} = useContext(LanguageContext)
    return (
        <div id="header" style={{
            background: dark === true ? "black" : "white"
        }}>
            <div className="container">
                <div className="header">
                    <h1>𝑴𝑶𝑽𝑰𝑬𝑺</h1>
                    <div className="header--nav">
                        <NavLink to={"/"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Home</NavLink>
                        <NavLink to={"/popular"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Popular</NavLink>
                        <NavLink to={"/top_rated"} className="header--nav__link" style={{
                            color: dark === true ? "white" : "black"
                        }}>Top Rated</NavLink>
                    </div>
                    <div className="header--btn">

                        <input type="text" placeholder="Поиск..."  style={{
                            background: dark === true ? "white" : "black",
                            color: dark === true ? "black" : "white"
                        }} onChange={(e) => {
                            setSearch(e.target.value)
                        }} onKeyDown={(e) => {
                            if (e.key === "Enter") {
                                nav(`/search/search_movie/${search}`)
                            }
                        }}/>
                        <select onChange={(e) => setLanguage(e.target.value)}>
                            <option value="ru-RU">Русский</option>
                            <option value="en-EN">English</option>
                            <option value="fr-FR">France</option>
                        </select>
                        <button onClick={() => nav(`/search/search_movie/${search}`)}>Search</button>

                    </div>
                    <div className="header--dark">
                        <button onClick={() => setDark(false)}>
                            <CiLight/>
                        </button>
                        <button onClick={() => setDark(true)}>
                            <MdDarkMode/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
)
    ;
};

export default Header;