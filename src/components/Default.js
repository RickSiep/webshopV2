import React, {Component} from 'react';

class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                            <h2 className="display-3">404</h2>
                            <h2>Error</h2>
                            <h3>The requested Url <span className="text-danger">
                                {this.props.location.pathname}
                            </span>
                                {""} Was not found</h3>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;