import React, {Component} from 'react';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";
import {Input} from "./Input";
import Maps from '../maps.png';

class Footer extends Component {
    render() {
        return (
            <footer className="page-footer blue pt-4 ">

             <div className="container-fluid text-center text-md-left my-5">
                 <div className="row">
                     <div className="col-md-3 mt-md-0 mt-4">
                         <h5 className="text-uppercase">Nieuwsbrief</h5>
                         <p>Meld u aan net zoals 0 anderen aan vor de nieuwsbrief om op
                         de hoogte te blijven van PengWin</p>
                         <div className="d-flex">
                             <Input placeholder="email"/>
                             <ButtonContainer>Subscribe</ButtonContainer>
                         </div>
                     </div>
                     <hr className="clearfix w-100 d-md-none pb-3"/>
                     <div className="col-md-3 mb-md-0 mb-4">
                         <h5 className="text-uppercase">Links</h5>
                         <ul className="list-unstyled">
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                         </ul>
                     </div>
                     <hr className="clearfix w-100 d-md-none pb-3"/>
                     <div className="col-md-3 mb-md-0 mb-3">
                         <h5 className="text-uppercase">Links</h5>
                         <ul className="list-unstyled">
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                             <li>
                                 <a href="#">
                                     test
                                 </a>
                             </li>
                         </ul>
                     </div>

                     <hr className="clearfix w-100 d-md-none pb-3"/>
                     <div className="col-md-3  mb-md-0 mb-3">
                         <h5 className="text-uppercase">Over ons</h5>
                         <div className="d-flex flex-row">
                             <img src={Maps} alt="Maps from Page Rick Siepelinga Pengwin"
                             className="w-50"/>
                             <ul className="list-unstyled ml-2">
                                 <li>
                                     <p>Pengwin</p>
                                 </li>
                                 <li>
                                     <p>Pengwin</p>
                                 </li>
                                 <li>
                                     <p>Pengwin</p>
                                 </li>
                                 <li>
                                     <p>Pengwin</p>
                                 </li>
                             </ul>
                         </div>

                     </div>
                 </div>
             </div>

                <div className="footer-copyright text-center py-3">
                    © 2019 Copyright: Rick Siepelinga
                </div>

            </footer>
        );
    }
}

export default Footer;