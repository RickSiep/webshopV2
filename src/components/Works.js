import React, {Component} from 'react';
import styled from 'styled-components';
import Icon from '../icon2.svg';
import {ButtonContainer} from "./Button";

class Works extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5 text-center">
                        <h2>Hoe het werkt.</h2>
                        <h5>Welkom in de wereld van PengWin, de mooiste klerenboxen</h5>
                        <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                    <div className="row d-flex justify-content-around align-items-center py-5">
                        <div>
                            <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                        <div>
                            <h5>Kies je abonnement</h5>
                            <p>Wil je schoenen</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center py-5">
                        <div>
                            <h5>Kies je abonnement</h5>
                            <p>Wil je schoenen</p>
                        </div>
                        <div>
                            <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center py-5">
                        <div>
                            <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                        <div>
                            <h5>Kies je abonnement</h5>
                            <p>Wil je schoenen</p>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-around align-items-center py-5">
                        <div>
                            <h5>Kies je abonnement</h5>
                            <p>Wil je schoenen</p>
                        </div>
                        <div className="border-top">
                            <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                    </div>
                    <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                    <br/>
                    <ButtonContainer>
                        Yes
                    </ButtonContainer>
                </div>


            </div>
        );
    }
}

export default Works;