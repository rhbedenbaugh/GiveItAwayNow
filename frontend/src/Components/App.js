import React from 'react';
import axios from 'axios';
import './App.css';
import StuffList from "./Stuff/StuffList";
import StuffSingle from "./Stuff/StuffSingle";
import StuffForm from "./Stuff/StuffForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff: [],
      currentStuff: {},
    }

    this.updateCurrentStuff = this.updateCurrentStuff.bind(this);
  }

  componentDidMount() {
    const url = 'http://localhost:4000/freestuff';

    axios.get(url)
    .then((Response) => {
      this.setState({
        stuff: Response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };

  updateCurrentStuff(item) {
    this.setState({
      currentStuff: item,
    })
  }

  render () {
    return(
      <div className="container-fluid">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue-darken-1">
              <a href="/" className="brand-logo">Shasta</a>
            </div>
          </nav>
          </div>
          <div className="row">
            <div className="col s3"><StuffList stuff={this.state.stuff}
              updateCurrentStuff={this.updateCurrentStuff}/>
            </div>
          <div className="col s9"><StuffSingle stuff={this.state.currentStuff}/></div>
        </div>
        <div className="row">
          <div className="col s12"><StuffForm /></div>
        </div>
      </div>
    );
  }
}

export default App;
