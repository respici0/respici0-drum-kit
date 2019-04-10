import React, { Component } from 'react';
import './App.scss';

const drumSounds = [
  {
    id: "Q",
    keyCode: 81,
    soundName: "heater-1",
  },
  {
    id: "W",
    keyCode: 87,
    soundName: "heater-2",
  },
  {
    id: "E",
    keyCode: 69,
    soundName: "heater-3",
  },
  {
    id: "A",
    keyCode: 65,
    soundName: "heater-4",
  },
  {
    id: "S",
    keyCode: 83,
    soundName: "heater-6",
  },
  {
    id: "D",
    keyCode: 68,
    soundName: "disc",
  },
  {
    id: "Z",
    keyCode: 90,
    soundName: "kick-1",
  },
  {
    id: "X",
    keyCode: 88,
    soundName: "kick-2",
  },
  {
    id: "C",
    keyCode: 67,
    soundName: "cev",
  }
]

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      text: ""
    }
  }

  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    let id;
    let text;
    let code = e.keyCode || e.which;

    for (let i = 0; i < drumSounds.length; i++) {
      if (code === drumSounds[i].keyCode || e.target.id === drumSounds[i].soundName) {
        id = drumSounds[i].id;
        text = drumSounds[i].soundName;
        this.playSound(id);
        this.setState({
          id,
          text,
        });
      }
    }
  }

  playSound = (id) => {
    document.getElementById(id).play();
    setTimeout(this.revertButton, 200);
  };

  revertButton = () => {
    this.setState({
      id: ""
    })
  }

  render() {
    // replace pressed with id === keyCode to change className accordingly 
    const { id, text } = this.state
    // refactor this code
    return (
      <React.Fragment>
        <div id="drum-machine">
          <h1>BOOM BOX</h1>
          <div className="row">
            <div className="col">
              <div className={id !== "Q" ? "drum-pad" : "pressed"} id="heater-1" onClick={this.handleKeyPress} >
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" type="audio/mp3" className="clip" id="Q" />
                <p>Q</p>
              </div>
            </div>
            <div className="col">
              <div className={id !== "W" ? "drum-pad" : "pressed"} id="heater-2" onClick={this.handleKeyPress} >
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" type="audio/mp3" className="clip" id="W" />
                <p>W</p>
              </div>
            </div>
            <div className="col">
              <div className={id !== "E" ? "drum-pad" : "pressed"} id="heater-3" onClick={this.handleKeyPress}>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/mp3" className="clip" id="E" />
                <p>E</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={id !== "A" ? "drum-pad" : "pressed"} id="heater-4" onClick={this.handleKeyPress}>
                <p>A</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/mp3" className="clip" id="A" />
              </div>
            </div>
            <div className="col">
              <div className={id !== "S" ? "drum-pad" : "pressed"} id="heater-6" onClick={this.handleKeyPress}>
                <p>S</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/mp3" className="clip" id="S" />
              </div>
            </div>
            <div className="col">
              <div className={id !== "D" ? "drum-pad" : "pressed"} id="disc" onClick={this.handleKeyPress}>
                <p>D</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/mp3" className="clip" id="D" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className={id !== "Z" ? "drum-pad" : "pressed"} id="kick-1" onClick={this.handleKeyPress}>
                <p>Z</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/mp3" className="clip" id="Z" />
              </div>
            </div>
            <div className="col">
              <div className={id !== "X" ? "drum-pad" : "pressed"} id="kick-2" onClick={this.handleKeyPress}>
                <p>X</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/mp3" className="clip" id="X" />
              </div>
            </div>
            <div className="col">
              <div className={id !== "C" ? "drum-pad" : "pressed"} id="cev" onClick={this.handleKeyPress}>
                <p>C</p>
                <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" className="clip" id="C" />
              </div>
            </div>
          </div>
          <div className="container" id="display">
            {text}
          </div>
        </div>
        <div className="footer">
          <p>
            Created by {" "}
            <a href="https://robertpaulrespicio.com/" target="_block">
              Respici0
              </a>
          </p>
        </div>

      </React.Fragment >
    );
  }
}

export default App;
