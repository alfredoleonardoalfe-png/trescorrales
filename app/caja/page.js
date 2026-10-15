"use client";
import { useState, useEffect } from "react";

export default function Caja(){
  const [peso,setPeso]=useState("2500");
  const [prov,setProv]=useState("Juan Flores");
  const [num,setNum]=useState(15);
  const [tipo,setTipo]=useState("Vacuno");
  const [ver,setVer]=useState(true);
  const [lista,setLista]=useState([]);

  useEffect(()=>{
    const s=localStorage.getItem("tc_corrales");
    if(s) setLista(JSON.parse(s));
  },[]);
  useEffect(()=>{
    localStorage.setItem("tc_corrales", JSON.stringify(lista));
  },[lista]);

  const guardar=()=>{
    if(!peso) return alert("Pon peso");
    const r={id:Date.now(), fecha:new Date().toLocaleString("es-PE"), prov, num, tipo, peso:peso+" kg", por:"Carlos", bloqueado:"🔒 BLOQUEADO"};
    setLista([r,...lista]);
    setPeso("");
    alert("¡Guardado y Bloqueado! 🔒");
  };

  return(<div style={{maxWidth:400, margin:"0 auto", padding:20, fontFamily:"system-ui"}}>
    <div style={{background:"#14532d", color:"white", padding:10, borderRadius:8, textAlign:"center"}}>trescorrales.vercel.app/caja/</div>
    <h1 style={{color:"#14532d", marginTop:20}}>🧾 NUEVO INGRESO</h1>
    <p style={{color:"gray", fontSize:14}}>Recepción - Parte 1 REAL</p>

    <label style={{fontWeight:"bold"}}>Proveedor:</label>
    <select value={prov} onChange={e=>setProv(e.target.value)} style={{width:"100%", padding:14, border:"2px solid #16a34a", borderRadius:8, marginTop:6}}><option>Juan Flores</option><option>Pedro Vargas</option><option>María Quispe</option></select>

    <label style={{fontWeight:"bold", marginTop:16, display:"block"}}>N° Animales:</label>
    <input type="number" value={num} onChange={e=>setNum(e.target.value)} style={{width:"100%", padding:14, borderRadius:8, border:"1px solid #ccc", marginTop:6}}/>

    <label style={{fontWeight:"bold", marginTop:16, display:"block"}}>Tipo:</label>
    <select value={tipo} onChange={e=>setTipo(e.target.value)} style={{width:"100%", padding:14, borderRadius:8, border:"1px solid #ccc", marginTop:6}}><option>Vacuno</option><option>Ovino</option><option>Porcino</option></select>

    <label style={{fontWeight:"bold", marginTop:20, display:"block"}}>PESO VIVO Balanza: {ver? "👁️" : "🙈"} <button onClick={()=>setVer(!ver)} style={{marginLeft:10}}>ver</button></label>
    <div style={{display:"flex", alignItems:"center", background:"#f0fdf4", border:"2px solid #16a34a", borderRadius:8, padding:14, marginTop:6}}>
      <input value={ver? peso : "••••"} onChange={e=>setPeso(e.target.value.replace(/[^0-9]/g,""))} style={{flex:1, border:"none", background:"transparent", fontSize:20, fontWeight:"bold"}}/>
      <span>kg</span>
    </div>

    <button onClick={guardar} style={{width:"100%", background:"#16a34a", color:"white", padding:16, borderRadius:10, fontWeight:"bold", fontSize:18, marginTop:20, border:"none"}}>GUARDAR Y BLOQUEAR 🔒</button>

    <div style={{marginTop:30}}><b>REGISTROS BLOQUEADOS ({lista.length})</b>{lista.map(r=>(<div key={r.id} style={{background:"#eee", padding:12, borderRadius:10, marginTop:8, fontSize:13}}><b>{r.fecha}</b><br/>{r.peso} - {r.prov} - {r.num} {r.tipo} - {r.bloqueado}<br/><button onClick={()=>{setLista(lista.map(x=>x.id===r.id? {...x, solicitud:true} : x)); alert("Solicitud enviada al dueño")}} style={{marginTop:6, width:"100%", padding:8, borderRadius:6, border:"1px solid black"}}>Solicitar Modificación</button></div>))}</div>
  </div>);
}
