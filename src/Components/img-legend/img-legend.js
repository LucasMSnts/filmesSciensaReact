import React, { Component } from 'react'
import './img-legend.css'
import Filme1 from '../../img/filme1.jpg'
import Filme2 from '../../img/filme2.jpg'
import Filme3 from '../../img/filme3.jpg'
import Filme4 from '../../img/filme4.jpg'
import Filme5 from '../../img/filme5.jpg'
import Filme6 from '../../img/filme6.jpg'
import Filme7 from '../../img/filme7.jpg'
import Filme8 from '../../img/filme8.jpg'
import Filme9 from '../../img/filme9.jpg'
import Imagem from './img'


const Filmes = props => {
    const { data = [] } = props;

    const gerarItems= () => {        
        return data.map(dataItem => <Imagem>{Filme1},"capa "</Imagem>);
    }; 
}

// class ImgLegend extends Component {
//     render(){
//         return(
//             <img src={IMG} alt="Capa filme 1" />
//             <div className="img-legend">
//                 <div className="text-legend">
//                     <h4>Nome do filme</h4>
//                     <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
//                  </div>
//                 <div className="more-details">
//                     <button><span>+</span></button>
//                 </div>
//             </div>
//         );
//     }
// }