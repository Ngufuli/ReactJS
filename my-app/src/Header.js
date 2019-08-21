import React, {Component} from 'react';

function Header(){
    function clickMe(){
        console.log("Function is called")
    }

    return <div className="App-header">
        <h1>Welcome to NQ Media</h1>
        <span>Home</span> <span>Services</span> <span><small>NQ Prime</small></span> <span>Contact us</span>
        <button onClick={clickMe}>Click this button</button>
    </div>
}

export default Header;