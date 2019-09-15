class issueFilter extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                null,
                'This is the placeholder for issue filter'
            )
        );
    }
}

class issueTable extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'This is the placeholder for table issues'
            )
        );
    }
}

class issueForm extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                null,
                'This is the placeholder for add entry form'
            )
        );
    }
}

class issueList extends React.Component {
    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h1',
                null,
                'Issue Filter'
            ),
            React.createElement('issueFilter', null),
            React.createElement('hr', null),
            React.createElement(
                'h1',
                null,
                'Issue Table'
            ),
            React.createElement('issueTable', null),
            React.createElement('hr', null),
            React.createElement(
                'h1',
                null,
                'Issue Form'
            ),
            React.createElement('issueForm', null)
        );
    }
}

ReactDOM.render(React.createElement('issueList', null), document.getElementById('root'));