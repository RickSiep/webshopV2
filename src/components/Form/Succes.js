import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class Succes extends Component {
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
        return (
            <MuiThemeProvider>
                <React.Fragment>
                 <h2>Thanks bro</h2>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}


export default Succes;