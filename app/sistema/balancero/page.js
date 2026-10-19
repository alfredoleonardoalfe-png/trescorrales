"use client"
import { useState, useEffect } from "react"

export default function Balancero(){
  const [dueno, setDueno] = useState("")
  const [peso, setPeso] = useState("")

  useEffect(()=>{
    const d = localStorage.getItem("dueno") || "TRES CORRALES"
    setDueno(d)
  },[])

  return (
    <div style={{padding:20, fontFamily:"sans-serif"}}>
      <h1 style={{fontSize:22, fontWeight:"bold"}}>⚖️ BALANCERO - {dueno}</h1>
      
      <div style={{marginTop:20, padding:15, border:"1px solid #ccc", borderRadius:8}}>
        <p>Peso actual:</p>
        <input 
          value={peso} 
          onChange={(e)=>setPeso(e.target.value)}
          placeholder="0.00 kg"
          style={{fontSize:32, padding:10, width:"100%", marginTop:10}}
        />
        <button style={{marginTop:15, width:"100%", padding:15, background:"black", color:"white", borderRadius:8, fontSize:18}}>
          GUARDAR PESAJE
        </button>
      </div>

      <p style={{marginTop:20, color:"green"}}>✅ Sistema balancero funcionando</p>
    </div>
  )
}
