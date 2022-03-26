import React from 'react';

  
const StuffSingle = (props) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="card">
          <div className="card-image">
            <img src="BSSM.jpg" alt="BSSM"></img>
          </div>
          <div>
            <span className="card-title">{props.stuff.title}</span>
          </div>
          <div className="card-content">
            <p>Offered FREE to you by {props.stuff.postedBy}. Talk to...{props.stuff.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StuffSingle;