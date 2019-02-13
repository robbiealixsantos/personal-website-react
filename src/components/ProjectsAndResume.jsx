import React, { Component } from 'react';

class ProjectsAndResume extends Component {
    render() {
        return (
            <section id="resume" className="content-section text-center">
            <div className="download-section">
                <div className="container">
                    <div className="col-lg-8 col-lg-offset-2">
                        <h2>Projects and Resume</h2>
                        <a href="http://klinkapp.herokuapp.com/" className="btn btn-default btn-lg">KLINK</a>
                        <a href="http://repod.herokuapp.com/" className="btn btn-default btn-lg">Repo/d</a>
                        <a href="https://nostalgic-bhabha-63c0a7.netlify.com/" className="btn btn-default btn-lg">Tosche Station v1 - React App</a>
                        <a href="https://github.com/robbiealixsantos/personal-website-react" className="btn btn-default btn-lg">Github code for this Website - React Conversion from HTML5/CSS/Bootstrap theme</a>
                        <a href="https://github.com/robbiealixsantos/restricted-call-dates" className="btn btn-default btn-lg">Restricted Call Dates - Nuget package for Contact Center TCPA & DNC Compliance</a>
                        <a href="https://drive.google.com/open?id=0BzYK0mNiCUWsQXJjSHBtbU5RSVU" className="btn btn-default btn-lg">Resume</a>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default ProjectsAndResume;