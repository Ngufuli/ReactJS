const one = document.getElementById('root');

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
                            <td style={borderStyle}>Nicodemus</td>
                            <td style={borderStyle}>Computer Science</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

class Cmp extends React.Component{
    render(){
        return(
            <div>
                <Home/>
                <Body/>
            </div>
        );
    }
}

ReactDOM.render(<Cmp/>, one);