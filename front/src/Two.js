import React from 'react';

// function component와 class component가 있다.


// Two class를 react component로 만듬
class Two extends React.Component{
    state = {
        count: 0
    };
    render(){
        return <h1>i am a class component {this.state.count}</h1>
    }
}

export default Two;
