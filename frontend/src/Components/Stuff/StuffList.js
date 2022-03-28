import React from 'react';
import '../App.css';

const StuffList = (state) => {
    const link = 'https://www.bing.com/search?q=give+it+away+lyrics&cvid=a622ffa471624600880f260cf4673bba&aqs=edge.0.0l7j69i60l2.4327j0j4&FORM=ANAB01&PC=U531';
    
    return ( 
    <div style={{overflowY: "auto", maxHeight:"920px"}}>
        <ul className="collection with-header">
            <li className="collection-header center transparent"
                rel="icon"
                type="image/jpg">
                <a href={link} target="new">
                    <img className="img" align="left" src="CD-RED-HOT-CHILI-PEPPERS-BLOOD-SUGAR-SEX-MAGIK-NUOVO-ORIGINALE-big-1928-340.jpg" alt="logo" max-width="60px"></img>
                </a>
                <iframe width="270" height="152" align="right"
                src="https://www.youtube.com/embed/YfsMQO12Hfc"
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                <h3 color="red" align="left">Freebies List</h3>
            </li>
            {state.stuff.map((item) => (
                <h5><a href="#!" className="collection-item center transparent" key={item._id}
                onClick={state.updateCurrentStuff.bind(this,item)}>{item.title}</a></h5>
            ))}
        </ul>
    </div>
    );
}
 
export default StuffList;