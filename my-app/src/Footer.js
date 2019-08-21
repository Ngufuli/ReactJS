import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        super();
        this.state = {
            desc: "This is the description"
        }
    }

    ChangeText(){
        this.setState({
            desc: "Changes have been made."
        })
    }
    render(){
        return <div>
            <h3>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
                <li>Four</li>
            </h3>
            <h3>
                <ul>
                    <li>{this.state.desc} (Hello world)</li>
                </ul>
            </h3>
            <button onClick={() => this.ChangeText()}>Change text</button>
            <div>
                <br/>
            </div>
        </div>
    }
}

export default Footer;