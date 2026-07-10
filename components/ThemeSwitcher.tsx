'use client';
import {useEffect,useState} from 'react';
export default function ThemeSwitcher(){
 const [dark,setDark]=useState(false);
 useEffect(()=>{
  document.documentElement.dataset.theme=dark?'dark':'light';
 },[dark]);
 return <button onClick={()=>setDark(!dark)}
 style={{position:'fixed',right:20,top:20,padding:'10px 14px',borderRadius:24}}>🌓</button>;
}
