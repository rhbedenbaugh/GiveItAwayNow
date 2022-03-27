import React from 'react';

class StuffForm extends React.Component {
  constructor(props) {
    super(props)};

  render()  {
    return ( 
      <div className="row height=100px">
        <form className="col s12" onSubmit= {this.props.submitStuff}>
          <h3 className="center">Add Ya Freebie Info &
          <button className="btn-large waves-effect waves-light black" type="submit" name="action">
            <i class="material-icons right">music_note</i>Click Me, Baby!
          </button>
          </h3>
          <div className="row height=100px">
            <div className="input-field col s4">
              <input name="title" id="title" type="text" class="validate"
                value={this.props.title}
               onChange={this.props.handleOnChange}/>
              <label for="title">What is it?</label>
            </div>
            <div className="input-field col s4">
              <input name="postedBy" id="postedBy" type="text" class="validate"
                value={this.props.postedBy}
                onChange={this.props.handleOnChange}/>
              <label for="postedBy">Who are you?</label>
            </div>
            <div className="input-field col s4">
              <input name="email" id="email" type="text" class="validate"
                value={this.props.email}
                onChange={this.props.handleOnChange}/>
              <label for="email">Gotta Email?</label>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default StuffForm;