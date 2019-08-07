import React from 'react';
import axios from "axios";

class Three extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };
    // 여기서 data를 fetch 한 것이다.
    getMovies = async() => {
        // async : 이함수가 비동기야, 이거 기다려 => await 한것.
    //    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
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
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "We are ready"}</div>
    }
}

export default Three;
