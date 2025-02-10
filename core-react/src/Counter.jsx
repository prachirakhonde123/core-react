import React,{useState} from 'react'

export default function Counter() {
  const [counter,setCounter] = useState(0)
  function IncreaseCounter(){
     setCounter(counter+1)
  }

  function DecreaseCounter(){
    counter <= 0 ? setCounter(0) : setCounter(counter-1)
    // if(counter <= 0){
    //     setCounter(0)
    // }else{
    //    setCounter(counter-1)
    // }
 }
  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={IncreaseCounter}>Increase</button>
      <button onClick={DecreaseCounter}>Decrease</button>

    </div>
  )
}
