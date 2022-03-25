import React from 'react';

const StuffList = (props) => {
    
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header"><h4>Freebies List</h4></li>
            {props.stuff.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentStuff.bind(this,item)}>{item.title}</a>
            ))}
        </ul>
    </div>
    );
}
 
export default StuffList;