import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

const posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'How are you doing?', likesCount: 11},
    {id: 3, message: 'Hey yo!', likesCount: 14},
];
const dialogs = [
    {id: 1, name: 'Veronika'},
    {id: 2, name: 'Timofei'},
    {id: 3, name: 'Dashka'},
    {id: 4, name: 'Monya'},
    {id: 5, name: 'Cherry'},
    {id: 6, name: 'Tilda'},
    {id: 7, name: 'Zephyr'},
];
const messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you doing?'},
    {id: 3, message: 'Hey yo!'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App posts={posts} dialogs={dialogs} messages={messages}/>
    </React.StrictMode>
);

