var contentNode = document.getElementById('contents');
var component = <div>
       <h2>Welcome to Nico's page</h2>
       <p>Nicodemus Peter Ngufuli is a full fledged full stack web developer</p>
       
       <p>Computer Science <small>&</small> Engineering</p>
       <p><a href="other.html">Click Me</a></p>

   </div>; 
     // A simple JSX component    
 ReactDOM.render(component, contentNode);  //  Render the component inside  the content Node