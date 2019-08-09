import React from 'react';
import {Header, Tutorial, Code} from './Components/index';
import './App.css';

class App extends React.Component{
    render(){
        return( 
        <div>
            <Header />
            <div className = "class_box">
                <Tutorial />
                <Code />
            </div>
        </div>
        )
    }
}

export default App;
