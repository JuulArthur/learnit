import React, { Component } from 'react';
import InfoBox from '../Components/InfoBox/InfoBox';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { ContainerWithMaxWidth } from '../Components/ContainerWithMaxWidth/ContainerWithMaxWidth';

class Home extends Component {
    render() {
        return (
            <div className="home">
                <div className="header-container">
                    <h1 className="h1">Welcome to We Ignite Tech</h1>
                </div>

                <ContainerWithMaxWidth>
                    <h2 className="h2">We provide opportunities</h2>
                    <p>Courses for newcomers to Norway who wish to pursue a tech career</p>
                    <Grid fluid>
                        <Row className="coursesContainer">
                            <Col sm="12" md="4">
                                <InfoBox title="Beginner course" description="Learn the basics of programming. We introduce you to the fundamentals and basic concepts of programming. Learn to write your first programs and simple web pages." />
                            </Col>
                            <Col sm="12" md="4">
                                <InfoBox title="Intermediate course" description="Learn more advanced concept and paradigms of programming. We will learn how to build a complete web sites and how to make it run" />
                            </Col>
                            <Col sm="12" md="4">
                                <InfoBox title="Advanced course" description="So already know how to program? Learn everything you know in order to build advanced web sites and solutions, how to work with customers and deliver value for your customers" />
                            </Col>
                        </Row>
                    </Grid>
                </ContainerWithMaxWidth>
                <div className="about-us-container">
                    <ContainerWithMaxWidth>
                        <h2 className="h2">About us</h2>
                        <p>We are a team with passion for technology and help you succeed. We want to see you become all you can be!</p>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/854" alt="team-member-1"/>
                        </div>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/1157" alt="team-member-2"/>
                        </div>
                        <div className="about-us-image-container">
                            <img className="about-us-image" src="https://res.cloudinary.com/bekkimg/w_301/d_default_image.png/956" alt="team-member-3"/>
                        </div>
                    </ContainerWithMaxWidth>
                </div>
                <div className="footer-container">
                    <ContainerWithMaxWidth>
                        Contact us: <a className="footer-link" href="mailto:hallo@weignite.tech">hallo@weignite.tech</a>
                    </ContainerWithMaxWidth>

                </div>
            </div>
        );
    }
}

export default Home;


/*
 <h3 className="h3">Are you interested in joining our next course?</h3>
 <form className="form" onSubmit={(e) => {
 e.preventDefault();
 console.log('Du er registrert', e);
 }}>
 <label className="label">
 Name:
 <input className="registerInput" name="name" placeholder="name"/>
 </label>
 <label className="label">
 Email:
 <input className="registerInput" name="email" placeholder="my@email.com"/>
 </label>
 <button className="register">Join us now!</button>
 </form>
 */