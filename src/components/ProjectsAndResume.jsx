import React, { Component } from 'react';

class ProjectsAndResume extends Component {
    render() {
        return (
            <section id="resume" className="content-section text-center">
            <div className="download-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>Projects and Resume</h2>
                        <a href="https://github.com/robbiealixsantos/personal-website-react" className="btn btn-default btn-lg">Github code for this Website - React Conversion from HTML5/CSS/Bootstrap theme</a>
                        <a href="https://github.com/robbiealixsantos/restricted-call-dates" className="btn btn-default btn-lg">Restricted Call Dates - Nuget package for Contact Center TCPA & DNC Compliance</a>
                        <a href="https://drive.google.com/file/d/0BzYK0mNiCUWsS2oxLXpDSm41T0U/view?usp=sharing" className="btn btn-default btn-lg">Resume</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ProjectsAndResume;
