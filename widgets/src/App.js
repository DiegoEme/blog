import React from 'react';
import Accordion from './components/Accordion';

const items = [
    {
        title: "What is React",
        content: "React is a front end framework"
    },
    {
        title: "Why use React",
        content: "Because it is beautiful"
    },
    {
        title: "How to use React",
        content: "By creating compoonents"
    }
]

const App = () => {
    return (
        <div>
            <Accordion items= {items}/>
        </div>
    )
}

export default App;