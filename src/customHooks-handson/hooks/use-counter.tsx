import { useState, useEffect } from "react";

const useCounter = (forward=true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    //   setCounter((prevCounter: any) => prevCounter + 1);
    // setCounter(counterUpdateFn());
    if(forward){
        setCounter((prevCounter: any) => prevCounter + 1); 
    }else{
        setCounter((prevCounter: any) => prevCounter - 1);
    }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;
