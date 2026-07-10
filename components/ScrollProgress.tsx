'use client';
import {useEffect,useState} from 'react';
export default function ScrollProgress(){
 const [w,setW]=useState(0);
 useEffect(()=>{
  const onScroll=()=>{
   const h=document.documentElement;
   const p=(h.scrollTop/(h.scrollHeight-h.clientHeight))*100;
   setW(p||0);
  };
  window.addEventListener('scroll',onScroll);
  onScroll();
  return ()=>window.removeEventListener('scroll',onScroll);
 },[]);
 return <div style={{position:'fixed',top:0,left:0,height:4,width:w+'%',background:'#c1121f',zIndex:9999}}/>;
}
