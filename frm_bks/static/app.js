const one = document.getElementById('root');

class Home extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'This is the header'
            )
        );
    }
}
class Body extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'table',
                null,
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'Name'
                        ),
                        React.createElement(
                            'th',
                            null,
                            'Course'
                        )
                    )
                ),
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            null,
                            'Nicodemus'
                        ),
                        React.createElement(
                            'td',
                            null,
                            'Computer Science'
                        )
                    )
                )
            )
        );
    }
}

class Cmp extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Home, null),
            React.createElement(Body, null)
        );
    }
}

ReactDOM.render(React.createElement(Cmp, null), one);