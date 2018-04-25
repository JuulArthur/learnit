import React, { Component } from 'react';
import { ContainerWithMaxWidth } from '../Components/ContainerWithMaxWidth/ContainerWithMaxWidth';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header-container">
                    <h1 className="h1">Welcome to We Ignite Tech</h1>
                </div>

                <ContainerWithMaxWidth>
                    <h2 className="h2">We provide opportunities</h2>
                    <p>Courses for newcomers to Norway who wish to pursue a tech career.</p>
                    <p>We provide courses with relevant information, from people working in the business!</p>
                </ContainerWithMaxWidth>
                <div className="about-us-container">
                    <ContainerWithMaxWidth>
                        <h2 className="h2">About us</h2>
                        <p className="team-text">We are a team with passion for technology and help you succeed. We want to see you become all you can be!</p>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/854" alt="team-member-1"/>
                        </div>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/1157" alt="team-member-2"/>
                        </div>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/956" alt="team-member-3"/>
                        </div>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/413" alt="team-member-4"/>
                        </div>
                    </ContainerWithMaxWidth>
                </div>
                <div className="footer-container">
                    <ContainerWithMaxWidth>
                        Contact us: <a className="footer-link" href="mailto:hello@weignite.tech">hello@weignite.tech</a>
                    </ContainerWithMaxWidth>

                </div>
            </div>
        );
    }
}

export default Home;
