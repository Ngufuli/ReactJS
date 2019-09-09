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
    const firstName = "Nicodemus";
    const lastName = "Ngufuli";
    const collage = "Lovely Professional University";
    const degree = "Btech Computer Science and Engineering";

    return(
    <div>
    <h2>Hellow Mr. {firstName + " " + lastName}</h2>
    
    </div>
    );
}

export default Body;