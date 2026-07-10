'use client';
export default function Stats(){
const items=[['Weeks','5'],['Mission','1'],['Hope','∞']];
return <section style={{padding:'70px 20px',background:'#111',color:'#fff'}}>
<div style={{display:'flex',justifyContent:'space-around',maxWidth:900,margin:'0 auto'}}>
{items.map(([a,b])=><div key={a}><h2 style={{fontSize:'3rem'}}>{b}</h2><p>{a}</p></div>)}
</div></section>
}
