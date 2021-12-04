import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import './Keyboard.css'


class KeyBoard extends Component {
  onKeyPress = (button) => {
    window.addEventListener('keydown', function (e) {
      document.getElementById('keypressed').innerHTML = `You pressed: ${e.key.toUpperCase()}`;

      setTimeout(function(){ document.getElementById('keypressed').style.backgroundColor = 'red';}, 30);
      setTimeout(function(){ document.getElementById('keypressed').style.backgroundColor = 'white';}, 60);

    }, true);
  }


    
  
    render(){
      return (
        
        <div style={
          {width:'70%', margin:'10px', padding: '0px'}
          }>
           <h1 id= 'keypressed' style={{
            backgroundColor: '#7c9bcc',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            margin: '0px',
            border: '10px solid',
           }}> 
           Please Type:  
           </h1>
          <Keyboard 
            onKeyPress={this.onKeyPress}
            theme={"hg-theme-default myTheme1"}
          />
        </div>
      );
    }
  }

  export default KeyBoard