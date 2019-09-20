const one = document.getElementById('root');
const issues = [
    {
        id:1, status: 'Open', owner: 'McKieran',
        created: new Date('2019-11-21'), effort: 5, completionDate: undefined,
        title: 'Error in console when clickinga Add'
    },
    {
        id: 2, status: 'Assigned', owner: 'Derrick',
        create: new Date('2019-10=17'), effort: 12, completionDate: new Date('2020-10-19'),
        title: 'Missing bottom border on panel'
    }
];

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1>This is the header</h1>
            </div>
        );
    }
}
class Body extends React.Component{
    render(){
        const borderStyle = {
            border: '1px solid silver',
            padding: 6
        }
        return(
            <div>
                <table style={{borderCollapse: 'collapse'}}>
                    <thead>
                        <tr>
                            <th style={borderStyle}>Name</th>
                            <th style={borderStyle}>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td style={borderStyle}>{this.props.name}</td>
                            <td style={borderStyle}>{this.props.degree}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Issue extends React.Component{
    render(){
        
        return (
            <Fragment>
            <h6>Here is the json data</h6>
        </Fragment>
        );
    }
}

class Cmp extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <Body name="Nicodemus Ngufuli" degree="Computer Science and Engineering"/>
                <hr/>
                <Issue issues={issues}/>
                <hr/>
            </div>
        );
    }
}

ReactDOM.render(<Cmp/>, one);