'use client';
import {useEffect,useState} from 'react';
export default function Counter({target,label}:{target:number,label:string}){
 const [v,setV]=useState(0);
 useEffect(()=>{
  let i=0;
  const t=setInterval(()=>{i++;setV(Math.min(target,i)); if(i>=target)clearInterval(t);},20);
  return ()=>clearInterval(t);
 },[target]);
 return <div style={{textAlign:'center'}}><h2>{v}</h2><p>{label}</p></div>;
}
