var contentNode = document.getElementById('contents');
var component = React.createElement(
       "div",
       null,
       React.createElement(
              "h2",
              null,
              "Welcome to Nico's page"
       ),
       React.createElement(
              "p",
              null,
              "Nicodemus Peter Ngufuli is a full fledged full stack web developer"
       ),
       React.createElement(
              "p",
              null,
              "Computer Science ",
              React.createElement(
                     "small",
                     null,
                     "&"
              ),
              " Engineering"
       ),
       React.createElement(
              "p",
              null,
              React.createElement(
                     "a",
                     { href: "other.html" },
                     "Click Me"
              )
       )
);
// A simple JSX component    
ReactDOM.render(component, contentNode); //  Render the component inside  the content Node