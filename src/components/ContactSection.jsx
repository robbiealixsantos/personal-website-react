import React, { Component } from 'react';

class ContactSection extends Component {
    render() {
        return (
            <section id="contact" className="container content-section text-center">
            <div className="row">
                <div className="col-lg-8 col-lg-offset-2">
                    <h2>Contact Me</h2>
                    <p>Feel free to email me if you have any questions about anything on my site or to just say hello!</p>
                    <p><a href="mailto:robbiealixsantos@gmail.com">robbiealixsantos@gmail.com</a>
                    </p>
                    <ul className="list-inline banner-social-buttons">
                        <li>
                            <a href="https://github.com/robbiealixsantos" className="btn btn-default btn-lg"><i className="fa fa-github fa-fw"></i> <span className="network-name">Github</span></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/robbie-santos/" className="btn btn-default btn-lg"><i className="fa fa-linkedin fa-fw"></i> <span className="network-name">Linkedin</span></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        );
    }
}

export default ContactSection;