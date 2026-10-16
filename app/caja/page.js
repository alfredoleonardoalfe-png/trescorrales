"use client"
import { useState } from "react"
export default function CajaCamal() {
  const [peso, setPeso] = useState("")
  const [bloqueado, setBloqueado] = useState(false)
  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400, margin: "0 auto" }}>
      <h2>🐄 CAJA CAMAL</h2>
      <div style={{ background: "#eee", padding: 8, marginBottom: 15 }}>Operativo: Carlos</div>
      <h3>RECEPCION - PESO VIVO</h3>
      <label>Peso (kg):</label>
      <input type="number" value={peso} onChange={e => setPeso(e.target.value)} placeholder="Ej: 2500" style={{ width: "100%", padding: 12, border: "2px solid black", fontSize: 16, marginTop: 5 }} disabled={bloqueado} />
      {!bloqueado ? (
        <button onClick={() => { if(peso) setBloqueado(true) }} style={{ width: "100%", padding: 15, background: "black", color: "white", marginTop: 15, fontWeight: "bold" }}>GUARDAR Y BLOQUEAR 🔒</button>
      ) : (
        <div style={{ marginTop: 15, background: "#ffe6e6", padding: 15, border: "2px solid red" }}>
          <p style={{ fontWeight: "bold" }}>🔒 BLOQUEADO: {peso} kg</p>
          <p>Por: Carlos - No se puede editar</p>
        </div>
      )}
      <a href="/" style={{ display: "block", marginTop: 30 }}>Volver</a>
    </div>
  )
}
