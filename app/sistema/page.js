"use client"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function MenuComercializadora() {
  const [dueno, setDueno] = useState("")
  const router = useRouter()

  useEffect(()=>{
    const d = localStorage.getItem("dueno")
    const r = localStorage.getItem("rol")
    if(!d) { window.location.href = "/"; return }
    if(r !== "dueno") { router.push(`/sistema/${r}`); return }
    setDueno(d)
  },[])

  const btnNegro = { background: 'black', color: 'white', padding: '16px', borderRadius: '12px', fontWeight: 'bold', width: '100%', marginBottom: '12px', border: 'none', cursor: 'pointer' }
  const btnVerde = { background: '#16a34a', color: 'white', padding: '16px', borderRadius: '12px', fontWeight: 'bold', width: '100%', border: '3px solid yellow', cursor: 'pointer' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '20px' }}>
      <h1 style={{ fontWeight: '900', textAlign: 'center' }}>TRES CORRALES<br/>SISTEMA DE COMERCIO AVICOLA</h1>
      <h2 style={{ fontWeight: '900', marginTop: '15px' }}>COMERCIALIZADORA {dueno}</h2>
      <p>Solo comercio avícola</p>
      <div style={{ width: '90%', maxWidth: '350px', marginTop: '30px' }}>
        <button onClick={()=>router.push('/sistema/asistente')} style={btnNegro}>ASISTENTE (Compra/Venta)</button>
        <button onClick={()=>router.push('/sistema/vendedor')} style={btnNegro}>VENDEDOR (Ventas/Cobranza)</button>
        <button onClick={()=>router.push('/sistema/despachador')} style={btnNegro}>DESPACHADOR (Gastos/Planilla)</button>
        <button onClick={()=>router.push('/sistema/balancero')} style={btnVerde}>BALANCERO (Recepción y Despacho)</button>
      </div>
    </div>
  )
}
