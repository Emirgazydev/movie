import React, {useState,useEffect} from 'react';
import axios from "axios";
import {API_KEY} from "../../API/api";
import Slider from "react-slick";

const Trailer = ({movieId}) => {
    const [video, setVideo] = useState([])
    const getVideo = (key) => {
        axios(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${key}&language=en-US`)
    .then((res) => {
            setVideo(res.data.results)
        })
    }
    useEffect(() => {
        getVideo(API_KEY)
    }, [])
    console.log(video)
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        <div id="video">
            <div className="container">
                <div className="video">
                    <Slider {...settings}>
                        {
                            video.map((el) => (
                                <div className="video--card">
                                    <iframe width="350" height="230" src={`https://www.youtube.com/embed/${el.key}`}
                                        title="FR-33 || movie actors" frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen></iframe>
                                        </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                            </div>
                            </div>
                            );
                        };

                        export default Trailer;