"use client"
import { useState } from "react"
export default function Caja(){
const [bloqueado,setBloqueado]=useState(false)
const [peso,setPeso]=useState(2500)
return(<div style={{maxWidth:400,margin:'0 auto',padding:20,fontFamily:'system-ui'}}>
<div style={{background:'#14532d',color:'white',padding:10,borderRadius:8,textAlign:'center'}}>trescorrales.vercel.app/caja</div>
<h1 style={{color:'#14532d',marginTop:20}}>🌿 NUEVO INGRESO</h1>
<p style={{color:'gray',fontSize:14}}>Recepción - Parte 1</p>
<label style={{fontWeight:'bold'}}>Proveedor:</label>
<select style={{width:'100%',padding:14,border:'2px solid #16a34a',borderRadius:8,marginTop:6}}><option>Juan Flores</option><option>Pedro Huaman</option></select>
<label style={{fontWeight:'bold',marginTop:16,display:'block'}}>N° Animales:</label>
<input type="number" defaultValue="10" style={{width:'100%',padding:14,borderRadius:8,border:'1px solid #ccc',marginTop:6}}/>
<label style={{fontWeight:'bold',marginTop:16,display:'block'}}>Tipo:</label>
<select style={{width:'100%',padding:14,borderRadius:8,border:'1px solid #ccc',marginTop:6}}><option>Vacuno</option><option>Ovino</option></select>
<label style={{fontWeight:'bold',marginTop:20,display:'block'}}>PESO VIVO Balanza: 👁️</label>
<div style={{display:'flex',alignItems:'center',background:'#f0fdf4',border:'2px solid #16a34a',borderRadius:8,padding:14,marginTop:6}}>
<input type="number" value={peso} onChange={e=>setPeso(e.target.value)} style={{flex:1,fontSize:28,fontWeight:'bold',border:'none',background:'transparent'}}/>
<span style={{fontWeight:'bold',color:'#16a34a'}}>kg</span>
</div>
{!bloqueado?(
<button onClick={()=>setBloqueado(true)} style={{width:'100%',marginTop:16,padding:16,background:'#16a34a',color:'white',fontWeight:'bold',borderRadius:10,border:'none',fontSize:16}}>💾 GUARDAR Y BLOQUEAR 🔒</button>
):(<>
<div style={{marginTop:16,padding:12,background:'#f3f4f6',borderRadius:8,fontSize:14,border:'1px solid #ccc'}}>🔒 14/10 8:00am - {peso} kg - Por: Carlos - BLOQUEADO</div>
<button style={{width:'100%',marginTop:12,padding:14,border:'1px solid #16a34a',background:'white',color:'#16a34a',borderRadius:8,fontWeight:'bold'}}>[ Solicitar Modificación ]</button>
</>)}
</div>)
}
