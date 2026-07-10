export default function Lessons(){
const items=['Leadership','Communication','Teamwork','Empathy','Time Management','Ownership'];
return <section style={{padding:'80px 20px',background:'#fafafa'}}>
<h2 style={{textAlign:'center'}}>Lessons Learned</h2>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:20,maxWidth:1000,margin:'30px auto'}}>
{items.map(x=><div key={x} style={{padding:24,borderRadius:18,background:'#fff',boxShadow:'0 8px 20px rgba(0,0,0,.08)'}}><h3>{x}</h3><p>BloodConnect strengthened my {x.toLowerCase()} through real experiences.</p></div>)}
</div></section>}
