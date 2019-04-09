import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <React.Fragment>
        <div id="drum-machine">
          <div id="display">
            <h1>BOOM CH BOOM-BOOM CH</h1>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="Q" />
                  </audio>
                  <p>Q</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="W" />
                  </audio>
                  <p>W</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="E" />
                  </audio>
                  <p>E</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="A" />
                  </audio>
                  <p>A</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="S" />
                  </audio>
                  <p>S</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="DQ" />
                  </audio>
                  <p>D</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="Z" />
                  </audio>
                  <p>Z</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="X" />
                  </audio>
                  <p>X</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <audio>
                    <source src="" className="clip" id="C" />
                  </audio>
                  <p>C</p>
                </div>
              </div>
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
        </div>

      </React.Fragment>
    );
  }
}

export default App;
