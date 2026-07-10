'use client';
const skills=[['Leadership',95],['Communication',90],['Teamwork',100],['Planning',88]];
export default function Skills(){
return <section style={{padding:'80px 20px'}}>
<h2 style={{textAlign:'center'}}>Skills Gained</h2>
<div style={{maxWidth:700,margin:'30px auto'}}>
{skills.map(([n,v])=><div key={String(n)} style={{marginBottom:18}}>
<div style={{display:'flex',justifyContent:'space-between'}}><span>{n}</span><span>{v}%</span></div>
<div style={{height:10,background:'#eee',borderRadius:10}}><div style={{width:String(v)+'%',height:'100%',background:'#c1121f',borderRadius:10}}/></div>
</div>)}
</div></section>}
