import React, {Component} from 'react';

class Body extends Component{
    render(){
        return <div>
            <h2>This is header two</h2>
            <br/>
            <p>This is React This is React This is React This is React</p>
            <span><label>Username: </label></span>
            <form><input type="text"></input></form>
            <h1>{this.props.name}</h1>
        </div>
    }
}

export default Body;