import React, { useCallback, useState } from "react";
import debounce from "debounce-promise";

function App() {
  const [searchPhrase, setSearchPhrase] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean>(false)

  const fetchResult = (data: any) => {
    if(data === 'hi') {
      setIsCorrect(true)
      console.log(data)
    } else {
      setIsCorrect(false)
      console.log(data)
    }
  };
  const dbounce = useCallback(debounce(fetchResult, 500), []);

  const handleChange = (e: any) => {
    const { value: nextPhrase } = e.target;
    setSearchPhrase(nextPhrase);
    dbounce(nextPhrase);
  };

  return (
    <div className="App">
      {/* <input type="text" onChange={handleChange} value={searchPhrase} /> */}
      <input 
        type="text" 
        onChange={(e) => {handleChange(e)}} 
        value={searchPhrase} 
       />
      <br/>
      {isCorrect ? <><span>yes</span></> : <><span>no</span></>}
    </div>
  );
}

export default App;
