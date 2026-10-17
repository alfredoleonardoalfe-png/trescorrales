"use client"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900">
      <header className="max-w-6xl mx-auto px-6 py-10 text-center">
        <h1 className="text-5xl font-black tracking-tighter text-blue-900">TRES CORRALES</h1>
        <p className="mt-2 font-bold text-slate-600">Plataforma SAAS para negocios locales • Ica, Perú</p>
        <div className="mt-6 inline-flex items-center gap-2 bg-green-600 text-white px-6 py-2 rounded-full font-black text-sm">
          30 DÍAS GRATIS • Luego desde S/3 al día = una gaseosa
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* CAMALES */}
        <div className="bg-white rounded-[24px] border-2 border-slate-900 p-6 shadow-[4px_4px_0px_0px_#000] flex flex-col">
          <div className="text-3xl">🥩</div>
          <h2 className="mt-2 font-black text-xl">CAMALES</h2>
          <p className="text-3xl font-black">S/10<span className="text-base font-bold">/día</span></p>
          <div className="mt-4">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Roles</p>
            <p className="text-sm mt-1 font-bold">Asistente, Vendedor, Despachador</p>
          </div>
          <div className="mt-4">
            <p className="text-xs font-black uppercase tracking-widest text-slate-500">Incluye</p>
            <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
              <li>Compra / Venta</li>
              <li>Pago / Cobranza</li>
              <li>Gastos Reparto</li>
              <li>Gasto Camiones</li>
              <li>Planilla</li>
            </ul>
          </div>
          <Link href="/caja" className="mt-auto bg-black text-white py-3 rounded-xl text-center font-black text-sm">PROBAR CAMALES</Link>
        </div>

        {/* RESTAURANTE */}
        <div className="bg-white rounded-[24px] border-2 border-slate-300 p-6 flex flex-col">
          <div className="text-3xl">🍔</div>
          <h2 className="mt-2 font-black text-xl">RESTAURANT</h2>
          <p className="text-3xl font-black text-blue-700">S/5<span className="text-base">/día</span></p>
          <div className="mt-4">
            <p className="text-xs font-black uppercase text-slate-500">Dueño ADM: Corto, Clientes, QR</p>
            <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
              <li>Delivery</li>
              <li>QR en mesa</li>
              <li>Cocina / Corto</li>
              <li>Stock insumos</li>
            </ul>
          </div>
          <div className="mt-auto pt-6">
            <button className="w-full bg-slate-200 py-3 rounded-xl font-black text-sm">PRÓXIMAMENTE</button>
          </div>
        </div>

        {/* BODEGA */}
        <div className="bg-white rounded-[24px] border-2 border-slate-300 p-6 flex flex-col">
          <div className="text-3xl">📦</div>
          <h2 className="mt-2 font-black text-xl">BODEGA</h2>
          <p className="text-3xl font-black text-green-700">S/3<span className="text-base">/día</span></p>
          <div className="mt-4">
            <p className="text-xs font-black uppercase text-slate-500">Dueño ADM: Productos</p>
            <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
              <li>Stock</li>
              <li>Pedidos</li>
              <li>Compra / Venta</li>
              <li>Alertas de falta</li>
            </ul>
          </div>
          <div className="mt-auto pt-6">
            <button className="w-full bg-slate-200 py-3 rounded-xl font-black text-sm">PRÓXIMAMENTE</button>
          </div>
        </div>

        {/* DENTISTA */}
        <div className="bg-white rounded-[24px] border-2 border-slate-300 p-6 flex flex-col">
          <div className="text-3xl">🦷</div>
          <h2 className="mt-2 font-black text-xl">DENTISTA</h2>
          <p className="text-3xl font-black text-blue-700">S/5<span className="text-base">/día</span></p>
          <div className="mt-4">
            <p className="text-xs font-black uppercase text-slate-500">Dueño ADM: Consulta</p>
            <ul className="text-sm mt-2 space-y-1 list-disc ml-4">
              <li>Agenda de Citas</li>
              <li>Consulta / Historial</li>
              <li>Procedimiento</li>
              <li>Pagos / Deudas</li>
            </ul>
          </div>
          <div className="mt-auto pt-6">
            <button className="w-full bg-slate-200 py-3 rounded-xl font-black text-sm">PRÓXIMAMENTE</button>
          </div>
        </div>

      </main>

      <footer className="text-center pb-10 text-xs font-bold text-slate-400">
        ADMINISTRADOR PRINCIPAL (Tú) • Control total • Soporte 24/7 • Listo para Play Store
      </footer>
    </div>
  )
}
