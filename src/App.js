import React, { Component } from 'react';
import Particles from "react-tsparticles";

import FaceRecognition from "./components/FaceRecognition/FaceRecognition";
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Logo from './components/Logo/Logo';
import Navigation from './components/Navigation/Navigation';
import Rank from './components/Rank/Rank';
import './App.css';

const USER_ID = '9xt50svmnbug';
const PAT = '91b5f5e9ecc445f7a0bd7b2dfb098eef';
const APP_ID = 'd4e719391122444995eb898c87a7f098';
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = '6dc7e46bc9124c5c8824be4822abe105'; 
// const IMAGE_URL = 'https://samples.clarifai.com/metro-north.jpg';

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
  constructor() {
    super();
    this.state = {
      input: "",
      imageUrl: ""
    }
  }
  onInputChange = (event_) => {
    this.setState({input: event_.target.value});
  }

  onButtonSubmit = () => {
    console.log("click");
    this.setState({imageUrl: this.state.input});

    const raw = JSON.stringify({
      "user_app_id": {
          "user_id": USER_ID,
          "app_id": APP_ID
      },
      "inputs": [
          {
            "data": {
              "image": {
                "url": this.state.imageUrl
              }
            }
          }
        ]
      });

    const requestOptions = {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Authorization': 'Key ' + PAT
        },
      body: raw
    };

    fetch("https://api.clarifai.com/v2/models/" + MODEL_ID + "/versions/" + MODEL_VERSION_ID + "/outputs", requestOptions)
        .then(response => response.json())
        .then(result => console.log(result.outputs[0].data.regions[0].region_info.bounding_box))
        .catch(error => console.log('error', error));
  }
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
        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl} />
      </div>
    )
  }
}

export default App;
