import React, {Component} from 'react';
import words from './para.js'


class KeyBoard extends Component {
    render() {
        function choose_words(){
            const list_of_words = Array(words);
            let choosen_words_paragraph = " ";
            let choosen_words_array = [];

            for (let i = 0; i < 20; i++) {
                let element = Math.floor(Math.random()*1000)
                choosen_words_array.push(list_of_words[0][element]+ " ") ;

            }
            return choosen_words_array
        }
        let words_returned = choose_words()
        return (
            <>
                <div>
                    <p style={{border: '1px solid', fontSize: '40px'}} > 
                    {words_returned}
                    </p>
                </div>
                <div style={{ display: 'flex',justifyContent: 'center' }}>
                    
                    <h1 style={{ border: '1px solid', margin: '20px',padding: '10px' }}> Previous word</h1>
                    <h1 style={{border: '1px solid', margin: '20px' ,padding: '10px' }}> {words_returned[0]}</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> {words_returned[1]}</h1>
                </div>
                
            </>
        )
    }
}

export default KeyBoard;