import React, {Component} from 'react';

class Header extends Component{
    render() {
        const headerStyle ={
            backgroundColor: '#7c9bcc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px',
            border: '10px solid',
            padding: '50px'
        }
        return (
            <h1 style={headerStyle}> This is the Heading</h1>
        )
    }
}

export default Header;