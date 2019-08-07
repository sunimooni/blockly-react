import React from 'react';
import axios from "axios";

class Three extends React.Component{
    state = {
        isLoading : true,
        movies : []
    };
    // 여기서 data를 fetch 한 것이다.
    componentDidMount(){
    /*    setTimeout(() => {
            this.setState({ isLoading : false });
        }, 6000);*/
        axios.get("https://yts-proxy.now.sh/list_movies.json");

    }
    render() {
        const { isLoading } = this.state;
        return <div>{isLoading ? "Loading" : "We are ready"}</div>
    }
}

export default Three;
