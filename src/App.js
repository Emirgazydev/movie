import './App.scss';
import Header from "./components/Header";
import Footer from "./components/Footer";
import {Route, Routes} from "react-router-dom";
import Home from "./components/page/Home";
import Popular from "./components/page/Popular";
import TopRated from "./components/page/TopRated";
import MovieDetails from "./components/MovieDetails";
 import PeopleDetails from "./components/PeopleDetails";
import Search from "./components/page/Search";



function App() {
  return (
    <div id="App">
      <Header/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/popular"} element={<Popular/>}/>
            <Route path={"/top_rated"} element={<TopRated/>}/>
            <Route path={"/movie/movie_details/:movieId"} element={ <MovieDetails/> }/>
            <Route path={"/people/people_details/:peopleId"} element={ <PeopleDetails/> }/>
            <Route path={"/search/search_movie/:movieName"} element={ <Search/> }/>
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
