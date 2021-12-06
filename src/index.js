import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/Components/Header';
import KeyBoard from '../src/Components/Keyboard';
import Paragraph from '../src/Components/Paragraph';
import Input from '../src/Components/Input'


import reportWebVitals from './reportWebVitals';

ReactDOM.render(<
    React.StrictMode >
    <Header />
    <div style={{width: '70%'}}> 
        <Paragraph/>
        <KeyBoard />
    </div>
    </React.StrictMode>,
    document.getElementById('root')
    
);

//reportWebVitals(console.log);