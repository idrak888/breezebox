import React from 'react';
import Contact from './Contact';
import Animation from 'react-reveal/Pulse';

const Services = props => {
    return (
        <div className="Services">
            <div className="wrapper">
                <h2>Our hottest services at BreezeBox!</h2>
                <h6>Please note the prices given are just for idea</h6>
                <br/>
                <div className="row">
                    <div className="col-md-4">
                        <Animation>
                        <div className="service light">
                            <h3>Web app</h3>
                            <p className="main-p">Our developers can deliver large-scale web apps with full API support for your business needs.</p>
                            <div className="inner">
                                <h2>$400-$3750</h2>
                                <h4>Features: </h4>
                                <p>Single Page Applications <strong>(SPAS)</strong></p>
                                <p><strong>Backend</strong> database support</p>
                                <p>User <strong>authentication</strong> support</p>
                                <br/>
                                <img width="75" src="https://cdn1.iconfinder.com/data/icons/business-456/500/business-planing-512.png"/> 
                            </div>
                        </div>
                        </Animation>
                    </div>
                    <div className="col-md-4">
                        <Animation>
                        <div className="service dark">
                            <h3>Brochure Website</h3>
                            <p className="main-p">Our server-hosted brochure websites are perfect for any business who needs an online presence.</p>
                            <div className="inner">
                                <h2>$80-$250</h2>
                                <h4>Features: </h4>
                                <p>Up to <strong>4 pages</strong></p>
                                <p><strong>Flexible</strong> designs</p>
                                <p><strong>Server</strong> hosted</p>
                                <br/>
                                <img width="75" src="https://cdn1.iconfinder.com/data/icons/business-456/500/global-business-512.png"/> 
                            </div>    
                        </div>
                        </Animation>
                    </div>
                    <div className="col-md-4">
                        <Animation>
                        <div className="service dark">
                            <h3>Remodelling</h3>
                            <p className="main-p">We can use your existing website and remake it from scratch.</p>
                            <div className="inner">
                                <h2>$80 and up</h2>
                                <h4>Features: </h4>
                                <p><strong>Responsive</strong> build</p>
                                <p><strong>Modern</strong> design implementation</p>
                                <p><strong>Perfomance</strong> improvements</p>
                                <br/>
                                <img width="75" src="https://cdn1.iconfinder.com/data/icons/business-456/500/problem-solving-512.png"/>
                            </div>    
                        </div>
                        </Animation>
                    </div>
                </div>
            </div>
            <Contact/>
        </div>
    )
}

export default Services;