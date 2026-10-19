"use client"
import { useState, useEffect } from "react"
export default function Camalero(){
  const [dueno,setDueno]=useState("");
  useEffect(()=>{setDueno(localStorage.getItem("dueno")||"TRES CORRALES")},[]);
  return <div style={{padding:20}}><h1>🥩 CAMALERO - {dueno}</h1><p>Control de faenado activo.</p></div>
}
