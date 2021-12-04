import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from '../src/Components/Header';
import KeyBoard from '../src/Components/Keyboard';


import reportWebVitals from './reportWebVitals';

ReactDOM.render(<
    React.StrictMode >
        <Header />
        <KeyBoard />
    </React.StrictMode>,
    document.getElementById('root')
    
);

//reportWebVitals(console.log);