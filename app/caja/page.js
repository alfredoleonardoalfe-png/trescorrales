"use client"
import { useState } from "react"

export default function Caja(){
const [rol,setRol]=useState(null)
const [sub,setSub]=useState("recepcion")
const [rec,setRec]=useState("Alfredo")
const [prov,setProv]=useState("Redondo")
const [javas,setJavas]=useState(5)
const [bruto,setBruto]=useState("135")
const [tara,setTara]=useState("7")
const [lista,setLista]=useState([])

const b=parseFloat(bruto)||0
const t=parseFloat(tara)||0
const neto=b-(javas*t)
const total=lista.reduce((a,c)=>a+c.neto,0)

const guardar=()=>{
 if(neto<=0)return alert("Revisa peso")
 setLista([...lista,{id:Date.now(),prov,neto,javas,tara:t,bruto:b,quien:rec}])
 setBruto("")
}

if(!rol){
return(
<div style={{padding:30,textAlign:'center',fontFamily:'Arial',maxWidth:450,margin:'0 auto'}}>
<h1 style={{fontWeight:900}}>TRES CORRALES - CAMALES</h1>
<p>Ingresa tu rol para continuar</p>
<div style={{display:'grid',gap:14,marginTop:20}}>
<button onClick={()=>setRol('ASISTENTE')} style={b1}>ASISTENTE (Compra/Venta)</button>
<button onClick={()=>setRol('VENDEDOR')} style={b1}>VENDEDOR (Ventas/Cobranza)</button>
<button onClick={()=>setRol('DESPACHADOR')} style={b1}>DESPACHADOR (Gastos/Planilla)</button>
<button onClick={()=>setRol('BALANCERO')} style={b2}>BALANCERO (Recepción y Despacho)</button>
</div>
</div>
)}

return(
<div style={{padding:12,fontFamily:'Arial',maxWidth:600,margin:'0 auto'}}>
<div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid black',paddingBottom:8}}>
<b>{rol}</b><button onClick={()=>setRol(null)}>Salir</button>
</div>

{rol==='ASISTENTE'&&
<div style={card}><h3>ASISTENTE - Compra / Venta</h3>
<button style={b1}>Nueva Compra</button><br/><br/>
<button style={b1}>Nueva Venta</button><br/><br/>
<button style={b1}>Ver Kardex</button>
</div>}

{rol==='VENDEDOR'&&
<div style={card}><h3>VENDEDOR - Ventas / Cobranza</h3>
<button style={b1}>Registrar Venta</button><br/><br/>
<button style={b1}>Cobrar Cliente</button><br/><br/>
<button style={b1}>Lista de Deudas</button>
</div>}

{rol==='DESPACHADOR'&&
<div style={card}><h3>DESPACHADOR - Gastos / Planilla</h3>
<button style={b1}>Gasto Reparto</button><br/><br/>
<button style={b1}>Gasto Camión</button><br/><br/>
<button style={b1}>Planilla / Personal</button>
</div>}

{rol==='BALANCERO'&&<>
<div style={{display:'flex',gap:6,marginTop:12}}>
<button onClick={()=>setSub("recepcion")} style={{flex:1,padding:10,background:sub==="recepcion"?"black":"white",color:sub==="recepcion"?"white":"black",border:'2px solid black',fontWeight:'bold'}}>RECEPCIÓN</button>
<button onClick={()=>setSub("despacho")} style={{flex:1,padding:10,background:sub==="despacho"?"black":"white",color:sub==="despacho"?"white":"black",border:'2px solid black',fontWeight:'bold'}}>DESPACHO</button>
</div>

{sub==="recepcion"?
<div style={card}>
<p>Recepciona: <input value={rec} onChange={e=>setRec(e.target.value)} style={{border:'2px solid black',padding:6,fontWeight:'bold'}}/></p>
<p>Proveedor: <b>{prov}</b> | Javas: <b>{javas}</b></p>
<div style={{display:'flex',gap:10}}>
<div><label>Bruto</label><br/><input type="number" value={bruto} onChange={e=>setBruto(e.target.value)} style={{width:90,padding:12,border:'2px solid black',fontSize:20,fontWeight:'bold'}}/></div>
<div><label>Tara x Java</label><br/><input type="number" value={tara} onChange={e=>setTara(e.target.value)} style={{width:70,padding:12,border:'2px solid black',fontSize:20,fontWeight:'bold'}}/></div>
</div>
<h2 style={{background:'#d4edda',border:'2px solid green',textAlign:'center',padding:10}}>{neto.toFixed(2)} kg NETO</h2>
<button onClick={guardar} style={{width:'100%',background:'black',color:'white',padding:15,fontWeight:'bold',fontSize:18}}>GUARDAR Y SIGUIENTE</button>
<div style={{marginTop:12,background:'black',color:'white',padding:8,display:'flex',justifyContent:'space-between'}}><span>Pesadas: {lista.length}</span><span>{total.toFixed(2)} kg</span></div>
{lista.slice().reverse().map(p=><div key={p.id} style={{borderBottom:'1px solid #ccc',padding:6,display:'flex',justifyContent:'space-between'}}><span>{p.javas}j - {p.bruto}kg = {p.neto}kg - {p.quien}</span><b>{p.neto}kg</b></div>)}
</div>
:
<div style={card}><h3>DESPACHO</h3><p>Total recepción hoy: <b>{total.toFixed(2)} kg</b> en {lista.length} pesadas</p><p>Aquí va el despacho y ventas.</p></div>}
</>}
</div>
)}

const b1={background:'black',color:'white',padding:14,borderRadius:12,border:'none',fontWeight:'bold',width:'100%'}
const b2={background:'#006400',color:'white',padding:14,borderRadius:12,border:'3px solid gold',fontWeight:'bold',width:'100%'}
const card={border:'2px solid black',padding:15,marginTop:15,borderRadius:10}
