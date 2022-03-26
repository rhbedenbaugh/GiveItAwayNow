import React from 'react';
// import axios from 'axios';

class StuffForm extends React.Component {

  render() { 
    // console.log(this.props)
    return ( 
      <div className="row">
        <form className="col s12" onSubmit= {this.props.submitStuff}>
          <h3 className="center">Add Ya Freebie Info &  <button className="btn-large waves-effect waves-light" type="submit"
            name="action"><i class="material-icons right">music_note</i>Click Me!</button>
          </h3>
          <div className="row">
            <div className="input-field col s4">
              <input name= "title" id="title" type="text" class="validate" onChange={this.props.handleOnChange}/>
              <label for="title">What is it?</label>
            </div>
            <div className="input-field col s4">
              <input name= "postedBy" id="postedBy" type="text" class="validate" onChange={this.props.handleOnChange}/>
              <label for="postedBy">Who are you?</label>
            </div>
            <div className="input-field col s4">
              <input name= "email" id="email" type="text" class="validate" onChange={this.props.handleOnChange}/>
              <label for="email">Gotta Email?</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
 
export default StuffForm;