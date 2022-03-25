import React from 'react';

const StuffSingle = (props) => {
    return (
        <div className="row">
        <div classNameName="col s12">
          <div className="card">
            <div className="card-image">
              <img src="BSSM.jpg" alt="BSSM"></img>
            </div><div>
              <span className="card-title">{props.stuff.title}</span>
            </div>
            <div className="card-content">
              <p>Offered to you fpr FREE by    {props.stuff.postedBy}. Call 'em at...{props.stuff.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default StuffSingle;