export default function Home(){
return(
<div style={{fontFamily:'Arial', maxWidth:800, margin:'0 auto', padding:20}}>
<h1 style={{fontSize:32, fontWeight:900}}>TRES CORRALES</h1>
<p>Plataforma SAAS para negocios locales - Ica, Perú</p>
<div style={{background:'#0a7a33', color:'white', padding:'10px 20px', borderRadius:30, display:'inline-block', fontWeight:'bold', marginTop:10}}>30 DÍAS GRATIS - Luego desde S/3 al día = una gaseosa</div>

<div style={{border:'2px solid black', borderRadius:15, padding:20, marginTop:25}}>
<h2 style={{margin:0}}>CAMALES - S/10/día</h2>
<p><b>Roles:</b> Asistente, Vendedor, Despachador, <span style={{background:'green', color:'white', padding:'2px 8px', borderRadius:10}}>BALANCERO (Recepción y Despacho)</span></p>
<p><b>Incluye:</b> Compra/Venta, Pago/Cobranza, Gastos Reparto, Gasto Camiones, Planilla, <b>+ Pesaje de Javas, Bruto/Tara/Neto</b></p>
<a href="/caja" style={{background:'black', color:'white', padding:'12px 25px', borderRadius:10, textDecoration:'none', fontWeight:'bold', display:'inline-block', marginTop:10}}>PROBAR CAMALES</a>
</div>

<div style={{display:'flex', gap:20, marginTop:30, flexWrap:'wrap'}}>
<div><b>RESTAURANT</b><br/>S/5/día<br/><small>Delivery, QR, Corto</small></div>
<div><b>BODEGA</b><br/>S/3/día<br/><small>Stock, Pedidos</small></div>
<div><b>DENTISTA</b><br/>S/5/día<br/><small>Agenda, Consulta</small></div>
</div>

<p style={{marginTop:30, textAlign:'center'}}><a href="/caja">Ir a /caja →</a></p>
</div>
)}
