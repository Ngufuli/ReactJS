import React, {Component} from 'react';

class Form extends Component{
    render(){
        return <div>
            <br />
            <label for="">First Name:</label>
            <input type="text"></input>
            <br />
            <label for="">Last Name:</label>
            <input type="text"></input>
            <br />
            <label for="">Password</label>
            <input type="password"></input>

        </div>
    }
}

export default Form;