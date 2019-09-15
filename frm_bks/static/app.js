

class Home extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'This is the beginning!'
            )
        );
    }
}
ReactDOM.render(React.createElement(Home, null), document.getElementById('contents'));