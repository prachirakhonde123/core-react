import { useState } from "react";
import '../index.css'

export default function BgChanger (){
    const [color,setColor] = useState("olive")

    return (
        <div className="w-full h-screen duration-200"
              style={{backgroundColor : color}}
        >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "red", cursor:"pointer"}} onClick={()=>setColor('red')}>Red</button>
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "green", cursor:"pointer"}} onClick={()=>setColor('green')}>Green</button>
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "blue", cursor:"pointer"}} onClick={()=>setColor('blue')}>Blue</button>
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "yellow"}} onClick={()=>setColor('yellow')}>Yellow</button>
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "brown"}} onClick={()=>setColor('brown')}>Brown</button>
                 <button className="outline-none px-4 py-1 rounded-full text-white shadow-sm" style={{backgroundColor : "black"}} onClick={()=>setColor('black')}>Black</button>
              </div>
        </div>    
        </div>
    )

}