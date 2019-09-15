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
        const borderStyle = {
            border: '1px solid silver',
            padding: 6
        };
        return React.createElement(
            'div',
            null,
            React.createElement(
                'table',
                { style: { borderCollapse: 'collapse' } },
                React.createElement(
                    'thead',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            { style: borderStyle },
                            'Name'
                        ),
                        React.createElement(
                            'th',
                            { style: borderStyle },
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
                            { style: borderStyle },
                            'Nicodemus'
                        ),
                        React.createElement(
                            'td',
                            { style: borderStyle },
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