import React from 'react';
import axios from "axios";
import Movie from "./Movie";

class Three extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };
    // 여기서 data를 fetch 한 것이다.
    getMovies = async() => {
        // async : 이함수가 비동기야, 이거 기다려 => await 한것.
    //    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by = rating");
    //    console.log(movies.data.data.movies);
        const {
            data : { 
                data : {movies}
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({movies : movies, isLoading : false}); 
    }
    
    componentDidMount(){
    /*    setTimeout(() => {
            this.setState({ isLoading : false });
        }, 6000);*/
        this.getMovies()
    }
    render() {
        const { isLoading, movies } = this.state;
        return <div>{isLoading ? "Loading" : movies.map(movie => (
            <Movie 
                key = {movie.id}
                id = {movie.id} 
                year = {movie.year} 
                title = {movie.title} 
                summary = {movie.summary} 
                poster = {movie.medium_cover_image} />
        ))}</div>
    }
}

export default Three;
