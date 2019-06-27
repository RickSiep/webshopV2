import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        // Process Form
        this.props.nextStep();
    };
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values: { firstName, lastName, email,
        occupation, city, bio}} = this.props;
        const {values, handleChange} = this.props;
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <div className="d-flex justify-content-center align-items-center">
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText = { firstName }
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText = { lastName }
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText = { email }
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText = { occupation }
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText = { city }
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText = { bio }
                        />
                    </List>
                    </div>
                    <div className="d-flex justify-content-center">
                        <RaisedButton
                            label="Confirm & Continue"
                            primary={true}
                            style={styles.button}
                            onClick={this.continue}
                        />
                        <RaisedButton
                            label="Terug"
                            primary={false}
                            style={styles.button}
                            onClick={this.back}
                        />
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