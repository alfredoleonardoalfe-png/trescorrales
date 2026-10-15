export default function Home(){
  return (
    <div style={{padding:40, fontFamily:'system-ui', textAlign:'center'}}>
      <h1>🌿 Tres Corrales</h1>
      <p>Sistema que trabaja por ti</p>
      <a href="/caja" style={{display:'block', marginTop:20, padding:15, background:'#16a34a', color:'white', borderRadius:8, textDecoration:'none', fontWeight:'bold'}}>Ir a CAJA / Recepción</a>
      <a href="/admin" style={{display:'block', marginTop:10, padding:15, background:'#14532d', color:'white', borderRadius:8, textDecoration:'none', fontWeight:'bold'}}>Ir a ADMIN</a>
    </div>
  )
}
