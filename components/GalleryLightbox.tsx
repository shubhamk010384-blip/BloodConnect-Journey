'use client';
import {useState} from 'react';
export default function GalleryLightbox(){
 const imgs=['week1.jpg','week2.jpg','week3.jpg','week4.jpg','week5.jpg'];
 const [active,setActive]=useState<string|null>(null);
 return <>
 <section style={{padding:'80px 20px'}}>
 <h2 style={{textAlign:'center'}}>Interactive Gallery</h2>
 <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:16,maxWidth:1000,margin:'30px auto'}}>
 {imgs.map(i=><button key={i} onClick={()=>setActive(i)} style={{height:160,borderRadius:16,border:'1px solid #ddd'}}>{i}</button>)}
 </div></section>
 {active&&<div onClick={()=>setActive(null)} style={{position:'fixed',inset:0,background:'rgba(0,0,0,.8)',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontSize:'2rem',zIndex:9999}}>
 {active}<br/>Replace with your image
 </div>}
 </>
}
