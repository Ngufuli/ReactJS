const one = document.getElementById('root');
const issues = [{
    id: 1, status: 'Open', owner: 'McKieran',
    created: new Date('2019-11-21'), effort: 5, completionDate: undefined,
    title: 'Error in console when clickinga Add'
}, {
    id: 2, status: 'Assigned', owner: 'Derrick',
    create: new Date('2019-10=17'), effort: 12, completionDate: new Date('2020-10-19'),
    title: 'Missing bottom border on panel'
}];

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
                            this.props.name
                        ),
                        React.createElement(
                            'td',
                            { style: borderStyle },
                            this.props.degree
                        )
                    )
                )
            )
        );
    }
}

class Issue extends React.Component {
    render() {

        return React.createElement(
            'div',
            null,
            React.createElement('span', { issues: issues })
        );
    }
}

class Cmp extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(Home, null),
            React.createElement(Body, { name: 'Nicodemus Ngufuli', degree: 'Computer Science and Engineering' }),
            React.createElement('hr', null),
            React.createElement(Issue, { issues: issues }),
            React.createElement('hr', null)
        );
    }
}

ReactDOM.render(React.createElement(Cmp, null), one);