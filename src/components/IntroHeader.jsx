import React, { Component } from 'react';

class IntroHeader extends Component {
    render() {
        return (
    <header className="intro">
        <div className="intro-body">
            <div className="container">
                <div className="row">
                    <div id="aboutContainerDiv" className="col-md-8 col-md-offset-2">
                        <h1 className="brand-heading">Hi, my name is <b>Robbie Santos.</b></h1>
                        <p className="intro-text">I'm a Full Stack Web Developer living in the Bay Area.</p>
                            <p>I'm passionate about intuitive, clean, and innovative applications</p>
                        <a href="#about" id="aboutPageScroll" className="btn btn-circle page-scroll">
                            <i className="fa fa-angle-double-down animated"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </header>
        );
    }
}

export default IntroHeader;