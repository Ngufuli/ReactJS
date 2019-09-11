import React from 'react';



function Content(props){
    console.log(props);
const    styles = {
        width: '150px',
        height: '125px',
        padding: '3px',
        border: '3px',
        margin: '3px dotted red'
    }
    return(
        <div>
            <h4>{props.name}</h4>
            <img src={props.imageUrl} />
            <p>Phone: {props.phone}</p>
            <p>email: {props.email}</p>
            {/* <img style={styles} src="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"/> */}
        </div>
    );
}

export default Content;