import React, {Component} from 'react';
import {ProductConsumer} from "../context";
import {Link} from 'react-router-dom';
import {ButtonContainer} from "./Button";

class Details extends Component {
    render() {
        return (
            <ProductConsumer>
                {(value)=>{
                    const {id,company,img,info,price,title,inCart} = value.detailProduct;
                    return(
                        <div className="container py-5">
                            {/* Title */}
                            <div className="row">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h2>{title}</h2>
                                </div>
                            </div>
                            {/* Product info */}
                                <div className="row">
                                    <div className="col-10 mx-auto col-md-6 my-3 d-flex justify-content-center">
                                        <img src={img} className="img-fluid w-50" alt="product"/>
                                    </div>
                                </div>

                                <div className="row d-flex justify-content-center">
                                    <div className="col-10 mx-auto col-md-6 my-3">
                                        <h2>Doos: {title}</h2>
                                        <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                            Merk: <span className="text-uppercase">{company}</span>
                                        </h4>
                                        <h4 className="text-blue">
                                            <strong>
                                                Prijs: <span>€</span>
                                                {price}
                                            </strong>
                                        </h4>
                                        <p className="font-weight-bold mt-3 mb-0">
                                            Info:
                                        </p>
                                        <p className="text-muted lead">
                                            {info}
                                        </p>
                                        <div>
                                            <Link to="/products">
                                                <ButtonContainer>
                                                    Back to products
                                                </ButtonContainer>
                                            </Link>
                                            <ButtonContainer
                                                cart
                                                disabled={inCart?true:false}
                                                onClick={()=> {
                                                    value.addToCart(id);
                                                    value.openModal(id);
                                                }}
                                            >
                                                {inCart?"In mand" : "In mand doen"}
                                            </ButtonContainer>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default Details;