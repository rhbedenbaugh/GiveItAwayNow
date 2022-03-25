import React from 'react';
// import axios from 'axios';

class StuffForm extends React.Component {
    

    // submitStuff(event) {
    //     event.preventDefault();
    //     console.log(this.title.value, this.postedBy.value, this.email.value);
    //     console.log("hi");
    //     axios.post('http://localhost:4000/freestuff', {
    //         title: this.title.value,
    //         postedBy: this.postedBy.value,
    //         email: this.email.value,
    //         isUsed: this.isUsed.value,
    //     })
    //     .then((response) => {
    //         console.log(response);
    //     })
    //     .catch((error) => {
    //         console.log(error);
    //     });
    // }

    render() { 
      console.log(this.props)
        return ( 
        <div className="row">
          <form className="col s12" onSubmit= {this.props.submitStuff}>
            <h1 className="center">Add Yo Freebie Info &  <button className="btn waves-effect waves-light" type="submit"
              name="action">Click Me</button></h1>
            {/* <form className="col s12" onSubmit= {this.props.submitStuff}> */}
              <div className="row">
                <div className="input-field col s4">
                  <input name= "title" id="title" ref="title" type="text" onChange={this.props.handleOnChange}/>
                  <label htmlFor="title">What is it?</label>
                </div>
                <div className="input-field col s4">
                  <input name= "postedBy" id="postedBy" ref="postedBy" type="text" onChange={this.props.handleOnChange}/>
                  <label htmlFor="postedBy">Who are you?</label>
                </div>
                <div className="input-field col s4">
                  <input name= "email" id="email" ref="email" type="text" onChange={this.props.handleOnChange}/>
                  <label htmlFor="email">Gotta Email?</label>
                </div>
                {/* <div className="input-field col s3">
                  <input id="isUsed" ref="isUsed" type="text" />
                  <label htmlFor="isUsed">Item is Used</label>
                </div> */}
              </div>
            </form>
        </div>
        );
    }
}
 
export default StuffForm;