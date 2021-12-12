import React, {Component} from 'react';
import {SpaceContext} from '../Context/SpaceContext';

class Paragraph extends Component {
    static contextType = SpaceContext
    
    SpaceKeyPressed = (e) => {
            if (e.key===' '){
                document.getElementById("input_section").value = ''
                // this.context.SpaceKeyCounter = this.context.SpaceKeyCounter + 1
                this.context.wordCounter(e)
                this.context.wordIndex(e)
            }
    }

    InputChange = input => {
        document.getElementById("keyboard").innerHTML = `Last Key: ${input.toUpperCase()}`;
      };

    render() {
        return (
            <>
                <div>
                    <p style={{border: '1px solid', fontSize: '40px'}} > 
                    {this.context.words_returned}
                    </p>
                </div>
                <div style={{ display: 'flex',justifyContent: 'center' }} >
                    <h1 style={{ border: '1px solid', margin: '20px',padding: '10px' }} > {this.context.words_returned[this.context.wordIndexCounter - 1]}</h1>
                    <h1 style={{border: '1px solid', margin: '20px' ,padding: '10px' }} > {this.context.words_returned[this.context.wordIndexCounter]}</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> {this.context.words_returned[this.context.wordIndexCounter+1]}</h1>
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