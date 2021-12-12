import {Component, createContext} from 'react'
import wordsReturned from '../Components/para.js'

export const SpaceContext = createContext();

export class SpaceKeyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SpaceKeyCounter:0, 
            wordsReturned: wordsReturned,
            wordIndexCounter: 0,
            CorrectWordsCounter: 0,
            wordAccuracy:0
        }
    }

    AccuracyCalculator = (e) => {
        if ( this.state.CorrectWordsCounter>0 && this.state.SpaceKeyCounter> 0){
            this.setState({ wordAccuracy: Math.round((this.state.CorrectWordsCounter/this.state.SpaceKeyCounter) *100)})
        }
    }

    wordCounter = (e) => {
        this.setState({ SpaceKeyCounter: this.state.SpaceKeyCounter + 1 })
    }

    wordIndex = (e) => {
        this.setState({ wordIndexCounter: this.state.wordIndexCounter + 1 })
    }

    CorrectWords= (e)=> {
        this.setState({ CorrectWordsCounter: this.state.CorrectWordsCounter + 1 })
    }

    
    render() {
        return (
            <SpaceContext.Provider value={{
                ...this.state,   
                wordCounter: this.wordCounter, 
                wordIndex: this.wordIndex, 
                CorrectWords: this.CorrectWords,
                AccuracyCalculator: this.AccuracyCalculator
                }}>
                {this.props.children}
            </SpaceContext.Provider>
        );
    }
}