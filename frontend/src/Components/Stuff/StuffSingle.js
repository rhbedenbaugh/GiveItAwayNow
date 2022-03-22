import React from 'react';

const StuffSingle = (props) => {
    return (
        <div className="row">
        <div classNameName="col s12">
          <div className="card">
            <div className="card-image">
              <img src="free_logo.png" alt="free logo"></img>
              <span className="card-title">{props.stuff.title}</span>
            </div>
            <div className="card-content">
              <p>Posted By {props.stuff.postedBy} on {props.stuff.created_date}</p>
            </div>
            <div className="card-action">
              Email: {props.stuff.email}
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default StuffSingle;