let rootElement = document.getElementById('root');

let reactElement = React.createElement(
    'header', 
    {}, 
    React.createElement('h1', {}, 'Hello React!'),
    React.createElement('h2', {}, 'React is the best!')
);

ReactDOM.render(reactElement, rootElement);