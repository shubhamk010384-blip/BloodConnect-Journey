'use client';
import {useEffect,useState} from 'react';
export default function ParallaxHero({children}:{children:React.ReactNode}){
 const [y,setY]=useState(0);
 useEffect(()=>{
  const on=()=>setY(window.scrollY*0.3);
  window.addEventListener('scroll',on);
  return ()=>window.removeEventListener('scroll',on);
 },[]);
 return <div style={{transform:`translateY(${y}px)`,transition:'transform .1s linear'}}>{children}</div>;
}
