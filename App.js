// const a = React.createElement('h1', { "id": "heading" }, 'Hello World'); // three tags html tag object what contnent we needs to put inside it

import React from 'react';
import ReactDOM from 'react-dom/client'


const title = ()=>(
    <div>
        <h1>hello</h1>
    </div>

);

const Compo = ()=>(

    <div>
        {title()}
        <h1>Component</h1>
    </div>

);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Compo/>);
