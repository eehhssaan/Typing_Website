import React, {Component} from 'react';
import {SpaceContext} from '../Context/SpaceContext';
import Timer from './Timer';
import './Toggle/Toggle';


class Paragraph extends Component {
    static contextType = SpaceContext
    
    AnyKeyPressed = (e) => {
            this.context.WordPerMinuteCalculator(e)
            if (e.key===' '){
                this.context.wordCounter(e)
                this.context.wordIndex(e)
                
                    this.context.CorrectWords(document.getElementById("input_section").value.trim() === this.context.wordsReturned[this.context.wordIndexCounter].trim())
        
                document.getElementById("input_section").value = ''
            }
    }
    

    InputChange = input => {
        document.getElementById("keyboard").innerHTML = `Last Key: ${input.toUpperCase()}`;
        this.context.AccuracyCalculator()
      };

    render() {
        return (
            <>
                <div>
                    <p style={{border: '1px solid', fontSize: '30px', padding: '10px',marginBottom: '0'}} > 
                    {this.context.wordsReturned}
                    </p>
                </div>
                <div style={{ display: 'flex',justifyContent: 'center' }} >
                    <h1 style={{ border: '1px solid', margin: '20px',padding: '10px' }} > {this.context.wordsReturned[this.context.wordIndexCounter - 1]}</h1>
                    <h1 style={{border: '1px solid', margin: '20px' ,padding: '10px' }} > {this.context.wordsReturned[this.context.wordIndexCounter]}</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }}> {this.context.wordsReturned[this.context.wordIndexCounter+1]}</h1>
                    <h1 style={{ border: '1px solid', margin: '20px' ,padding: '10px' }} id="timer"> <Timer/></h1>

                    <button style={{ border: '1px solid', margin: '20px' ,padding: '10px', backgroundColor: 'Transparent'}}> Restart</button> 
                </div>
               <div style={{padding: '10px',marginBottom: '0', height: '60px'}}>
               <input  
                    onChange={ (e) => this.InputChange(e.nativeEvent.data)} 
                    onKeyPress={ (e) => this.AnyKeyPressed(e.nativeEvent)} 
                    id= 'input_section'
                    style={{
                    border: '1px solid',
                    width: '100%',
                    height:'100%',
                    backgroundColor: 'Transparent',
                    }}
                />
                </div>
            </>
        )
    }
}

export default Paragraph;