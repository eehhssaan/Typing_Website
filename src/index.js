import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from '../src/Components/Header';
import KeyBoard from '../src/Components/Keyboard';
import Paragraph from '../src/Components/Paragraph';
import WordsChecker from '../src/Components/WordsChecker';
import {SpaceKeyProvider} from './Context/SpaceContext';

ReactDOM.render(
    <React.StrictMode>
        <Header />
        <div style={{display: 'flex',  padding: '1%'}}> 
            <SpaceKeyProvider>
                <div style={{width: '70%'}}>
                    <Paragraph/>
                    <KeyBoard />
                </div>
                <div style={{width: '30%'}}>
                    <WordsChecker/>
                </div>
            </SpaceKeyProvider>
        </div>
    </React.StrictMode>,
    document.getElementById('root')
);

