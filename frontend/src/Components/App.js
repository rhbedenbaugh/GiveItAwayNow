import React from 'react';
import axios from 'axios';
import './App.css';
import StuffList from "./Stuff/StuffList";
import StuffSingle from "./Stuff/StuffSingle";
import StuffForm from "./Stuff/StuffForm";

const url = 'http://localhost:4000/freestuff';

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
    axios.post(url, {
      title: this.state.title,
      postedBy: this.state.postedBy,
      email: this.state.email
    },
    // event.target.reset()
    )
    .then((response) => {
      console.log(response)
      axios.get(url)
      .then((Response) => {
        this.setState({
          stuff: Response.data
        })
      })
    })
    // .then (event.target.reset)
    .catch((error) => {
      console.log(error.message);
    });
    event.preventDefault();
    this.setState({title: '', postedBy: '', email: ''})
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
          <nav className="col s12">
            <div className="nav-wrapper">
              <a href="/" className="brand-logo">
                <marquee scrollamount="4px" direction="down" width="181%" height="65" behavior="alternate" >
                  <marquee>
                    <h4>How Come Everybody Wanna Keep It Like A Kaiser? Give it away now!</h4>
                  </marquee>
                </marquee>
              </a>
            </div>
          </nav>
          </div>
          <div className="row">
            <div className="col s4"><StuffList stuff={this.state.stuff}
              updateCurrentStuff={this.updateCurrentStuff}/>
            </div>
          <div className="col s8"><StuffSingle stuff={this.state.currentStuff}/></div>
        <div className="row">
          <div className="col s12"><StuffForm 
            submitStuff={this.submitStuff}
            title={this.state.title}
            postedBy={this.state.postedBy}
            email={this.state.email}
            setState={this.setState}
            handleOnChange={this.handleOnChange}/></div>
        </div>
      </div></div>
    );
  }
}

export default App;