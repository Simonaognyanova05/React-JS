let rootElement = document.getElementById('root');

let reactElement = React.createElement(
    'header', 
    { className: 'site-header'}, 
    React.createElement('h1', { id: 'main-heading' }, 'Hello React!'),
    React.createElement('h2', {}, 'React is the best!')
);

ReactDOM.render(reactElement, rootElement);