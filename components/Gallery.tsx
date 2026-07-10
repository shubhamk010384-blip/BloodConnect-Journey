'use client';
export default function Gallery(){
const imgs=['week1.jpg','week2.jpg','week3.jpg','week4.jpg','week5.jpg'];
return <section id='gallery' style={{padding:'80px 20px'}}>
<h2 style={{textAlign:'center'}}>Journey Gallery</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,maxWidth:1100,margin:'30px auto'}}>
{imgs.map(i=><div key={i} style={{height:180,borderRadius:18,background:'#ddd',display:'flex',alignItems:'center',justifyContent:'center'}}>{i}</div>)}
</div></section>}
