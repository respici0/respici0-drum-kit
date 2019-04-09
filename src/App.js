import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="drum-machine">
          <div id="display">
            <h1>BOOM CH BOOM-BOOM CH</h1>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <p>Q</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>W</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>E</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <p>A</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>D</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>F</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div className="drum-pad">
                  <p>Z</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>X</p>
                </div>
              </div>
              <div className="col">
                <div className="drum-pad">
                  <p>C</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </React.Fragment>
    );
  }
}

export default App;
