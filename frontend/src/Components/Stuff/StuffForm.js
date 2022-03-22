import React from 'react';
import axios from 'axios';

class StuffForm extends React.Component {
    submitStuff(event) {
        event.preventDefault();

        axios.post('http://localhost:4000/freestuff', {
            title: this.refs.title.value,
            postedBy: this.refs.postedBy.value,
            email: this.refs.email.value,
            isUsed: this.refs.isUsed.value,
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    render() { 
        return ( 
        <div className="row">
            <h1 className="center">Add stuff              <button className="btn waves-effect waves-light" type="submit"
              nme="action">Add Stuff</button></h1>
            <form className="col s12" onSubmit={this.submitStuff.bind(this)}>
              <div className="row">
                <div className="input-field col s3">
                  <input id="title" ref="title" type="text" />
                  <label htmlFor="title">Title</label>
                </div>
                <div className="input-field col s3">
                  <input id="postedBy" ref="postedBy" type="text" />
                  <label htmlFor="postedBy">Posted By</label>
                </div>
                <div className="input-field col s3">
                  <input id="email" ref="email" type="text" />
                  <label htmlFor="email">Email</label>
                </div>
                <div className="input-field col s3">
                  <input id="isUsed" ref="isUsed" type="text" />
                  <label htmlFor="isUsed">Item is Used</label>
                </div>
              </div>

            </form>
        </div>
        );
    }
}
 
export default StuffForm;