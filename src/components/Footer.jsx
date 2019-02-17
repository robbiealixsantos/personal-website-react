import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer>
            <div className="container text-center">
                <p>Copyright &copy; Robbie Santos - {new Date().getFullYear()}</p>
                <p>This page was made with React <img alt="react logo" src="/assets/img/logo.png"/></p>
            </div>
        </footer>
        );
    }
}

export default Footer;