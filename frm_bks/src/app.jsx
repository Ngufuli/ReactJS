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
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Course</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nicodemus</td>
                            <td>Computer Science</td>
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