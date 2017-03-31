import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import icon from './icon.jpg';

import ContactContainer from './ContactContainer';
import ContactPhone from './ContactPhone';
import ContactEmail from './ContactEmail';

import data from './data';
import WizardContainer from './WizardContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={icon} className="icon" alt="Picture of Hui Liu" />
          <h1>My name is HUI LIU</h1>
          <span>You Can Call Me Haley</span>
        </div>
        <div className="App-content">
          <WizardContainer
            wizardData={data}
          />
        </div>
        <div className="App-footer">
          <ContactContainer>
            <ContactEmail />
            <ContactPhone />
          </ContactContainer>
        </div>
      </div>
    );
  }
}

export default App;
