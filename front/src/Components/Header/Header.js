import React from 'react';
import './Header.css';

class Header extends React.Component{
    render(){
        return (
            <div className="Header">
                <div className="Header_logo">
                    <h1>DDUK DDAK LEARNING</h1>
                </div>
                <div className="User_Info">
                    <ul>
                        <li>SignIn</li>
                        <li>Learn</li>
                    </ul>
                </div>
            </div> 
        )
    }
}

export default Header;