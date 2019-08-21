import React, {Component} from 'react';

class Body extends Component{
    constructor(){
        super();

        this.state = {
            one: "These are the changes to be made!"
        }
        // binding will be done in here, inside the constructor(it preffered in here than in the render method)
        this.change = this.change.bind(this);
    }

    change(){
        this.setState({
            one: "Just made changes!"
        })
    }

    render(){
        return <div>
            <h2>{this.state.one}This is header two</h2>
            <h2>{this.state.one1}The other second header</h2>
            <br/>
            <p>This is React This is React This is React This is React</p>
            <span><label>Username: </label></span>
            {/* <form><input type="text"></input></form> */}
            <h1>{this.props.name}</h1>
            {/* <button onClick={this.change.bind(this)}>Click Here</button> */}
            {/* or */}
            {/* <button onClick={() => {this.change()}}>Click Here again</button> */}
            <button onClick={this.change}>Click here!</button>
        </div>
    }
}

export default Body;