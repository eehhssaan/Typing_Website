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
                this.context.addWord(e)
            }
    }
    
    InputChange = input => {
        document.getElementById("keyboard").innerHTML = "Last Key: "+ (typeof input=='string'? `${input.toUpperCase()}`: input);
        this.context.AccuracyCalculator()
    };

    countLines = (e) =>  {
        let el = document.getElementById('paragraph');
        let style = window.getComputedStyle(el, null);
        let height = parseInt(style.getPropertyValue("height"));
        let font_size = parseInt(style.getPropertyValue("font-size"));
        let line_height = parseInt(style.getPropertyValue("line-height"));
        let box_sizing = style.getPropertyValue("box-sizing"); 
        if(isNaN(line_height)) line_height = font_size * 1.2;

        console.log(height,line_height)
        let lines = Math.ceil(height / line_height);
        alert("Lines: " + lines);
        return lines;
    };

    render() {
        return (
            <>
                <div onLoad={console.log('LOADED')} onClick={ (e) => this.countLines(e)} >
                    <div style={{border: '1px solid', fontSize: '30px', padding: '10px',marginBottom: '0', lineHeight: '1'}} id="paragraph"  onLoad ={ () => this.countLines()}> 
                    {this.context.wordsReturned}
                    </div>
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
                    fontSize: '30px',
                    }}
                />
                </div>
            </>
        )
    }
}

export default Paragraph;