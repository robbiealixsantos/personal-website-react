import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
        <section id="about" className="container content-section text-center">
            <div className="row">
                <div className="col-md-4"><img alt="my face" src="https://drive.google.com/file/d/0BzYK0mNiCUWsVEl1emF4Y1lNaEU/view?usp=sharing"/></div>
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
