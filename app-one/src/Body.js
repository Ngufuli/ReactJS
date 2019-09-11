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
        <Content />
        <Content />
    </div>
}

export default Body;