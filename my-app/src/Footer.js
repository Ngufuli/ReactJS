import React, {Component} from 'react';

class Footer extends Component{
    constructor(){
        console.log(`Contructor has been loaded`);
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

    static getDerivedStateFromProps(props, state){
        console.log(`getDerivedStateFromProps called`);
        return null;
    }


//Used to decide if the render method should execute or not
    shouldComponentUpdate(nextprops, nextstate){
        console.log(`Next state ${nextstate}`);
        console.log(`Current state ${this.state}`)
        return true;
    }

    render(){
        console.log(`Render method has been executed`);
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