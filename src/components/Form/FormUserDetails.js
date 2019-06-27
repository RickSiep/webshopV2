import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import context from '../../context';

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
                    <RaisedButton
                    label="Continue"
                    primary={true}
                    style={styles.button}
                    onClick={this.continue}
                    />
                    <br />
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