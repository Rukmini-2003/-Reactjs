import React ,{ useState }from 'react';
function Counter()
{
    const[count,SetCount]=useState(0);
    function increment()
    {
        SetCount(count+1);
    };
    function decrement()
    {
        SetCount(count-1);
    };
    return(
        <div>
        <p>count:{count}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
       </div>
    );
}
export default Counter;
