export default function Home() {
  return (
    <div style={{padding: '20px', fontFamily: 'Arial', maxWidth: '800px', margin: '0 auto'}}>
      <h1 style={{fontSize: '32px', fontWeight: '900'}}>TRES CORRALES</h1>
      <p>Plataforma SAAS para negocios locales - Ica, Perú</p>
      <p style={{background: 'green', color: 'white', padding: '10px', borderRadius: '20px', display: 'inline-block', marginTop: '10px', fontWeight: 'bold'}}>
        30 DÍAS GRATIS - Luego desde S/3 al día = una gaseosa
      </p>
      
      <div style={{marginTop: '30px', border: '2px solid black', padding: '20px', borderRadius: '15px'}}>
        <h2>CAMALES - S/10/día</h2>
        <p><b>Roles:</b> Asistente, Vendedor, Despachador</p>
        <p><b>Incluye:</b> Compra/Venta, Pago/Cobranza, Gastos Reparto, Gasto Camiones, Planilla</p>
        <a href="/caja" style={{background: 'black', color: 'white', padding: '10px 20px', borderRadius: '10px', textDecoration: 'none', display: 'inline-block', marginTop: '10px'}}>PROBAR CAMALES</a>
      </div>

      <div style={{marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px'}}>
        <div style={{border: '1px solid #ccc', padding: '15px', borderRadius: '10px'}}><b>RESTAURANT</b><br/>S/5/día<br/>Delivery, QR, Corto</div>
        <div style={{border: '1px solid #ccc', padding: '15px', borderRadius: '10px'}}><b>BODEGA</b><br/>S/3/día<br/>Stock, Pedidos</div>
        <div style={{border: '1px solid #ccc', padding: '15px', borderRadius: '10px'}}><b>DENTISTA</b><br/>S/5/día<br/>Agenda, Consulta</div>
      </div>
    </div>
  );
}
