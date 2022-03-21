import React from 'react';
import axios from 'axios';
import './App.css';
import FreeStuffList from './FreeStuff/FreeStuffList';
import FreeStuffSingle from './FreeStuff/FreeStuffSingle';
import FreeStuffForm from './FreeStuff/FreeStuffFrom';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            freeStuff: [],
            currentFreeStuff: {}
        }

        this.updateCurrentFreeStuff = this.updateCurrentFreeStuff.bind(this)
    }

    componentDidMount() {
        const url = 'http://localhost:3000/players';

        axios.get(url)
            .then((Response) => {
                this.setState({
                    freeStuff: Response.data
                })
            })
            .catch((error)  => {
                console.log(error);
            });
    };

    updateCurrentFreeStuff(item) {
        this.setState({
            currentFreeStuff: item,
        })
    }

    render (){
        return (
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col s12'>Menu</div>
                </div>
                <div className='row'>
                    <div className='col s3'><FreeStuffList freeStuff={this.state.freeStuff} updateCurrentFreeStuff={this.state.updateCurrentFreeStuff}/></div>
                    <div className='col s9'><FreeStuffSingle /></div>
                </div>
                <div className='row'>
                    <div className='col s12'><FreeStuffForm /></div>
                </div>
            </div>
        );
    }
}
console.log('Aloha!');
console.log('seeya, bye!');

export default App;
