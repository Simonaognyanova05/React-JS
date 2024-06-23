var rootElement = document.getElementById('root');

var reactElement = React.createElement(
        'header',
        null,
        React.createElement(
                'h1',
                null,
                'Hello JSX!'
        ),
        React.createElement(
                'h2',
                null,
                'JSX is the best in world!'
        ),
        React.createElement(
                'p',
                null,
                'loremwfaffwe'
        ),
        React.createElement(
                'footer',
                null,
                'All rigth reserved \xA9'
        )
);

ReactDOM.render(reactElement, rootElement);