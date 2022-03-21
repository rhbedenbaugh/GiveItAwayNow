import React from 'react';

const FreeStuffList = (props) => {
    return ( 
    <div>
        <ul className='collection with-header'>
            <li className='collection-header'><h4>FreeStuff</h4></li>
            {props.FreeStuffList.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={props.updateCurrentFreeStuff.bind(this,item)}>{item.title}
                {item.postedBy}</a>
            ))}
        </ul>
    </div>
    );
}
 
export default FreeStuffList;