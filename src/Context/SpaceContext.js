import {Component, createContext} from 'react'
import wordsReturned, {addMoreWord} from '../Components/para.js'

export const SpaceContext = createContext();

export class SpaceKeyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SpaceKeyCounter:0, 
            wordsReturned: wordsReturned,
            wordIndexCounter: 0,
            CorrectWordsCounter: 0,
            wordAccuracy:0,
            TotalKeys:0,
            WordPerMinute:0,
            streak: 0,
            currentLine:[],
            nextLine: [],
        }
    }
    WordPerMinuteCalculator = (e) => { 
        this.setState({TotalKeys:this.state.TotalKeys + 1})
        this.setState({WordPerMinute: Math.round((this.state.TotalKeys/5)/1)})
    }
    addWord= (e)=>{
        addMoreWord()

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
        if (e){
            this.setState({ CorrectWordsCounter: this.state.CorrectWordsCounter + 1})
            this.setState({streak: this.state.streak + 1})
        } else {
            this.setState({streak: 0})

        }
    }

    
    render() {
        return (
            <SpaceContext.Provider value={{
                ...this.state,   
                wordCounter: this.wordCounter, 
                wordIndex: this.wordIndex, 
                CorrectWords: this.CorrectWords,
                AccuracyCalculator: this.AccuracyCalculator,
                WordPerMinuteCalculator: this.WordPerMinuteCalculator,
                addWord : this.addWord,
                }}>
                {this.props.children}
            </SpaceContext.Provider>
        );
    }
}