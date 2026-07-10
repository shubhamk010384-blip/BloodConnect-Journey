'use client';
import {useEffect,useState} from 'react';
export default function Loader(){
 const [hide,setHide]=useState(false);
 useEffect(()=>{const t=setTimeout(()=>setHide(true),1200);return()=>clearTimeout(t);},[]);
 if(hide) return null;
 return <div style={{position:'fixed',inset:0,background:'#111',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',zIndex:99999,fontSize:'2rem'}}>❤️ Loading Journey...</div>
}
