import React, {Component} from 'react';
import {SpaceContext} from '../Context/SpaceContext';

class WordsChecker extends Component {
    static contextType = SpaceContext;

   render() {
       return (
           <div style={{margin: '5%', justifyContent: 'center',  alignItems: 'center', textAlign: 'center'}}>
               <h1 style={{border: '1px solid', padding: '10%'}}> Streak: 100</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> WPM: 100</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> Accuracy: 100%</h1>
               <h1 style={{border: '1px solid', padding: '10%'}}> Words: {this.context.SpaceKeyCounter}</h1>
           </div>
       )
   }
}
export default WordsChecker


