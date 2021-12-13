import React from 'react';


function Timer() {
    const [seconds, setSeconds] = React.useState(60);
  
    React.useEffect(() => {
      if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
      } else {
        setSeconds('BOOOOM!');
      }
    });
  
    return (
      <div className="App">
        <div>
          {seconds}
        </div>
      </div>
    );
  }

  export default Timer;