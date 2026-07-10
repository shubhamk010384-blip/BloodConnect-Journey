'use client';
import {useEffect,useState} from 'react';
export default function ScrollTop(){
 const [show,setShow]=useState(false);
 useEffect(()=>{
  const on=()=>setShow(window.scrollY>300);
  window.addEventListener('scroll',on); on();
  return ()=>window.removeEventListener('scroll',on);
 },[]);
 if(!show) return null;
 return <button onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}
 style={{position:'fixed',right:20,bottom:80,padding:'12px 16px',borderRadius:30,background:'#c1121f',color:'#fff',border:'none'}}>↑ Top</button>;
}
