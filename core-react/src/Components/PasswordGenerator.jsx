import { useState, useCallback, useEffect, useRef } from "react";

export default function PasswordGenerator(){

    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false)
    const [charAllowed,setCharAllowed] = useState(false)
    const [password,setPassword] = useState('')
    const passwordRef = useRef(null) 

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&(){}?-"

        for (let i = 1; i <= length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass += str.charAt(char)       
        }

        setPassword(pass)

    },[length,numberAllowed,charAllowed])

    const copyPasswordToClip = useCallback(()=>{
      passwordRef.current?.select()
      passwordRef.current?.setSelectionRange(0,4) // to copy particular number of char , here text will copy upto length 4
      window.navigator.clipboard.writeText(password)
    },[password])

    useEffect(()=>{
      passwordGenerator()
    },[length,numberAllowed,charAllowed])

    return (
        <>
          <div className="w-full max-w-lg mx-auto text-center shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
            <h1 className="text-white text-center mb-2">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
               <input 
               type="text" 
               className="outline-none w-full py-2 px-6 bg-white text-center" 
               value={password} 
               placeholder="Password" 
               readOnly
               ref={passwordRef}
               />
               <button 
               className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
               onClick={copyPasswordToClip}
               >Copy</button>
            </div>
            <div className="flex text-sm gap-x-2">
               <div className="flex items-center gap-x-1">
                   <input 
                   type="range" 
                   min={6} max={50} 
                   value={length} 
                   className="cursor-pointer"
                   onChange={(e)=>setLength(e.target.value)}
                   />
                   <label>Length : {length}</label>
               </div>
               <div className="flex items-center gap-x-1">
                  <input
                    type="checkbox"
                    defaultChecked = {numberAllowed}
                    id="numberInput"
                    onChange={()=>{
                      setNumberAllowed((prev) => !prev)
                    }}
                  />
                  <label>Numbers</label>
               </div>
               <div className="flex items-center gap-x-1">
                  <input
                   type="checkbox"
                   defaultChecked = {charAllowed}
                   onChange={()=>{
                     setCharAllowed((prev)=>!prev)
                   }}
                  />
                  <label>Characters</label>
               </div>
            </div>
          </div>
        </>
    )

}