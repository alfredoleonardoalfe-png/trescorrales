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
<h1 style={{fontWeight:900,lineHeight:1.1}}>TRES CORRALES<br/>SISTEMA DE COMERCIO AVICOLA</h1>
<p>Solo comercio avícola</p>
<div style={{display:'grid',gap:14,marginTop:20}}>
<button onClick={()=>setRol('ASISTENTE')} style={{background:'black',color:'white',padding:14,borderRadius:12,border:'none',fontWeight:'bold'}}>ASISTENTE (Compra/Venta)</button>
<button onClick={()=>setRol('VENDEDOR')} style={{background:'black',color:'white',padding:14,borderRadius:12,border:'none',fontWeight:'bold'}}>VENDEDOR (Ventas/Cobranza)</button>
<button onClick={()=>setRol('DESPACHADOR')} style={{background:'black',color:'white',padding:14,borderRadius:12,border:'none',fontWeight:'bold'}}>DESPACHADOR (Gastos/Planilla)</button>
<button onClick={()=>setRol('BALANCERO')} style={{background:'#006400',color:'white',padding:14,borderRadius:12,border:'3px solid gold',fontWeight:'bold'}}>BALANCERO (Recepción y Despacho)</button>
</div>
</div>
)}
return(
<div style={{padding:12,fontFamily:'Arial',maxWidth:600,margin:'0 auto'}}>
<div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid black',paddingBottom:8}}>
<b>{rol} - AVICOLA</b><button onClick={()=>setRol(null)}>Salir</button>
</div>
<div style={{border:'2px solid black',padding:15,marginTop:15,borderRadius:10}}>
<p>Recepciona: <input value={rec} onChange={e=>setRec(e.target.value)} style={{border:'2px solid black',padding:6}}/></p>
<div style={{display:'flex',gap:10}}>
<div><label>Bruto</label><br/><input type="number" value={bruto} onChange={e=>setBruto(e.target.value)} style={{width:90,padding:12,border:'2px solid black',fontSize:20,fontWeight:'bold'}}/></div>
<div><label>Tara</label><br/><input type="number" value={tara} onChange={e=>setTara(e.target.value)} style={{width:70,padding:12,border:'2px solid black',fontSize:20,fontWeight:'bold'}}/></div>
</div>
<h2 style={{background:'#d4edda',border:'2px solid green',textAlign:'center',padding:10}}>{neto.toFixed(2)} kg NETO AVICOLA</h2>
<button onClick={guardar} style={{width:'100%',background:'black',color:'white',padding:15,fontWeight:'bold'}}>GUARDAR Y SIGUIENTE</button>
<div style={{marginTop:12,background:'black',color:'white',padding:8,display:'flex',justifyContent:'space-between'}}><span>Pesadas: {lista.length}</span><span>{total.toFixed(2)} kg</span></div>
</div>
</div>
)}
