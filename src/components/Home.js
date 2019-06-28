import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";
import Icon from '../images/pengwin1.png';
import Icon2 from '../images/pengwin2.png';
import Icon3 from '../images/pengwin3.png';
import Icon4 from '../images/pengwin4.png';
import ModalGeneral from './ModalGeneral';

class Home extends Component {
    render() {
        return (
            <div>
                {/* Home slider */}
                <div className="sliderContainer">
                    <div className="sliderContent">
                        <h3> Een doos met meer dan alleen inspiratie. </h3>
                        <p>Word lid van Pengwin en ontvang jouw shirts in onze nieuwste penguindoos. Deze doos bevat niet alleen jouw nieuwe kleding,
                            maar ook meerdere goodies,
                            Pengwin stickers, een bedankje van ons, en misschien nog wel meer! Start nu je proefabonnement en ontdek Pengwin!</p>
                        <ButtonContainer><Link to="/products" title="Producten, Webshops. Kleren, Clothing, Pengwin">Begin je avontuur!</Link></ButtonContainer>
                    </div>
                </div>

                <div className="shirts-container">
                    <div className="shirts-content">
                        <h3>Kleuren voor doorzetters</h3>
                        <p>Ontdek de gloednieuwe Penguin Box kleurencombinaties: verschillende tinten
                            over het hele kleurenspectrum.</p>
                        <ButtonContainer><Link to="/products" title="Producten, Webshops. Kleren, Clothing, Pengwin">Ga ervoor!!</Link></ButtonContainer>
                    </div>
                </div>


                    <div className="work-text">
                        <h2>Hoe werkt het</h2>
                    </div>
                        <div className="row">
                            <div className="col p-5">
                                <div className="d-flex align-items-center justify-content-center pb-3">
                                 <img src={Icon} alt="Icon, webshop icon, penguin icon"></img>
                                </div>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col p-5">
                                <div className="d-flex align-items-center justify-content-center pb-3">
                                    <img src={Icon2} alt="Icon webshop icon, penguin icon"></img>
                                </div>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col p-5">
                                <div className="d-flex align-items-center justify-content-center pb-3">
                                    <img src={Icon3} alt="Icon webshop icon, penguin icon"></img>
                                </div>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col p-5">
                                <div className="d-flex align-items-center justify-content-center pb-3">
                                    <img src={Icon4} alt="Icon webshop icon, penguin icon"></img>
                                </div>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                        </div>
                <div className="d-flex align-items-center justify-content-center mb-3">
                    <ButtonContainer>
                        <Link to="/products" title="Producten, Webshops. Kleren, Clothing, Pengwin">
                            Begin het avontuur!
                        </Link>
                    </ButtonContainer>
                </div>
                    </div>

        );
    }
}

export default Home;