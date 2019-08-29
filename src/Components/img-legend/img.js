import React from 'react'
import './img-legend.css'

export default props=> { //<li>{props.children}</li>;
    <div>
        <img src={props.children} alt={props.texto} />
        <div className="img-legend">
            <div className="text-legend">
                <h4>Nome do filme</h4>
                <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
            </div>
            <div className="more-details">
                <button><span>+</span></button>
            </div>
        </div>
    </div>
}