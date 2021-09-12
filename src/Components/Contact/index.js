import React from "react";
import './Contact.scss';

function Contact() {
    return (
        <div>
            <div className="container2">
                <div className="box">

                    <div className="title">
                        <span className="block"></span>
                        <h1>Contact Me<span></span></h1>
                    </div>

                    <div className="role">
                        <div className="block"></div>
                        <p>Full Stack & Salesforce Dev</p>
                    </div>

                </div>
            </div>

            <a href="https://www.linkedin.com/in/wayne-collier/" target="_blank"><footer>
                <div className="texto">
                    <span>
                        <i className="fab fa-youtube"></i>
                        Click to Contact</span>
                </div>
            </footer>
            </a>
        </div>
    );
}

export default Contact;