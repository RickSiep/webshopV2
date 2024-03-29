import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../penLogo.png';
import styled from 'styled-components';
import {ButtonContainer} from "./Button";


class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to='/'>
                    <img src={logo} alt="store" className="navbar-brand w-25" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/products" className="nav-link">
                            Producten
                        </Link>
                    </li>
                </ul>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/works" className="nav-link">
                            Hoe het werkt
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                   <ButtonContainer>
                       <span className="mr-2">
                           <i className="fas fa-shopping-cart"/>
                       </span>
                   </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
    background:var(--mainDark);
    .nav-link{
     color:var(--mainWhite)!important;
     font-size:1.3rem;
     text-transform: capitalize;
    }
`;


export default Navbar;
