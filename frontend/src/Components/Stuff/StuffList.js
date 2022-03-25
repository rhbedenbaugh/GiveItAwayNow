import React from 'react';

const StuffList = (state) => {
    const link = 'https://www.bing.com/search?q=give+it+away+lyrics&cvid=a622ffa471624600880f260cf4673bba&aqs=edge.0.0l7j69i60l2.4327j0j4&FORM=ANAB01&PC=U531';
    
    return ( 
    <div>
        <ul className="collection with-header">
            <li className="collection-header center" rel="icon" type="image/jpg"><a href={link} target="new"><img className="img123" src="CD-RED-HOT-CHILI-PEPPERS-BLOOD-SUGAR-SEX-MAGIK-NUOVO-ORIGINALE-big-1928-340.jpg" alt="logo" max-width="60px"></img></a>
            <h4>Freebies List</h4></li>
            {state.stuff.map((item) => (
                <a href="#!" className="collection-item" key={item._id}
                onClick={state.updateCurrentStuff.bind(this,item)}>{item.title}</a>
            ))}
        </ul>
    </div>
    );
}
 
export default StuffList;