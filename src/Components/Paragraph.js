import React, {Component} from 'react';
import {text} from '../static/words.txt'

class KeyBoard extends Component {

    render() {
        return (
            <>
                <div>
                    <h1 style={{
                        border: '1px solid'
                    }}
                    > 
                    This is a long paragraph.
                    </h1>
                </div>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <h1 style={{ border: '1px solid', margin: '20px',padding: '10px' }}> Previous Word</h1>
                    <h1 style={{border: '1px solid', margin: '20px' ,padding: '10px' }}> Current Word</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> Next Word</h1>
                </div>
                
            </>
        )
    }
}

export default KeyBoard;