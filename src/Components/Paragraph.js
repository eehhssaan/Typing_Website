import React, {Component ,useState} from 'react';
import words from './para.js'
import {SpaceContext} from '../Context/SpaceContext';

class Paragraph extends Component {
    constructor(props) {
        super(props);
        this.state = { index: 0 , words_returned: '' };
    }
    static contextType = SpaceContext
    
    SpaceKeyPressed = (e) => {
            if (e.key===' '){
                this.setState({ index: this.state.index+1 });
                document.getElementById("input_section").value = ''
                // this.context.SpaceKeyCounter = this.context.SpaceKeyCounter + 1
                this.context.wordCounter(e)
            }
    }

     choose_words = () => {
        const list_of_words = Array(words);
        let choosen_words_array = [];

        for (let i = 0; i < 20; i++) {
            let element = Math.floor(Math.random()*1000)
            choosen_words_array.push(list_of_words[0][element]+ " ") ;
        }
        return choosen_words_array
    }

    InputChange = input => {
        document.getElementById("keyboard").innerHTML = `Last Key: ${input.toUpperCase()}`;
      };

    words_returned = this.choose_words()

    render() {
        return (
            <>
                <div>
                    <p style={{border: '1px solid', fontSize: '40px'}} > 
                    {this.words_returned}
                    </p>
                </div>
                <div style={{ display: 'flex',justifyContent: 'center' }} >
                    <h1 style={{ border: '1px solid', margin: '20px',padding: '10px' }} > {this.words_returned[this.state.index-1]}</h1>
                    <h1 style={{border: '1px solid', margin: '20px' ,padding: '10px' }} > {this.words_returned[this.state.index]}</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> {this.words_returned[this.state.index+1]}</h1>
                    <button style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> Restart</button> 
                </div>
                <input  
                    onChange={ (e) => this.InputChange(e.nativeEvent.data)} 
                    onKeyPress={ (e) => this.SpaceKeyPressed(e.nativeEvent)} 
                    id= 'input_section'
                    style={{
                    border: '10px solid',
                    paddingBottom: '5%',
                    margin: '0px',
                    width:'98.2%',
                    fontSize: '25px'
                    }}
                />
            </>
        )
    }
}

export default Paragraph;