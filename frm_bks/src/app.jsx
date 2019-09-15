const out = document.getElementById("root");

class issueFilter extends React.Component{
    render(){
        return(
            <div>
                <h2>This is the placeholder for issue filter</h2>
            </div>
        );
    }
}

class issueTable extends React.Component{
    render(){
        return(
            <div>
                <h3>This is the placeholder for table issues</h3>
            </div>
        );
    }
}

class issueForm extends React.Component{
    render(){
        return(
            <div>
                <h3>This is the placeholder for add entry form</h3>
            </div>
        );
    }
}

class issueList extends React.Component{
    render(){
        return(
            <div>
                <h1>Issue Filter</h1>
                <issueFilter />
                <hr/>
                <h1>Issue Table</h1>
                <issueTable />
                <hr/>
                <h1>Issue Form</h1>
                <issueForm />
            </div>
        );
    }
}

ReactDOM.render(<issueList />, out);