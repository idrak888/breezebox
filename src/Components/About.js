import React from 'react';
import nomicalImage from '../projectimages/nomical.png';
import randomFactsImage from '../projectimages/randomfacts.png';

const About = props => {
    return (
        <div className="About">
            <div className="about-banner">
                <h1>About us</h1>
            </div>
            <div className="wrapper">
                <h2>Some of our projects</h2>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="https://nomical.herokuapp.com">
                            <div className="project">
                                <img src={nomicalImage}/>
                                <br/>
                            </div>
                        </a>
                    </div>
                    <div className="col-sm-6">
                        <a href="https://idrak888.github.io/randomfacts-website/">
                            <div className="project">
                                <img src={randomFactsImage}/>
                                <br/>
                            </div>
                        </a>
                    </div>
                </div>
                <br/>
                <a href="/projects"><button className="btn btn-success">View more</button></a>
                <br/>
                <hr/>
                <br/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="info-box">
                            <h2>Countries we cover</h2>
                            <p>We currently accept orders from: </p>
                            <ul>
                                <li>Malaysia</li>
                                <li>Thailand</li>
                                <li>Singapore</li>
                                <li>Bangladesh</li>
                                <li>Indonesia</li>
                            </ul>
                            <p>and most of other South East Asian countries.</p>
                        </div>
                        
                    </div>
                    <div className="col-sm-6">
                        <div className="info-box">
                            <h2>How we operate</h2>
                            <h1>Step 1</h1>
                            <p>Send us an email directly, with brief introduction and details about the project.</p>
                            <h1>Step 2</h1>
                            <p>Within 2 working days, expect a reply email from us.</p>
                            <h1>Step 3</h1>
                            <p>Our communication will begin and we will give you a quotation and an estimated date of completion.</p>
                            <h1>Step 4</h1>
                            <p>Finally, complete the payment (including domain), recieve your website, and enjoy!</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default About;