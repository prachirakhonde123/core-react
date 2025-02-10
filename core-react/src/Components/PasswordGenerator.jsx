import { useState, useCallback } from "react";

export default function PasswordGenerator(){

    const [length,setLength] = useState(8);
    const [numberAllowed,setNumberAllowed] = useState(false)
    const [charAllowed,setCharAllowed] = useState(false)
    const [password,setPassword] = useState('')

    const passwordGenerator = useCallback(()=>{
        let pass = ""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&(){}?-"

        for (let i = 1; i <= array.length; i++) {
            let char = Math.floor(Math.random() * str.length + 1)
            pass = str.charAt(char)       
        }

        setPassword(pass)

    },[length,numberAllowed,charAllowed,setPassword])

    return (
        <>
          <div className="w-full max-w-lg mx-auto text-center shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800">
            <h1 className="text-white text-center">Password Generator</h1>
            <div className="flex shadow rounded-lg overflow-hidden mb-4">
               <input type="text" className="outline-none w-full py-1 px-6 bg-white" value={password} placeholder="password" readOnly />
            </div>
          </div>
        </>
    )

}