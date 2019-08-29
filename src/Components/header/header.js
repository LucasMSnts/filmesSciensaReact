import React, { Component } from 'react'
import './header.css'

class Header extends Component{    
    render() {
        return(
            <div className="header">
                <div>
                    <h1 className="title-trainee">Programa de Trainee</h1>
                </div>
                <div>
                    <h1>SCIENSA</h1>
                </div>
            </div>
        );
    }
    
}

export default Header;