import React from 'react';
import './styles/App.css';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Projects from './Components/Projects';

import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('UA-146713206-1');
  ReactGA.pageview('/');
}

function App() {
  initializeReactGA();
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" component={Header}/>

        <Route exact path="/" component={Home}/>
        <Route exact path="/services" component={Services}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/projects" component={Projects}/>

        <div className="chat">
          <a href="https://api.whatsapp.com/send?phone=60176121582"><img src="https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png"/></a>
        </div>
        <Route path="/" component={Footer}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
