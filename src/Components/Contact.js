import React from 'react';
import axios from 'axios';

const Contact = props => {
    const sendEmail = e => {
        e.preventDefault();
        const loader = document.querySelector('.loader');
        const error = document.querySelector('.text-danger');

        const btn = e.target;
        btn.disabled = true;
        loader.style.display = 'inline-block';

        const firstname = document.querySelector('#firstname').value;
        const lastname = document.querySelector('#lastname').value;
        const senderEmail = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const need = document.querySelector('#need').value;
        const des = document.querySelector('#des').value;

        if (firstname == '' || senderEmail == '' || phone == '' || need == '' || des == '') {
            error.innerHTML = 'Please fill all the blanks.'
            loader.style.display = 'none';
            btn.disabled = false;
            setTimeout(() => {
                error.innerHTML = '';
            }, 2000);
        } else {
            axios.post('https://sheltered-caverns-26013.herokuapp.com/newmail', {
                senderName: `${firstname} ${lastname}`,
                senderEmail,
                subject: `New order (${need})`,
                html: `<h3>Type:</h3> ${need}; <h3>Details:</h3> ${des}; <h3>Client name:</h3> ${firstname} ${lastname}; <h3>Client email:</h3> ${senderEmail}; <h3>Phone number:</h3> +${phone}`,
                password: '8nov2016'
            }).then(doc => {
                alert('Order has been placed! We will get in touch with you in a few days.');
                btn.disabled = false;
                loader.style.display = 'none';
            }).catch(e => {
                error.innerHTML = 'Error sending message, please contact playbox8g@gmail.com directly';
                btn.disabled = false;
                loader.style.display = 'none';
                setTimeout(() => {
                    error.innerHTML = '';
                }, 5000);
            });
        }
    }
    return (
        <div className="contact">
            <h2>Start a project</h2>
            <br/>
            <br/>
            <h4>Communication choices</h4>
            <br/>
            <table align="center">
                <div className="row">
                    <div className="col-xs-4">
                        <a href="https://api.whatsapp.com/send?phone=60176121582"><img src="https://image.flaticon.com/icons/png/512/124/124034.png"/></a>
                        <br/>
                        Whatsapp
                    </div>
                    <div className="col-xs-4">
                        <a href="https://www.facebook.com/breezeboxsolutions/"><img src="https://cdn.worldvectorlogo.com/logos/facebook-messenger.svg"/></a>
                        <br/>
                        Messenger
                    </div>
                    <div className="col-xs-4">
                        <a href="mailto: breezeboxasia@gmail.com"><img src="https://cdn4.iconfinder.com/data/icons/free-colorful-icons/360/gmail.png"/></a>
                        <br/>
                        Email
                    </div>
                </div>
            </table>
            <br/>
            <form id="contact">
                <h2>Fill out our form & we'll be in touch shortly</h2>
                <br/>
                <div className="row">
                    <div className="col-xs-6">
                        <input id="firstname" type="text" placeholder="First Name"/> 
                    </div>
                    <div className="col-xs-6">
                        <input id="lastname" type="text" placeholder="Last Name"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-6">
                        <input onChange={props.updateEmail} value={props.email} id="email" type="text" placeholder="Your Email"/> 
                    </div>
                    <div className="col-xs-6">
                        <input id="phone" type="text" placeholder="Phone"/> 
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <input id="need" type="text" placeholder="Type of project"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <textarea id="des" placeholder="Brief description"></textarea>    
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12">
                        <button className="btn btn-success" onClick={sendEmail}>Send</button>
                        <br/>
                        <img className="loader" width="100" src="https://thumbs.gfycat.com/OffensiveUnitedChanticleer-size_restricted.gif" />
                        <br/>
                        <span className="text-danger"></span>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Contact;