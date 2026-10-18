"use client"
import { useState, useEffect } from "react"
export default function Admin(){
const [login,setLogin]=useState(false)
const [user,setUser]=useState("")
const [pass,setPass]=useState("")
const [showPass,setShowPass]=useState(false)
const [showNewPass,setShowNewPass]=useState(false)
const [dueños,setDueños]=useState([])
const [nuevoNombre,setNuevoNombre]=useState("")
const [nuevoUser,setNuevoUser]=useState("")
const [nuevoPass,setNuevoPass]=useState("")

useEffect(()=>{
const saved=localStorage.getItem("dueños_avicola")
if(saved) setDueños(JSON.parse(saved))
else {
const hoy=new Date().toISOString()
setDueños([
{name:"José María",user:"josemaria",pass:"josemaria123",activo:true,inicio:hoy},
{name:"Vargas",user:"vargas",pass:"vargas123",activo:true,inicio:hoy},
{name:"Abraham",user:"abraham",pass:"abraham123",activo:true,inicio:hoy},
])
}
},[])

const guardar=(list)=>{setDueños(list); localStorage.setItem("dueños_avicola",JSON.stringify(list))}
const diasRestantes=(inicio)=>{ const diff=Math.floor((new Date()-new Date(inicio))/(1000*60*60*24)); return 30-diff }
const toggleActivo=(i)=>{ const n=[...dueños]; n[i].activo=!n[i].activo; guardar(n) }
const extender=(i)=>{ const n=[...dueños]; n[i].inicio=new Date().toISOString(); guardar(n) }
const agregarDueño=()=>{
if(!nuevoNombre||!nuevoUser||!nuevoPass) return alert("Llena todo")
const n=[...dueños,{name:nuevoNombre,user:nuevoUser,pass:nuevoPass,activo:true,inicio:new Date().toISOString()}]
guardar(n); setNuevoNombre(""); setNuevoUser(""); setNuevoPass(""); alert("Dueño agregado con 30 días")
}

if(!login){
return(
<div style={{padding:30,maxWidth:450,margin:"0 auto",fontFamily:"Arial"}}>
<h1 style={{fontWeight:900,textAlign:"center"}}>TRES CORRALES<br/>PANEL ADMINISTRADOR</h1>
<p style={{textAlign:"center"}}>SISTEMA DE COMERCIO AVICOLA</p>
<div style={{border:"2px solid black",padding:20,borderRadius:12,marginTop:20}}>
<input value={user} onChange={e=>setUser(e.target.value)} placeholder="Usuario: alfredo" style={{width:"100%",padding:12,border:"2px solid black"}}/>
<div style={{display:"flex",marginTop:10,border:"2px solid black"}}>
<input type={showPass?"text":"password"} value={pass} onChange={e=>setPass(e.target.value)} placeholder="Clave: alfredo123" style={{flex:1,padding:12,border:"none"}}/>
<button onClick={()=>setShowPass(!showPass)} style={{background:"white",border:"none",padding:"0 12px",fontSize:20}}>{showPass?"🙈":"👁️"}</button>
</div>
<button onClick={()=>{if(user==="alfredo"&&pass==="alfredo123") setLogin(true); else alert("alfredo / alfredo123")}} style={{width:"100%",marginTop:15,background:"black",color:"white",padding:14,fontWeight:"bold"}}>ENTRAR</button>
</div>
</div>
)
}

return(
<div style={{padding:15,maxWidth:700,margin:"0 auto",fontFamily:"Arial"}}>
<div style={{display:"flex",justifyContent:"space-between",borderBottom:"3px solid black",paddingBottom:10}}>
<b>ADMIN: Alfredo - AVICOLA</b><button onClick={()=>setLogin(false)}>Salir</button>
</div>
<h2 style={{textAlign:"center"}}>Dueños - 30 días prueba</h2>
{dueños.map((d,i)=>{
const rest=diasRestantes(d.inicio)
return(
<div key={i} style={{border:"2px solid black",padding:12,borderRadius:10,marginTop:12,background:rest<=0?"#ffcccc":"white"}}>
<div style={{display:"flex",justifyContent:"space-between"}}>
<div><b>{d.name}</b><br/><span style={{fontSize:13}}>{d.user} | {d.pass}</span><br/><b style={{color:rest<=0?"red":"green"}}>{rest<=0?`VENCIDO`:`Quedan ${rest} días`}</b> - {d.activo?"ACTIVO":"DESACTIVADO"}</div>
<div style={{display:"grid",gap:5}}>
<button onClick={()=>toggleActivo(i)} style={{background:d.activo?"green":"red",color:"white",padding:"6px 10px",border:"none",fontWeight:"bold"}}>{d.activo?"DESACTIVAR":"ACTIVAR"}</button>
<button onClick={()=>extender(i)} style={{background:"black",color:"white",padding:"6px 10px",border:"none"}}>Reiniciar 30d</button>
</div>
</div>
</div>
)
})}

<div style={{border:"3px dashed black",padding:15,borderRadius:10,marginTop:25}}>
<h3 style={{margin:0}}>+ Agregar nuevo dueño</h3>
<input value={nuevoNombre} onChange={e=>setNuevoNombre(e.target.value)} placeholder="Nombre: Ej. Carlos" style={{width:"100%",padding:10,border:"2px solid black",marginTop:10}}/>
<input value={nuevoUser} onChange={e=>setNuevoUser(e.target.value)} placeholder="Usuario: Ej. carlos" style={{width:"100%",padding:10,border:"2px solid black",marginTop:8}}/>
<div style={{display:"flex",marginTop:8,border:"2px solid black"}}>
<input type={showNewPass?"text":"password"} value={nuevoPass} onChange={e=>setNuevoPass(e.target.value)} placeholder="Clave: Ej. carlos123" style={{flex:1,padding:10,border:"none"}}/>
<button onClick={()=>setShowNewPass(!showNewPass)} style={{background:"white",border:"none",padding:"0 12px",fontSize:20}}>{showNewPass?"🙈":"👁️"}</button>
</div>
<button onClick={agregarDueño} style={{width:"100%",marginTop:10,background:"black",color:"white",padding:12,fontWeight:"bold"}}>AGREGAR CON 30 DÍAS</button>
</div>

<div style={{marginTop:20,background:"#d4edda",border:"2px solid green",padding:12,textAlign:"center"}}>
<a href="/caja" style={{fontWeight:"bold"}}>IR AL SISTEMA /caja</a>
</div>
</div>
)
}
