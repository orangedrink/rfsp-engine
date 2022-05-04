import {useState, useEffect} from 'react'

function Hello() {
    const [counter, setCounter] = useState(0);
    const maxCount = 1000
    useEffect(() => {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 100);
  
      return () => clearInterval(interval);
    }, []);
    localStorage.setItem('test', 'hello')
    return (
      <div className="App">
        <header className="App-header">
          <p>
           Hello
           <span style={{opacity:counter/maxCount}}>?</span>
          </p>
        </header>
      </div>
    );
}

export default Hello