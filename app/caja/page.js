"use client"
import { useState } from "react"

export default function CajaCamal() {
  const [operativo, setOperativo] = useState("Alfredo")
  const [proveedor, setProveedor] = useState("Redondo")
  const [listaProveedores, setListaProveedores] = useState(["San Fernando", "Redondo"])
  const [filtroProv, setFiltroProv] = useState("TODOS")
  const [cantJavas, setCantJavas] = useState(5)
  const [pesoBruto, setPesoBruto] = useState("")
  const [tara, setTara] = useState("7")
  const [lista, setLista] = useState([])

  const taraNum = tara === "" ? 0 : parseFloat(tara)
  const brutoNum = pesoBruto === "" ? 0 : parseFloat(pesoBruto)
  const taraTotal = taraNum * Number(cantJavas)
  const pesoNeto = pesoBruto === "" ? "0.00" : (brutoNum - taraTotal).toFixed(2)
  const esValido = pesoBruto !== "" && !isNaN(parseFloat(pesoBruto)) && parseFloat(pesoNeto) > 0

  const guardar = () => {
    if (!esValido) return alert("Peso bruto debe ser mayor a la tara")
    if (proveedor.trim() === "") return alert("Escribe el proveedor")

    // Si es proveedor nuevo, lo agregamos a la base de datos
    if (!listaProveedores.includes(proveedor.trim())) {
      setListaProveedores([...listaProveedores, proveedor.trim()])
    }

    const nuevo = {
      id: Date.now(),
      nro: lista.length + 1,
      operativo: operativo.trim(),
      proveedor: proveedor.trim(),
      cantJavas: Number(cantJavas),
      pesoBruto: brutoNum,
      taraUnitaria: taraNum,
      taraTotal,
      pesoNeto: parseFloat(pesoNeto),
      hora: new Date().toLocaleTimeString(),
      fecha: new Date().toLocaleDateString(),
    }
    setLista([...lista, nuevo])
    setPesoBruto("")
  }

  // Filtrado para historial
  const listaFiltrada = filtroProv === "TODOS" ? lista : lista.filter(i => i.proveedor === filtroProv)
  const totalNetoFiltrado = listaFiltrada.reduce((a, b) => a + b.pesoNeto, 0)
  const totalJavasFiltrado = listaFiltrada.reduce((a, b) => a + b.cantJavas, 0)

  return (
    <div style={{ padding: 10, fontFamily: "Arial", maxWidth: 1050, margin: "0 auto" }}>
      <h2 style={{margin:"10px 0"}}>🐔 CAJA CAMAL - TRES CORRALES</h2>
      
      <div style={{ background: "#eee", padding: 8, marginBottom: 10, border: "2px solid black", display: "flex", alignItems: "center", gap: 10 }}>
        <b>Recepciona:</b>
        <input value={operativo} onChange={e => setOperativo(e.target.value)} style={{ padding: 8, border: "2px solid black", fontWeight: "bold", flex: 1 }} />
      </div>

      <div style={{ display: "flex", gap: 15, flexWrap: "wrap" }}>
        {/* FORMULARIO */}
        <div style={{ flex: "1 1 330px", border: "2px solid black", padding: 12 }}>
          <label><b>Proveedor (base de datos):</b></label>
          <input 
            list="lista-proveedores"
            value={proveedor} 
            onChange={e => setProveedor(e.target.value)} 
            placeholder="Ej: Redondo, Granja Juan..." 
            style={{ width: "100%", padding: 12, marginBottom: 6, border: "2px solid black", fontWeight: "bold" }} 
          />
          <datalist id="lista-proveedores">
            {listaProveedores.map(p => <option key={p} value={p} />)}
          </datalist>
          
          <div style={{ fontSize: 11, marginBottom: 8, color: "#555" }}>Proveedores guardados: {listaProveedores.length}</div>
          <div style={{ display: "flex", gap: 5, flexWrap: "wrap", marginBottom: 12 }}>
            {listaProveedores.map(p => (
              <button key={p} onClick={() => setProveedor(p)} style={{ padding: "5px 9px", fontSize: 12, background: proveedor===p ? "black" : "white", color: proveedor===p ? "white" : "black", border: "1px solid black", cursor:"pointer" }}>{p}</button>
            ))}
          </div>

          <label><b>Cantidad de Javas:</b></label>
          <div style={{ display: "flex", gap: 6, marginBottom: 12, marginTop: 5 }}>
            {[1,2,3,4,5].map(n => (
              <button key={n} onClick={() => setCantJavas(n)} style={{ flex: 1, padding: 12, background: cantJavas==n? "black" : "white", color: cantJavas==n? "white" : "black", border: "2px solid black", fontWeight: "bold", cursor:"pointer" }}>{n}</button>
            ))}
          </div>

          <div style={{ display: "flex", gap: 10 }}>
            <div style={{ flex: 1 }}><label>Bruto (kg):</label><input type="number" inputMode="decimal" value={pesoBruto} onChange={e => setPesoBruto(e.target.value)} placeholder="0" style={{ width: "100%", padding: 12, border: "2px solid black", fontSize: 22, fontWeight: "bold" }} /></div>
            <div style={{ flex: 1 }}><label>Tara x Java:</label><input type="number" inputMode="decimal" value={tara} onChange={e => setTara(e.target.value)} style={{ width: "100%", padding: 12, border: "2px solid black", fontSize: 22, fontWeight: "bold" }} /></div>
          </div>

          <div style={{ background: pesoBruto==="" ? "#f0f0f0" : "#e6ffe6", padding: 12, marginTop: 12, textAlign: "center", border: pesoBruto==="" ? "2px solid #ccc" : "2px solid green" }}>
            {pesoBruto==="" ? <><small>Esperando peso...</small><br/><b style={{ fontSize: 28 }}>0.00 kg</b></> : <><small>{brutoNum}kg - ({cantJavas} x {taraNum}kg) = {taraTotal.toFixed(2)}kg tara</small><br/><b style={{ fontSize: 30 }}>{pesoNeto} kg NETO</b></>}
          </div>

          <button onClick={guardar} disabled={!esValido} style={{ width: "100%", padding: 15, background: esValido ? "black" : "#999", color: "white", marginTop: 12, fontWeight: "bold", fontSize: 16, border:"none", cursor:"pointer" }}>GUARDAR 🔒 Y SIGUIENTE ➡️</button>
        </div>

        {/* HISTORIAL / BASE DE DATOS */}
        <div style={{ flex: "1 1 380px", border: "2px solid black", padding: 12, background: "#f9f9f9" }}>
          <h3 style={{ marginTop: 0 }}>📚 HISTORIAL POR PROVEEDOR</h3>
          
          <div style={{ display:"flex", gap:5, marginBottom:10, flexWrap:"wrap" }}>
            <button onClick={()=>setFiltroProv("TODOS")} style={{padding:"6px 10px", background:filtroProv==="TODOS"?"black":"white", color:filtroProv==="TODOS"?"white":"black", border:"2px solid black", fontWeight:"bold"}}>TODOS</button>
            {listaProveedores.map(p => (
              <button key={p} onClick={()=>setFiltroProv(p)} style={{padding:"6px 10px", background:filtroProv===p?"red":"white", color:filtroProv===p?"white":"black", border:"1px solid black"}}>{p}</button>
            ))}
          </div>

          <div style={{ background: "black", color: "white", padding: 10, display: "flex", justifyContent: "space-between", fontWeight: "bold", fontSize: 13 }}>
            <span>Filtro: {filtroProv}</span>
            <span>{listaFiltrada.length} pesadas</span>
          </div>
          <div style={{ background: "#222", color: "white", padding: 8, display: "flex", justifyContent: "space-between", fontSize: 13 }}>
            <span>Javas: {totalJavasFiltrado}</span>
            <span>Total Neto: {totalNetoFiltrado.toFixed(2)} kg</span>
          </div>

          <div style={{ maxHeight: 520, overflowY: "auto", marginTop: 10 }}>
            {listaFiltrada.length === 0 && <p style={{ textAlign: "center", color: "#888" }}>No hay registros para {filtroProv}.</p>}
            {[...listaFiltrada].reverse().map(item => (
              <div key={item.id} style={{ background: "white", borderLeft: "5px solid red", border: "1px solid #ccc", padding: 8, marginBottom: 6, display: "flex", justifyContent: "space-between", fontSize: 13 }}>
                <div>
                  <b>#{item.nro} - {item.proveedor}</b><br/>
                  {item.cantJavas}j x {item.taraUnitaria}kg - {item.operativo}<br/>
                  <small>{item.pesoBruto}kg - {item.taraTotal.toFixed(2)}kg = <b>{item.pesoNeto}kg</b></small>
                </div>
                <div style={{ textAlign: "right" }}>
                  <b style={{ color: "red" }}>{item.pesoNeto} kg</b><br/>
                  <small>🔒 BLOQUEADO</small><br/>
                  <small>{item.fecha} {item.hora}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
