"use client"
import { useState } from "react"

export default function CajaCamal() {
  const [operativo, setOperativo] = useState("Carlos")
  const [proveedor, setProveedor] = useState("San Fernando")
  const [cantJavas, setCantJavas] = useState(5)
  const [pesoBruto, setPesoBruto] = useState("")
  const [tara, setTara] = useState("")
  const [lista, setLista] = useState([])

  const pesoNeto = pesoBruto && tara ? (parseFloat(pesoBruto) - parseFloat(tara)).toFixed(2) : pesoBruto || "0"

  const guardar = () => {
    if (!pesoBruto) return alert("Pon el peso bruto")
    const nuevo = {
      id: Date.now(),
      nro: lista.length + 1,
      operativo,
      proveedor,
      cantJavas,
      pesoBruto: parseFloat(pesoBruto),
      tara: parseFloat(tara) || 0,
      pesoNeto: parseFloat(pesoNeto),
      hora: new Date().toLocaleTimeString(),
    }
    setLista([...lista, nuevo])
    setPesoBruto("")
    setTara("")
  }

  const totalNeto = lista.reduce((a, b) => a + b.pesoNeto, 0)
  const totalJavas = lista.reduce((a, b) => a + Number(b.cantJavas), 0)

  return (
    <div style={{ padding: 10, fontFamily: "Arial", maxWidth: 1000, margin: "0 auto" }}>
      <h2>🐔 CAJA CAMAL - RECEPCION</h2>
      
      {/* AHORA EDITABLE */}
      <div style={{ background: "#eee", padding: 8, marginBottom: 10, border: "2px solid black", display: "flex", alignItems: "center", gap: 10 }}>
        <b>Recepciona:</b>
        <input value={operativo} onChange={e => setOperativo(e.target.value)} style={{ padding: 8, border: "2px solid black", fontWeight: "bold", flex: 1 }} placeholder="Pon tu nombre" />
      </div>

      <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
        <div style={{ flex: "1 1 320px", border: "2px solid black", padding: 12 }}>
          <label>Proveedor:</label>
          <select value={proveedor} onChange={e => setProveedor(e.target.value)} style={{ width: "100%", padding: 12, marginBottom: 10, border: "2px solid black" }}>
            <option>San Fernando</option><option>Redondo</option><option>Otro</option>
          </select>
          <label>Cantidad de Javas en esta pesada:</label>
          <div style={{ display: "flex", gap: 6, marginBottom: 10, marginTop: 5 }}>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setCantJavas(n)} style={{ flex: 1, padding: 12, background: cantJavas==n? "black" : "white", color: cantJavas==n? "white" : "black", border: "2px solid black", fontWeight: "bold" }}>{n}</button>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}>
              <label>Bruto:</label>
              <input type="number" value={pesoBruto} onChange={e => setPesoBruto(e.target.value)} placeholder="124.60" style={{ width: "100%", padding: 12, border: "2px solid black", fontSize: 20 }} />
            </div>
            <div style={{ flex: 1 }}>
              <label>Tara:</label>
              <input type="number" value={tara} onChange={e => setTara(e.target.value)} placeholder="5.2" style={{ width: "100%", padding: 12, border: "2px solid black", fontSize: 20 }} />
            </div>
          </div>
          <div style={{ background: "#e6ffe6", padding: 10, marginTop: 10, textAlign: "center", border: "2px solid green" }}>
            Neto: <br/><b style={{ fontSize: 24 }}>{pesoNeto} kg</b>
          </div>
          <button onClick={guardar} style={{ width: "100%", padding: 15, background: "black", color: "white", marginTop: 12, fontWeight: "bold", fontSize: 16 }}>GUARDAR 🔒 Y SIGUIENTE ➡️</button>
        </div>
        <div style={{ flex: "1 1 350px", border: "2px solid black", padding: 12, background: "#f9f9f9" }}>
          <h3 style={{ marginTop: 0 }}>👁️ VISTA PREVIA EN SECUENCIA</h3>
          <div style={{ background: "black", color: "white", padding: 10, display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: 13 }}>
            <span>Pesadas: {lista.length}</span>
            <span>Javas: {totalJavas}</span>
            <span>{totalNeto.toFixed(2)} kg</span>
          </div>
          <div style={{ maxHeight: 500, overflowY: "auto", marginTop: 10 }}>
            {lista.length === 0 && <p style={{ textAlign: "center", color: "#888" }}>Aún no hay pesadas.</p>}
            {[...lista].reverse().map(item => (
              <div key={item.id} style={{ background: "white", borderLeft: "5px solid red", border: "1px solid #ccc", padding: 8, marginBottom: 6, display: "flex", justifyContent: "space-between" }}>
                <div><b>#{item.nro}</b> - {item.cantJavas} javas - {item.operativo}<br/><small>{item.proveedor} - {item.hora}</small></div>
                <div style={{ textAlign: "right" }}><b style={{ color: "red" }}>{item.pesoNeto} kg</b><br/><small>🔒 BLOQUEADO</small></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
