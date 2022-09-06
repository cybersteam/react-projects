import React, { useEffect, useState } from 'react';

const ClosuresInReact = () => {
  //here we make a variable called count that can also be changed to setCount value later
  // this variable count uses the useState hook to keep track of changes in the count variable
  const [count, setCount] = useState(0);


  const incrementCount = () => {
    return(
        setCount(prevCount => + prevCount + 1)
    );
  };

  useEffect(() => {
    //timeout of 1000 ms
    const timer = setTimeout(() => {
      //an incrementing JS function
      incrementCount();
    }, 1000);
    return () => {
      clearTimeout(timer);
    };
  }, [incrementCount]);

  return(
    <div>
        {`Timer started: ${count}`}
    </div>
  ) 
};


export default ClosuresInReact;