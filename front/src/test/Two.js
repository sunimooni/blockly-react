import React from 'react';

// function component와 class component가 있다.


// Two class를 react component로 만듬
class Two extends React.Component{
    constructor(props){
        super(props);
        console.log("constructor first");
    }    
    state = {
        count: 0
    };
    //setState : state는 object 이기 때문에 그자체를 set, 새 state를 refresh 하고 render를 새롭게 해준다.
    add = () => {
        // 동작 x this.state.count = 1
        this.setState({ count : this.state.count + 1 });
    };
    minus = () => {
        this.setState(current => ({ count : current.count - 1 }));
    };
    componentDidMount(){
        console.log("didmount third");
    }
    componentDidUpdate(){
        console.log("didupdate update");
    }
    componentWillUnmount(){
        console.log("bye");
    };

    render(){
        console.log("render second");
        return (
            <div>     
                <h1>i am a class component {this.state.count}</h1>
                <button onClick={this.add}>add</button>
                <button onClick={this.minus}>minus</button>
            </div> 
        )
    }
}

export default Two;
