// import React, {Component} from 'react';

// class Body extends Component{
//     state = {

//     }

//     render(){
//         return<div>
//             <ol>
//                 <li>Moja</li>
//                 <li>Mbili</li>
//                 <li>Tatu</li>
//                 <li>Nne</li>
//                 <li>Tano</li>
//             </ol>
//         </div>
//     }
// }

// export default Body;

//======================FUNCTIONAL COMPONENTS============================================

import React, {Component} from 'react';

function Body(){
    return <div>
        <h2>Nicodemus Ngufuli</h2>
        <p>I like exploring the world and visiting different places arround the world</p>
        <p>Below are some of the places that I aspire to visit some day in the near future</p>
        <ol>
            <li>Russia</li>
            <li>Japan</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>Canary Islands</li>
        </ol>
    </div>
}

export default Body;