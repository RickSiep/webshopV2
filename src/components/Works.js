import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import Icon from '../images/pengwin1.png';
import Icon2 from '../images/pengwin2.png';
import Icon3 from '../images/pengwin3.png';
import Icon4 from '../images/pengwin4.png';
import {ButtonContainer} from "./Button";

class Works extends Component {
    render() {
        return (
            <div>
                <div className="container pt-5">
                    <div className="text-center">
                        <h2>Hoe het werkt.</h2>
                        <br />
                        <h5>Welkom in de wereld van PengWin, de mooiste klerenboxen</h5>
                        <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-5">
                        <div className="col-4">
                            <img src={Icon} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                        <div className="w-25 justify-content-center">
                            <h5 className="font-weight-bold">Kies je abonnement</h5>
                            <p>WIl jij elke maand of 3 maanden leuke pengwin shirts?? kies dan de PengWin-
                                Casual Of Scary service met slechts een paar muisklikken. </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-5">
                        <div className="w-25 justify-content-center">
                            <h5 className="font-weight-bold">Kies je abonnement</h5>
                            <p>WIl jij elke maand of 3 maanden leuke pengwin shirts?? kies dan de PengWin-
                                Casual Of Scary service met slechts een paar muisklikken. </p>
                        </div>
                        <div className="">
                            <img src={Icon2} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-5">
                        <div className="">
                            <img src={Icon3} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                        <div className="w-25 justify-content-center">
                            <h5 className="font-weight-bold">Kies je abonnement</h5>
                            <p>WIl jij elke maand of 3 maanden leuke pengwin shirts?? kies dan de PengWin-
                                Casual Of Scary service met slechts een paar muisklikken. </p>
                        </div>
                    </div>
                    <div className="row d-flex align-items-center justify-content-between py-5">
                        <div className="w-25 justify-content-center">
                            <h5 className="font-weight-bold">Kies je abonnement</h5>
                            <p>WIl jij elke maand of 3 maanden leuke pengwin shirts?? kies dan de PengWin-
                                Casual Of Scary service met slechts een paar muisklikken. </p>
                        </div>
                        <div className="">
                            <img src={Icon4} alt="Icon PengWin Pengwin webshop"/>
                        </div>
                    </div>
                    <div className="text-center">
                    <img src={Icon4}  className="py-5"alt="Icon PengWin Pengwin webshop"/>
                    <br/>
                    <ButtonContainer>
                        <Link to="/products">
                            Start je journey!
                        </Link>
                    </ButtonContainer>
                    </div>
                </div>


            </div>
        );
    }
}

export default Works;