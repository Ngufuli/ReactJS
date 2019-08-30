import React, {Component} from 'react';

class Form extends Component{
    render(){
        return <div>
            <br />
            <form>
                <label for="">First Name:</label>
                <input type="text"></input>
                <br />
                <label for="">Last Name:</label>
                <input type="text"></input>
                <br />
                <label for="">Password</label>
                <input type="password"></input>
                <br />
                {/* <input type="textarea" width="250px" height="250px"></input> */}
            </form>
        </div>
    }
}

export default Form;