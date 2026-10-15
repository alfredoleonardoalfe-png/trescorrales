"use client"
import { useState } from "react"

export default function CajaCamal() {
  const [peso, setPeso] = useState("")
  const [bloqueado, setBloqueado] = useState(false)

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400, margin: "0 auto" }}>
      <h2>🐄 CAJA CAMAL</h2>
      <p style={{ background: "#eee", padding: 8 }}>Operativo: Carlos</p>
      <h3>RECEPCIÓN</h3>
      <label>Proveedor:</label>
      <select style={{ width: "100%", padding: 10, marginBottom: 10 }}>
        <option>Juan Flores</option>
        <option>Pedro Vargas</option>
      </select>
      <label>PESO VIVO 👁️:</label>
      <input type="number" value={peso} onChange={e => setPeso(e.target.value)} placeholder="2500" style={{ width: "100%", padding: 10, border: "2px solid black" }} disabled={bloqueado} />
      {!bloqueado ? (
        <button onClick={() => setBloqueado(true)} style={{ width: "100%", padding: 15, background: "black", color: "white", marginTop: 15, fontWeight: "bold" }}>
          💾 GUARDAR Y BLOQUEAR 🔒
        </button>
      ) : (
        <div style={{ marginTop: 15, background: "#ffe6e6", padding: 15, border: "2px solid red" }}>
          <p>🔒 {peso} kg - Por: Carlos - BLOQUEADO</p>
          <button style={{ width: "100%", padding: 10, background: "orange" }}>✏️ Solicitar Modificación al Dueño</button>
        </div>
      )}
      <hr style={{ marginTop: 30 }} />
      <a href="/">← Inicio</a>
    </div>
  )
}
