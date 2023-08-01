// const a = React.createElement('h1', { "id": "heading" }, 'Hello World'); // three tags html tag object what contnent we needs to put inside it


const b = React.createElement('h2', {
    "id": "hading2"
}, [React.createElement('h1', {}, "1 Child Element in const b"),
    React.createElement('h3', {}, "2 Child Element in const b"),
]);
// console.log(a);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(b);