import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Reveal from 'react-reveal/Pulse';
import devices from '../images/devices.png';
import webapp from '../images/webapp.png';
import Contact from './Contact';
import proj1 from '../projectimages/distortions.png';
import proj2 from '../projectimages/moviedb.png';
import proj3 from '../projectimages/motorhead.png';
import proj4 from '../projectimages/randomfacts.png';

class Home extends Component {
    state = {
        email: ''
    }
    handleInput = e => {
        e.preventDefault();
        this.setState({email:e.target.value});
    }
    takeToForm = e => { 
        e.preventDefault();
        window.location = '/#contact';
    }
    render () {
        return (
            <div className="Home">
                <div className="banner-top">
                    <Fade>
                    <div className="text">
                        <h1>
                            Designing, developing and delivering websites from the heart.
                        </h1>
                    </div>
                    </Fade>
                    <Zoom>
                    <div className="discuss">
                        
                        <div className="inner">
                            <form onSubmit={this.takeToForm}>
                                <img src="https://cdn.dribbble.com/users/1162077/screenshots/4606258/comet-animation-blue.gif" width="120"/>
                                <h4>Have a project in mind?</h4>
                                <br/>
                                <input value={this.state.email} onChange={this.handleInput} type="text" placeholder="Email Address"/>
                                <button className="btn btn-success">Lets discuss it!</button>
                            </form>
                        </div>
                    </div>
                    </Zoom>
                </div>
                <div className="countries">
                    <span>Malaysia</span> | <span>Singapore</span> | <span>Thailand</span> | <span>Bangladesh</span>
                </div>
                <br/>
                <br/>
                <div className="features">
                    <table align="center">
                    <div className="row">
                        <div className="col-xs-3">
                            <img src="https://cdn0.iconfinder.com/data/icons/elpis/144/Branding-512.png"/>
                            <p>Web design</p>
                        </div>
                        <div className="col-xs-3">
                            <img src="https://cdn0.iconfinder.com/data/icons/elpis/144/Web_Development-512.png"/>
                            <p>Fullstack <br/> web apps</p>
                        </div>
                        <div className="col-xs-3">
                            <img src="https://cdn0.iconfinder.com/data/icons/elpis/144/Web_Design-512.png"/>
                            <p>Web development</p>
                        </div>
                        <div className="col-xs-3">
                            <img src="https://cdn0.iconfinder.com/data/icons/elpis/144/SEO-512.png"/>
                            <p>SEO</p>
                        </div>
                    </div>
                    </table>
                </div>
                <a href="/services">
                    <Fade>
                        <div className="PricingDetails">
                            <h1>View pricing & details</h1>
                        </div>
                    </Fade>
                </a>
                <br/>
                <br/>
                <br/>
                <div className="content">
                    <div className="info">
                        <Fade>
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <img src={devices}/>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <h2>Responsive, full-fledged websites</h2>
                                    <p>We deliver every website with responsiveness and style in mind. Every website will look equally good on every device. Your website will be built from scratch with the latest technologies to make them perform smoothly.</p>
                                </div>
                            </div>
                        </Fade>
                        <br/>
                        <Fade>
                            <div className="row">
                                <div className="col-sm-6 col-md-6">
                                    <h2>Large-scale webapps</h2>
                                    <p>Our developers are skilled at large-scale webapps with the help of the most popular frameworks out there, we can make anything from e-commerce sites, to blogs.</p>
                                </div>
                                <div className="col-sm-6 col-md-6">
                                    <img src={webapp}/>
                                </div>
                            </div>
                        </Fade>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <Fade>
                        <div className="about-section">
                            <h2>About BreezeBox</h2>
                            <div className="about-banner">
                                <p>BreezeBox asia is an asia-based web agency. We provide every business with the necessary web solutions at international rates.</p>
                            </div>
                            <a href="/about"><button className="btn btn-success">Learn more</button></a>
                        </div>
                    </Fade>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="portfolio-showcase">
                        <h2>Our work</h2>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://distortions.herokuapp.com"><img src={proj1}/></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://moviedb-react.firebaseapp.com"><img src={proj2}/></a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <a href="https://motorhead-automotive.firebaseapp.com"><img src={proj3}/></a>
                            </div>
                            <div className="col-sm-6">
                                <a href="https://idrak888.github.io/randomfacts-website/"><img src={proj4}/></a>
                            </div>
                        </div>
                        <br/>
                        <a href="/projects"><button className="btn btn-success">View more</button></a>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <div className="Services">
                        <div className="wrapper">
                            <h2>Our hottest services at BreezeBox!</h2>
                            <h6>Please note the prices given are just for idea</h6>
                            <br/>
                            <div className="row">
                                <div className="col-md-4">
                                    <Reveal>
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
                                    </Reveal>
                                </div>
                                <div className="col-md-4">
                                    <Reveal>
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
                                    </Reveal>
                                </div>
                                <div className="col-md-4">
                                    <Reveal>
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
                                    </Reveal>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <hr/>
                    <br/>
                    <br/>
                    <img src="https://thumbs.gfycat.com/LividConsciousBlackrhino-size_restricted.gif" className="rocket"/>
                    <Contact updateEmail={this.handleInput} email={this.state.email}/>
                </div>
            </div>
        )
    }
}

export default Home;