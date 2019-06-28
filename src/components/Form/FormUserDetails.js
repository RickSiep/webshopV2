import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import {ButtonContainer} from "../Button";
import {ProductProvider} from "../../context";
import Title from "../Title";

class FormUserDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Title name="Uw" title="gegevens"/>
                    <div className="d-flex align-items-center flex-column">
                        <div className="py-3">

                        <TextField
                        hintText="Uw naam"
                        floatingLabelText="Voornaam"
                        onChange={handleChange('firstName')}
                        defaultValue={values.firstName}
                        />
                        <br/>
                        <TextField
                            hintText="Uw achternaam"
                            floatingLabelText="Achternaam"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                        />
                        <br/>
                        <TextField
                            hintText="Uw e-mail"
                            floatingLabelText="E-mail"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                        />
                        <br />
                        </div>
                        <div className="d-flex justify-content-center">
                        <ButtonContainer onClick={this.continue}>
                            Volgende
                        </ButtonContainer>
                        </div>
                    </div>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}

export default FormUserDetails;