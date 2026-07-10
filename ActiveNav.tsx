'use client';
import {useEffect,useState} from 'react';
const ids=['journey','timeline','gallery'];
export default function ActiveNav(){
 const [active,setActive]=useState('');
 useEffect(()=>{
  const on=()=>{
   let current='';
   ids.forEach(id=>{
    const e=document.getElementById(id);
    if(e && window.scrollY>=e.offsetTop-120) current=id;
   });
   setActive(current);
  };
  window.addEventListener('scroll',on);on();
  return ()=>window.removeEventListener('scroll',on);
 },[]);
 return <nav style={{position:'fixed',left:20,top:'40%',display:'flex',flexDirection:'column',gap:10}}>
 {ids.map(i=><a key={i} href={'#'+i} style={{color:active==i?'#c1121f':'#777'}}>{i}</a>)}
 </nav>
}
