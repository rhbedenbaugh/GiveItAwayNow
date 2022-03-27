import React from 'react';

  
const StuffSingle = (props) => {
  const link = 'https://redhotchilipeppers.com/';
  return (
    <div className="row">
      <div className="col s12">
        <div className="card transparent">
          <div className="card-image">
          <a href={link} target="new">
             <img src="BSSM.jpg" alt="BSSM"></img></a>
          </div>
          <div className="card-content">
            <h4><p>{props.stuff.title} ={'>'} Email {props.stuff.postedBy} at {props.stuff.email}</p></h4>
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default StuffSingle;