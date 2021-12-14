import React, {Component} from 'react';
import DarkModeToggle from '../Components/Toggle/Toggle'
import './Header.css'
import logo from '../images/logo.png'


class Navbar extends Component{
    render() {
        const headerStyle ={
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px',
            border: '10px solid',
            padding: '40px',
            width: '100%',
            textAlign: 'center',

        }
        const divStyle = {
            width: '100%',
            display: 'flex',
            backgroundColor:'rgb(101, 137, 173)'
        }

        return (
            <div style={divStyle}>
                 <img 
                        src={logo}
                        style={{border: '1px solid', height: '150px', width: '10%',  fontWeight: 'bold'}}
                    />
                <h1 style={headerStyle}> 
                    This is the Navbar 
                    <DarkModeToggle/>
                </h1>
                <button style={{border: '1px solid', height: '150px', width: '10%', backgroundColor:'Transparent', fontWeight: 'bold', border: '0px'}}>
                    Login
                </button>
            </div>
        )
    }
    
}

export default Navbar;