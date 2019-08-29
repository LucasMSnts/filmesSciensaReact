import React, { Component } from 'react'
import './gallery-container.css'
import Filme1 from '../../img/filme1.jpg'
import Filme2 from '../../img/filme2.jpg'
import Filme3 from '../../img/filme3.jpg'
import Filme4 from '../../img/filme4.jpg'
import Filme5 from '../../img/filme5.jpg'
import Filme6 from '../../img/filme6.jpg'
import Filme7 from '../../img/filme7.jpg'
import Filme8 from '../../img/filme8.jpg'
import Filme9 from '../../img/filme9.jpg'
import Imagem from '../../Components/img-legend/img'

class GalleryContainer extends Component {
    render(){
        return(
            <div className="gallery-container">
            <Imagem img={Filme1} texto='Capa filme 1'></Imagem>
            <div>
                <img src={Filme2} alt="Capa filme 2" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme3} alt="Capa filme 3" />
                <div class="img-legend">
                    <div class="text-legend">
                        <h4>Nome do filme</h4>
                        <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                    </div>
                    <div class="more-details">
                        <button><span>+</span></button>
                    </div>
                </div>
            </div>
            <div>
                <img src={Filme4} alt="Capa filme 4" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme5} alt="Capa filme 5" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme6} alt="Capa filme 6" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme7} alt="Capa filme 7" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme8} alt="Capa filme 8" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>
            <div>
                <img src={Filme9} alt="Capa filme 9" />
                <div class="img-legend">
                        <div class="text-legend">
                            <h4>Nome do filme</h4>
                            <h6>aareaddafdsegsdgsdjfbhasfhjshfjskhfkjshfjkashfkjashf</h6>
                        </div>
                        <div class="more-details">
                            <button><span>+</span></button>
                        </div>
                </div>
            </div>        
        </div>
        );
    }
}

export default GalleryContainer;