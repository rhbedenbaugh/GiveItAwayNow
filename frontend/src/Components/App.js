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
      title: '',
      postedBy: '',
      email: ''
    };
    
    this.submitStuff = this.submitStuff.bind(this);
    this.updateCurrentStuff = this.updateCurrentStuff.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
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
  }

  handleOnChange(e) {
    console.log(this.state);
    this.setState({...this.state, [e.target.name]:e.target.value});
  }

  submitStuff(event) {
    event.preventDefault();
    // console.log(this.title.value, this.postedBy.value, this.email.value);
    // console.log("hi");
    axios.post('http://localhost:4000/freestuff', {
        title: this.state.title,
        postedBy: this.state.postedBy,
        email: this.state.email
    })
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
  }

  updateCurrentStuff(item) {
    this.setState({
      currentStuff: item,
    })
  }

  render() {
    return (
      <div className="App">
        <div className="row">
          <nav>
            <div className="nav-wrapper blue-darken-1">
              <a href="/" className="brand-logo" align="center">    "How Come Everybody Wanna Keep It Like A Kaiser?"</a>
            </div>
          </nav>
          </div>
          <div className="row">
            <div className="col s4"><StuffList stuff={this.state.stuff}
              updateCurrentStuff={this.updateCurrentStuff}/>
            </div>
          <div className="col s8"><StuffSingle stuff={this.state.currentStuff}/></div>
        <div className="row">
          <div className="col s12"><StuffForm submitStuff={this.submitStuff} title={this.state.title} postedBy={this.state.postedBy} email={this.state.email} setState={this.setState} handleOnChange={this.handleOnChange}/></div>
        </div>
      </div></div>
    );
  }
}

export default App;
