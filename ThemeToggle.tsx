'use client';
import {useState,useEffect} from 'react';
export default function ThemeToggle(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{document.body.style.background=dark?'#111':'#fafafa';
 document.body.style.color=dark?'#fff':'#111';},[dark]);
 return <button onClick={()=>setDark(!dark)} style={{position:'fixed',right:20,bottom:20,padding:'10px 14px',borderRadius:20}}>🌓</button>;
}
