import React, {Component} from 'react';
import styles from './App.module.css';

const size = {
    fontSize: '50px',
    color: 'red'
}

function Header(props){
    const {name, desc} = props;
    function clickMe(){
        console.log("Function is called")
    }

    return <div className="App-header">
        <h1 className={styles.backGroundColor}>{desc}Welcome to NQ Media</h1>
        <h1>{name}Other header</h1>
        <span>Home</span> <span>Services</span> <span style={size}><small>NQ Prime</small></span> <span>Contact us</span>
        <button onClick={clickMe}>Click this button</button>
    </div>
}

export default Header;