// // import React, {Component} from 'react';

// // class Body extends Component{
// //     state = {

// //     }

// //     render(){
// //         return<div>
// //             <ol>
// //                 <li>Moja</li>
// //                 <li>Mbili</li>
// //                 <li>Tatu</li>
// //                 <li>Nne</li>
// //                 <li>Tano</li>
// //             </ol>
// //         </div>
// //     }
// // }

// // export default Body;

// //======================FUNCTIONAL COMPONENTS============================================

// import React, {Component} from 'react';

// function Body(){
//     const firstName = "Nicodemus";
//     const lastName = "Ngufuli";
//     const collage = "Lovely Professional University";
//     const degree = "Btech Computer Science and Engineering";
//     const date = new Date();
//     const hours = date.getHours();
//     let timing;

//     if(hours < 12){
//         timing = "Good morning";
//     }
//     else if(hours >=12 && hours <= 17){
//         timing = "Good evening";
//     }
//     else{
//         timing = "Good night";
//     }

//     return(
//     <div>
//     <h2 style={{color: '#aff'}}>{timing}</h2>
//     <h3 style={{color: '#faf', backgroundColor: "#aff"}}>Hellow Mr. {firstName + " " + lastName}</h3>
//     <h3>{`Collage: ${collage}`}</h3>
//     <h3>{`Degree: ${degree}`}</h3>
//     </div>
//     );
// }

// export default Body;


import React from 'react';
import TodoItems from './TodoItems';
import Content from './Content';

function Body(){
    return <div>
        {/* <TodoItems />
        <TodoItems />
        <TodoItems />
        <TodoItems /> */}
        <Content 
            name="Nicodemus Ngufuli"
            imageUrl="https://images.unsplash.com/photo-1508672019048-805c876b67e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            phone="(91)-1549-0856"
            email="nico@navquery.com"
        />
        <hr />
        <Content 
            name="Ngufuli Ngufuli"
            imageUrl="https://images.unsplash.com/photo-1523306066304-752bcb36cd52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            phone="(255)7-5380-7743"
            email="we@work.com"
        />
    </div>
}

export default Body;