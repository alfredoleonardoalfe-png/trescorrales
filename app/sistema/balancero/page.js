"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [dueno, setDueno] = useState("")
  
  useEffect(() => {
    const d = localStorage.getItem("dueno") || ""
    setDueno(d)
  }, [])

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1 style={{ fontWeight: '900' }}>BALANCERO</h1>
      <h2>COMERCIALIZADORA {dueno}</h2>
      <p>Recepción y Despacho</p>
    </div>
  )
}
