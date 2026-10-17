"use client"
import { useState } from "react"

export default function CajaCamales() {
  const [rol, setRol] = useState(null)
  const [tab, setTab] = useState("venta")
  const [ventas, setVentas] = useState([])
  const [compras, setCompras] = useState([])
  const [gastos, setGastos] = useState([])

  const [form, setForm] = useState({ concepto: "", monto: "", tipo: "venta" })

  const agregar = () => {
    if(!form.concepto || !form.monto) return
    const item = { id: Date.now(), concepto: form.concepto, monto: parseFloat(form.monto), fecha: new Date().toLocaleString() }
    if(form.tipo === "venta") setVentas([...ventas, item])
    if(form.tipo === "compra") setCompras([...compras, item])
    if(form.tipo === "gasto") setGastos([...gastos, item])
    setForm({ concepto: "", monto: "", tipo: form.tipo })
  }

  const totalVentas = ventas.reduce((a,b)=>a+b.monto,0)
  const totalCompras = compras.reduce((a,b)=>a+b.monto,0)
  const totalGastos = gastos.reduce((a,b)=>a+b.monto,0)
  const caja = totalVentas - totalCompras - totalGastos

  if(!rol){
    return(
      <div style={{padding:40, fontFamily:'Arial', textAlign:'center', maxWidth:500, margin:'0 auto'}}>
        <h1 style={{fontWeight:900}}>TRES CORRALES - CAMALES</h1>
        <p>Ingresa tu rol para continuar</p>
        <div style={{display:'grid', gap:15, marginTop:20}}>
          <button onClick={()=>setRol('Asistente')} style={btn}>ASISTENTE (Compra/Venta)</button>
          <button onClick={()=>setRol('Vendedor')} style={btn}>VENDEDOR (Ventas/Cobranza)</button>
          <button onClick={()=>setRol('Despachador')} style={{...btn, background:'#222'}}>DESPACHADOR (Gastos/Planilla)</button>
        </div>
        <a href="/" style={{display:'block', marginTop:20}}>← Volver a portada</a>
      </div>
    )
  }

  return(
    <div style={{padding:15, fontFamily:'Arial', maxWidth:1000, margin:'0 auto'}}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'2px solid black', paddingBottom:10}}>
        <h2 style={{margin:0}}>CAMALES | Rol: {rol}</h2>
        <div style={{display:'flex', gap:10, alignItems:'center'}}>
          <div style={{background: caja>=0?'green':'red', color:'white', padding:'5px 12px', borderRadius:20, fontWeight:'bold'}}>CAJA: S/ {caja.toFixed(2)}</div>
          <button onClick={()=>setRol(null)} style={{padding:'5px 10px'}}>Salir</button>
        </div>
      </div>

      <div style={{display:'flex', gap:8, marginTop:15, flexWrap:'wrap'}}>
        {["venta","compra","cobranza","pago","gastos_reparto","gastos_camion","planilla"].map(t=>(
          <button key={t} onClick={()=>setTab(t)} style={{padding:'8px 12px', borderRadius:20, border:'1px solid black', background: tab===t ? 'black':'white', color: tab===t ? 'white':'black', fontSize:12, textTransform:'uppercase'}}>{t.replace('_',' ')}</button>
        ))}
      </div>

      <div style={{marginTop:20, border:'1px solid #ccc', padding:15, borderRadius:15, background:'#f9f9f9'}}>
        <h3 style={{textTransform:'uppercase'}}>{tab} - {rol}</h3>
        <div style={{display:'flex', gap:10, flexWrap:'wrap'}}>
          <input placeholder="Concepto Ej: Venta Carnero / Gasolina / Pago" value={form.concepto} onChange={e=>setForm({...form, concepto:e.target.value})} style={input}/>
          <input placeholder="Monto S/" type="number" value={form.monto} onChange={e=>setForm({...form, monto:e.target.value})} style={{...input, width:120}}/>
          <select value={form.tipo} onChange={e=>setForm({...form, tipo:e.target.value})} style={input}>
            <option value="venta">Venta / Cobranza</option>
            <option value="compra">Compra / Pago</option>
            <option value="gasto">Gasto Reparto / Camión / Planilla</option>
          </select>
          <button onClick={agregar} style={{...btn, padding:'8px 20px'}}>AGREGAR</button>
        </div>
      </div>

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:15, marginTop:20}}>
        <div style={card}><b>Ventas/Cobranza</b><br/>S/ {totalVentas.toFixed(2)}<br/><small>{ventas.length} movs</small></div>
        <div style={card}><b>Compras/Pagos</b><br/>S/ {totalCompras.toFixed(2)}<br/><small>{compras.length} movs</small></div>
        <div style={card}><b>Gastos Totales</b><br/>S/ {totalGastos.toFixed(2)}<br/><small>Reparto+Camión+Planilla</small></div>
      </div>

      <div style={{marginTop:20}}>
        <h4>Últimos movimientos</h4>
        {[...ventas, ...compras, ...gastos].sort((a,b)=>b.id-a.id).slice(0,10).map(m=>(
          <div key={m.id} style={{display:'flex', justifyContent:'space-between', borderBottom:'1px solid #eee', padding:'8px 0'}}>
            <span>{m.concepto} - {m.fecha}</span><b>S/ {m.monto}</b>
          </div>
        ))}
      </div>
    </div>
  )
}
const btn = {background:'black', color:'white', padding:'12px', borderRadius:10, border:'none', fontWeight:'bold', cursor:'pointer'}
const input = {padding:'8px 12px', borderRadius:8, border:'1px solid #ccc', minWidth:200}
const card = {border:'1px solid black', padding:15, borderRadius:12, background:'white'}
