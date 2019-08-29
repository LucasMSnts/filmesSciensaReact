import React, { Component } from 'react'
import './menu-fixed.css'
import logo from '../../img/logo-sciensa-pb2.png'

class menufixed extends Component {
    render() {
        return(
            <div className="fixed-menu">
                <div className="logo-content">
                    <img 
                        src= {logo}
                        alt="Logo Sciensa"
                    />
                </div>
                <div className="menu-content">
                    <button>Adicionar Filme</button>
                </div>
            </div>
        );
    }
}

export default menufixed;