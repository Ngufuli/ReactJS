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
    return(
    <div className='backGroundColor'><input type="checkbox" name="" value=""></input>
    <p>This is the checkbox</p>

    <input type="checkbox" name="" value=""></input>
    <p>This is the checkbox</p>

    <input type="checkbox" name="" value=""></input>
    <p>This is the checkbox</p>

    <input type="checkbox" name="" value=""></input>
    <p>This is the checkbox</p>
    
    </div>
    );
}

export default Body;