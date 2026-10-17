"use client"
import { useState } from "react"
export default function CajaCamales(){
const [rol,setRol]=useState(null)
const [sub,setSub]=useState("recepcion")
const [recepciona,setRecepciona]=useState("Alfredo")
const [proveedor,setProveedor]=useState("Redondo")
const [javas,setJavas]=useState(5)
const [bruto,setBruto]=useState("135")
const [tara,setTara]=useState("7")
const [lista,setLista]=useState([{id:1,prov:"Redondo",bruto:120,javas:5,tara:7,neto:85,quien:"Alfredo"}])
const b=parseFloat(bruto)||0
const t=parseFloat(tara)||0
const neto=b-(javas*t)
const totalKg=lista.reduce((a,c)=>a+c.neto,0)
const guardar=()=>{if(neto<=0)return alert("Revisa peso");setLista([...lista,{id:Date.now(),prov:proveedor,bruto:b,javas,tara:t,neto,quien:recepciona}]);setBruto("")}
if(!rol){
return(<div style={{padding:30,fontFamily:'Arial',maxWidth:500,margin:'0 auto',textAlign:'center'}}>
<h1 style={{fontWeight:900}}>TRES CORRALES -<br/>CAMALES</h1><p>Ingresa tu rol para continuar</p>
<div style={{display:'grid',gap:12,marginTop:20}}>
<button onClick={()=>setRol('ASISTENTE')} style={btn}>ASISTENTE (Compra/Venta)</button>
<button onClick={()=>setRol('VENDEDOR')} style={btn}>VENDEDOR (Ventas/Cobranza)</button>
<button onClick={()=>setRol('DESPACHADOR')} style={btn}>DESPACHADOR (Gastos/Planilla)</button>
<button onClick={()=>setRol('BALANCERO')} style={{...btn,background:'#006400',border:'3px solid gold'}}>BALANCERO (Recepción y Despacho)</button>
</div></div>)}
return(<div style={{fontFamily:'Arial',maxWidth:600,margin:'0 auto',padding:10}}>
<div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid black',paddingBottom:8}}><b>{rol}</b><div><span style={{background:'black',color:'white',padding:'4px 8px',borderRadius:10,fontSize:12,marginRight:10}}>{lista.length} pes - {totalKg.toFixed(1)}kg</span><button onClick={()=>setRol(null)}>Salir</button></div></div>
{rol==='BALANCERO'&&<div style={{display:'flex',gap:6,marginTop:10}}><button onClick={()=>setSub("recepcion")} style={{flex:1,padding:10,background:sub==="recepcion"?'black':'white',color:sub==="recepcion"?'white':'black',border:'2px solid black',fontWeight:'bold'}}>RECEPCIÓN</button><button onClick={()=>setSub("despacho")} style={{flex:1,padding:10,background:sub==="despacho"?'black':'white',color:sub==="despacho"?'white':'black',border:'2px solid black',fontWeight:'bold'}}>DESPACHO</button></div>}
{(rol==='BALANCERO'&&sub==="recepcion")||rol==='ASISTENTE'||rol==='VENDEDOR'||rol==='DESPACHADOR'||sub==="recepcion"?(
(rol==='BALANCERO'&&sub==="recepcion")||rol!=='BALANCERO'||sub==="recepcion"?<>
<div style={{border:'2px solid black',padding:10,marginTop:10,display:'flex',gap:10}}><b>Recepciona:</b><input value={recepciona} onChange={e=>setRecepciona(e.target.value)} style={{border:'2px solid black',padding:6,flex:1,fontWeight:'bold'}}/></div>
<div style={{border:'2px solid black',padding:10,marginTop:10}}>
<label>Proveedor:</label><select value={proveedor} onChange={e=>setProveedor(e.target.value)} style={{width:'100%',border:'2px solid black',padding:12,marginTop:5}}><option>Redondo</option><option>Garcia</option><option>Torres</option></select>
<label style={{marginTop:10,display:'block'}}>Cantidad de Javas:</label><div style={{display:'flex',gap:5,marginTop:5}}>{[1,2,3,4,5].map(n=><button key={n} onClick={()=>setJavas(n)} style={{flex:1,padding:12,border:'2px solid black',background:javas===n?'black':'white',color:javas===n?'white':'black',fontWeight:'bold'}}>{n}</button>)}</div>
<div style={{display:'flex',marginTop:10}}><div style={{flex:1}}><label>Bruto:</label><input type="number" value={bruto} onChange={e=>setBruto(e.target.value)} style={{width:'100%',border:'2px solid black',padding:12,fontSize:22,fontWeight:'bold'}}/></div><div style={{flex:1}}><label>Tara x Java:</label><input type="number" value={tara} onChange={e=>setTara(e.target.value)} style={{width:'100%',border:'2px solid black',padding:12,fontSize:22,fontWeight:'bold',borderLeft:'none'}}/></div></div>
<div style={{background:'#d4edda',border:'2px solid green',textAlign:'center',padding:10,marginTop:10}}>{b}kg - ({javas} x {t}kg) = {(javas*t).toFixed(2)}kg tara<br/>Neto:<br/><span style={{fontSize:36,fontWeight:900}}>{neto.toFixed(2)} kg</span></div>
<button onClick={guardar} style={{width:'100%',background:'black',color:'white',padding:15,fontWeight:'bold',fontSize:18,marginTop:10}}>GUARDAR 🔒 Y SIGUIENTE ➡️</button>
</div>
<div style={{border:'2px solid black',padding:10,marginTop:10}}><h3>👁️ VISTA PREVIA EN SECUENCIA</h3><div style={{background:'black',color:'white',padding:8,display:'flex',justifyContent:'space-between',fontWeight:'bold'}}><span>Pesadas: {lista.length}</span><span>Javas: {lista.reduce((a,c)=>a+c.javas,0)}</span><span>{totalKg.toFixed(2)} kg</span></div>{lista.slice().reverse().map(p=><div key={p.id} style={{border:'1px solid #ccc',padding:8,marginTop:6,display:'flex',justifyContent:'space-between'}}><div>#{p.id.toString().slice(-2)} - {p.javas}j x {p.tara}kg - {p.quien}<br/>{p.bruto}kg - {p.javas*p.tara}kg = <b>{p.neto}kg</b></div><div style={{color:'red',fontWeight:'bold'}}>{p.neto} kg<br/><small style={{color:'black'}}>🔒 BLOQUEADO</small></div></div>)}</div></>
:null):null}
{rol==='BALANCERO'&&sub==="despacho"&&<div style={{border:'2px solid black',padding:15,marginTop:10}}><h3>BALANCERO - DESPACHO</h3><p>Total recepción: {totalKg.toFixed(2)}kg en {lista.length} pesadas</p><div style={{display:'flex',gap:6,flexWrap:'wrap'}}><button style={mini}>Venta</button><button style={mini}>Cobranza</button><button style={mini}>Gasto Reparto</button><button style={mini}>Gasto Camión</button><button style={mini}>Planilla</button></div></div>}
</div>)}
const btn={background:'black',color:'white',padding:'15px',borderRadius:12,border:'none',fontWeight:'bold',fontSize:13,cursor:'pointer'}
const mini={padding:'8px 12px',border:'1px solid black',background:'white',borderRadius:20,fontSize:12}
