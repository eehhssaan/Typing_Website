import React, {Component} from 'react';
import DarkModeToggle from '../Components/Toggle/Toggle'


class Navbar extends Component{
    render() {
        const headerStyle ={
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px',
            border: '10px solid',
            padding: '40px',
        }
        return (
            <div style={{ display: 'flex'}}>
                <h1 style={headerStyle}> This is the Navbar <DarkModeToggle/></h1>
            </div>
        )
    }
}

export default Navbar;