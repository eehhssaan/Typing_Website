import React, {Component} from 'react';
import {SpaceContext} from '../Context/SpaceContext';

class WordsChecker extends Component {
    static contextType = SpaceContext;

   render() {
       return (
           <div style={{margin: '5%', justifyContent: 'center',  alignItems: 'center', textAlign: 'center'}}>
               <h1 style={{border: '1px solid', padding: '10%'}}> Streak: {this.context.streak}</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> WPM: {this.context.WordPerMinute}</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> Accuracy: {this.context.wordAccuracy}%</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> Words: {this.context.SpaceKeyCounter}</h1>
           </div>
       )
   }
}
export default WordsChecker


