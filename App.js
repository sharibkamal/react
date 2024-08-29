// const heading = React.createElement(
//     'h1',
//     {id: 'heading'},
//     'Hello World from React');


const parent = React.createElement(
    'div',
    {id: 'parent'}, [
    React.createElement(
        'div',
        {id: 'child'}, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag')
    ]),
    React.createElement(
        'div',
        {id: 'child2'}, [
        React.createElement('h1', {}, 'I am an h1 tag'),
        React.createElement('h2', {}, 'I am an h2 tag')
    ])
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));
// console.log(root);
root.render(parent);