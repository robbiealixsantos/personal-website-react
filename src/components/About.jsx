import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-md-4"><img alt="my face" src="https://photos.google.com/photo/AF1QipP_AMMTfdgzc1hWcPHl2xthmPE9U_zyBUX5_WtY"/></div>
                <div className="col-md-8">
                    <h2>About Me</h2>
                        <p>Hello there! I am a former political science major and jack-of-all-trades turned solutions engineer and full-stack web developer. 
                        I am currently passionate about learning new frameworks, exploring new APIs, and continuing to hone my coding skills. </p>
                </div>
            </div>
        </section>
        );
    }
}

export default About;
