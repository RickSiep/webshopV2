import React, {Component} from 'react';
import {ButtonContainer} from "./Button";
import Icon  from '../icon2.svg';

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
                        <ButtonContainer><a href="/products" className="general-button">Begin je avontuur!</a></ButtonContainer>
                    </div>
                </div>

                <div className="shirts-container">
                    <div className="shirts-content general-color-white-stroke">
                        <h3>Kleuren voor doorzetters</h3>
                        <p>Ontdek de gloednieuwe Penguin Box kleurencombinaties: verschillende tinten
                            over het hele kleurenspectrum.</p>
                        <ButtonContainer><a href="/products" className="general-button">Ga ervoor!</a></ButtonContainer>
                    </div>
                </div>


                    <div className="work-text">
                        <h2>Hoe werkt het</h2>
                    </div>
                        <div className="row">
                            <div className="col">
                                <img src={Icon} alt="Icon"></img>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col">
                                <img src={Icon} alt="Icon"></img>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col">
                                <img src={Icon} alt="Icon"></img>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                            <div className="col">
                                <img src={Icon} alt="Icon"></img>
                                <p>Wil jij elke maand of 3 maanden een paar schoenen? kies dan de Sneak- Elite Of Premium service met slechts een paar muisklikken.</p>
                            </div>
                        </div>
                    </div>

        );
    }
}

export default Home;