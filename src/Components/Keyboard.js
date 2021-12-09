import React, {Component} from 'react';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';
import Paragraph from './Paragraph.js'

class KeyBoard extends Component {
  commonKeyboardOptions = {
    physicalKeyboardHighlight: true,
    physicalKeyboardHighlightTextColor: "red",
    physicalKeyboardHighlightBgColor: "#9ab4d0"
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

          <Keyboard 
            {...this.commonKeyboardOptions}
          />
        </div>
      );
    }
  }

  export default KeyBoard

