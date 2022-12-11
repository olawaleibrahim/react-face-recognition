import React, { Component } from 'react';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
         <Logo />
        {/*
        <ImageLinkForm />
        <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
