'use client';
import {useEffect,useState} from 'react';
export default function ReadingProgress(){
 const [p,setP]=useState(0);
 useEffect(()=>{
  const on=()=>{
   const d=document.documentElement;
   setP((d.scrollTop/(d.scrollHeight-d.clientHeight))*100||0);
  };
  window.addEventListener('scroll',on);on();
  return ()=>window.removeEventListener('scroll',on);
 },[]);
 return <div style={{position:'fixed',top:0,left:0,height:5,width:p+'%',background:'#d00000',zIndex:99999}}/>;
}