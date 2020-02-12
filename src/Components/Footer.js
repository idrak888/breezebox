import React from 'react';

const Footer = () => {
    function backToTop() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0; 
    }
    return (
        <div className="Footer">
            <div className="row">
                <div className="col-xs-4">
                    <a href="https://www.facebook.com/breezeboxsolutions/"><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-facebook-512.png"/></a>
                    <br/>
                    <a href="https://www.facebook.com/breezeboxsolutions/"><h5>facebook.com/breezeboxsolutions/</h5></a>
                    <br/>
                    Contact us at: 
                    <h5>+60176121582</h5>
                    <h5>breezeboxasia@gmail.com</h5>
                </div>
                <div className="col-xs-4">
                    <h3>Locations</h3>
                    <p><strong>Malaysia</strong></p>
                    <p>Singapore</p>
                    <p>Bangladesh</p>
                    <p>Thailand</p>
                </div>
                <div className="col-xs-4">
                    <button onClick={backToTop} className="btn btn-primary">Back to top <img src="https://cdn2.iconfinder.com/data/icons/circle-icons-1/64/arrow-up-512.png"/></button>
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12">
                    All Rights Reserved © 2019 BreezeBox solutions asia. Privacy Policy | Sitemap
                </div>
            </div>
        </div>
    )
}

export default Footer;