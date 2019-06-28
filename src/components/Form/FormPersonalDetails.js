import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {ButtonContainer} from "../Button";
import Title from "../Title";



class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };


    render() {
        const {values, handleChange} = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <Title name="Uw" title="gegevens"/>
                    <div className="d-flex align-items-center flex-column">
                    <TextField
                        hintText="Uw baan"
                        floatingLabelText="baan"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br/>
                    <TextField
                        hintText="Uw stad"
                        floatingLabelText="Stad"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br/>
                    <TextField
                        hintText="Uw Bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    </div>
                    <div className="d-flex justify-content-center">
                        <ButtonContainer onClick={this.continue}>
                            Volgende
                        </ButtonContainer>

                        <ButtonContainer onClick={this.back}>
                            Vorige
                        </ButtonContainer>

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

export default FormPersonalDetails;