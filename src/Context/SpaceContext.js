import {Component, createContext} from 'react'
export const SpaceContext = createContext();

export class SpaceKeyProvider extends Component {
    constructor(props) {
        super(props);
        this.state = {SpaceKeyCounter:0}
    }

    wordCounter = (e) => {
        this.setState({ SpaceKeyCounter: this.state.SpaceKeyCounter + 1 })
    }
    render() {
        return (
            <SpaceContext.Provider value={{...this.state,   wordCounter: this.wordCounter}}>
                {this.props.children}
            </SpaceContext.Provider>
        );
    }
}