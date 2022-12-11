import React, { Component } from 'react';
import Particles from "react-tsparticles";

import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      density: {
        enable: true,
        area: 800,
      },
      value: 800,
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles className='particles'
          options={{
            particles: particlesOptions           
          }}
          
        />
        <Navigation />
         <Logo />
         <Rank />
        <ImageLinkForm />
        {/* <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
