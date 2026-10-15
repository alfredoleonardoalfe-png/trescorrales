"use client"
import { useState } from "react"

export default function CajaCamal() {
  const [peso, setPeso] = useState("")
  const [bloqueado, setBloqueado] = useState(false)
  const [proveedor, setProveedor] = useState("Juan Flores")

  return (
    <div style={{ padding: 20, fontFamily: "Arial", maxWidth: 400, margin: "0 auto" }}>
      <h2>🐄 TRES CORRALES - CAJA</h2>
      <p style={{ background: "#eee", padding: 10 }}>Operativo: Carlos (Pesador)</p>

      <h3>PASO 1: RECEPCIÓN</h3>
      
      <label>Proveedor:</label>
      <select value={proveedor} onChange={e => setProveedor(e.target.value)} style={{ width: "100%", padding: 10, marginBottom: 10 }}>
        <option>Juan Flores</option>
        <option>Pedro Vargas</option>
        <option>Aliesca</option>
      </select>

      <label>N° Animales:</label>
      <input type="number" defaultValue="10" style={{ width: "100%", padding: 10, marginBottom: 10 }} />
      
      <label>Tipo:</label>
      <select style={{ width: "100%", padding: 10, marginBottom: 10 }}>
        <option>Vacuno</option>
        <option>Ovino</option>
        <option>Porcino</option>
      </select>

      <label>PESO VIVO 👁️:</label>
      <div style={{ display: "flex", gap: 5 }}>
        <input 
          type="number" 
          value={peso} 
          onChange={e => setPeso(e.target.value)}
          placeholder="2500" 
          style={{ flex: 1, padding: 10, border: "2px solid black" }} 
          disabled={bloqueado}
        />
        <span style={{ padding: 10 }}>kg</span>
      </div>

      {!bloqueado ? (
        <button 
          onClick={() => setBloqueado(true)}
          style={{ width: "100%", padding: 15, background: "black", color: "white", marginTop: 15, fontWeight: "bold" }}>
          💾 GUARDAR Y BLOQUEAR 🔒
        </button>
      ) : (
        <div style={{ marginTop: 15, background: "#ffe6e6", padding: 15, border: "2px solid red" }}>
          <p>🔒 14/10 8:00am - {peso} kg - Por: Carlos - BLOQUEADO</p>
          <p>Proveedor: {proveedor}</p>
          <button style={{ width: "100%", padding: 10, background: "orange", marginTop: 10 }}>
            ✏️ Solicitar Modificación al Dueño
          </button>
          <p style={{ fontSize: 12, marginTop: 10 }}>Le llegará a: trescorrales.vercel.app/dueno (José María)</p>
        </div>
      )}

      <hr style={{ marginTop: 30 }} />
      <a href="/" style={{ fontSize: 12 }}>← Volver a inicio</a>
    </div>
  )
}
