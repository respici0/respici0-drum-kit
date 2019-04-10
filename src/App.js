import React, { Component } from 'react';
import './App.scss';

const drumSounds = [
  {
    id: "Q",
    keyCode: 81,
    soundName: "Heater-1",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    id: "W",
    keyCode: 87,
    soundName: "Heater-2",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    id: "E",
    keyCode: 69,
    soundName: "Heater-3",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    id: "A",
    keyCode: 65,
    soundName: "Heater-4",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    id: "S",
    keyCode: 83,
    soundName: "Heater-6",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    id: "D",
    keyCode: 68,
    soundName: "Disc",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    id: "Z",
    keyCode: 90,
    soundName: "Kick",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  },
  {
    id: "X",
    keyCode: 88,
    soundName: "Kick-2",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    id: "C",
    keyCode: 67,
    soundName: "Cev",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  }
]

const audio = (props) => {
  return (
    <audio className="clip" id={props.id} >
      <source src={props.url} type="audio/wav" />
    </audio>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drumSounds
    }
  }

  // audio = (url, id) => {
  //   return ({
  //     __html: <div>
  //       <audio>
  //         <source src={url} type="audio/wav" className="clip" id={id} />
  //       </audio>
  //     </div>
  //   }
  //   )
  // }
  componentDidMount = () => {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  componentWillUnmount = () => {
    document.removeEventListener('keydown', this.handleKeyPress)
  }

  handleKeyPress = (e) => {
    let id;
    switch (e.keyCode) {
      case drumSounds[0].keyCode:
        audio(drumSounds[0]);
        id = drumSounds[0].id;
        // this.playSound();
        break;
      case drumSounds[1].keyCode:
        audio(drumSounds[1]);
        id = drumSounds[1].id;
        // this.playSound();
        break;
      case drumSounds[2].keyCode:
        audio(drumSounds[2]);
        id = drumSounds[2].id;
        // this.playSound();
        break;
      case drumSounds[3].keyCode:
        audio(drumSounds[3]);
        id = drumSounds[3].id;
        // this.playSound();
        break;
      case drumSounds[4].keyCode:
        audio(drumSounds[4]);
        id = drumSounds[4].id;
        // this.playSound();
        break;
      case drumSounds[5].keyCode:
        audio(drumSounds[5]);
        id = drumSounds[5].id;
        // this.playSound();
        break;
      case drumSounds[6].keyCode:
        audio(drumSounds[6]);
        id = drumSounds[6].id;
        // this.playSound();
        break;
      case drumSounds[7].keyCode:
        audio(drumSounds[7]);
        id = drumSounds[7].id;
        // this.playSound();
        break;
      case drumSounds[8].keyCode:
        audio(drumSounds[8]);
        id = drumSounds[8].id;
        // this.playSound();
        break;
      case drumSounds[9].keyCode:
        audio(drumSounds[9]);
        id = drumSounds[9].id;
        // this.playSound();
        break;
      default:
        break;
    }
    //console.log(id);
    let x = document.getElementById(id)
    //console.log(x);
    this.setState({
      id: x
    }, () => {
      this.playSound();
    })
    //x.play();
  }


  playSound = (e) => {
    this.state.id.play();
    console.log("pressed");

  }
  // return audio
  // }

  render() {
    return (
      <React.Fragment>
        <div id="drum-machine">
          <h1>BOOM CH BOOM-BOOM CH</h1>
          <div className="row">
            <div className="col">
              <div className="drum-pad" id="heater-1" onClick={this.playSound} >
                {/* <audio>
                  <source src='https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' type="audio/wav" className="clip" id="Q" />
                </audio> */}
                <p>Q</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                {/* {audio} */}
                <p>W</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" type="audio/wav" className="clip" id="E" />
                </audio>
                <p>E</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" type="audio/wav" className="clip" id="A" />
                </audio>
                <p>A</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" type="audio/wav" className="clip" id="S" />
                </audio>
                <p>S</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" type="audio/wav" className="clip" id="DQ" />
                </audio>
                <p>D</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" type="audio/wav" className="clip" id="Z" />
                </audio>
                <p>Z</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" type="audio/wav" className="clip" id="X" />
                </audio>
                <p>X</p>
              </div>
            </div>
            <div className="col">
              <div className="drum-pad" onClick={this.playSound}>
                <audio>
                  <source src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" type="audio/wav" className="clip" id="C" />
                </audio>
                <p>C</p>
              </div>
            </div>
          </div>
          <div id="display" />
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
