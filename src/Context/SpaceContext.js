import {Component, createContext} from 'react'
import words_returned from '../Components/para.js'

export const SpaceContext = createContext();

export class SpaceKeyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            SpaceKeyCounter:0, 
            words_returned: words_returned,
            wordIndexCounter: 0
        }
    }

    wordCounter = (e) => {
        this.setState({ SpaceKeyCounter: this.state.SpaceKeyCounter + 1 })
    }

    wordIndex = (e) => {
        this.setState({ wordIndexCounter: this.state.wordIndexCounter + 1 })
    }
    
    render() {
        return (
            <SpaceContext.Provider value={{...this.state,   wordCounter: this.wordCounter, wordIndex: this.wordIndex}}>
                {this.props.children}
            </SpaceContext.Provider>
        );
    }
}