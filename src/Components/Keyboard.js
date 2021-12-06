import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

class KeyBoard extends Component {
  commonKeyboardOptions = {
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightTextColor: "red",
    physicalKeyboardHighlightBgColor: "#9ab4d0"
  };

  InputChange = input => {
    console.log(input);
    document.getElementById("keyboard").innerHTML = `Last Key: ${input.toUpperCase()}`;
  };
  


    render(){
      return (
        <div>
            <h1 id= 'keyboard' style={{
              backgroundColor: '#7c9bcc',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '0px',
              border: '10px solid',
           }}> 
           Please Type...  
           </h1>

          <input  
            onChange={ (e) => this.InputChange(e.nativeEvent.data)} 
            style={{
              border: '10px solid',
              paddingBottom: '5%',
              margin: '0px',
              width:'98.2%',
              height:'50%',
              fontSize: '25px'
            }}
          />
          <Keyboard 
            {...this.commonKeyboardOptions}
          />
        </div>
      );
    }
  }

  export default KeyBoard

