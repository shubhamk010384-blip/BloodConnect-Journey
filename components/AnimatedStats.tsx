import Counter from './Counter';
export default function AnimatedStats(){
return <section style={{padding:'70px 20px',background:'#fff'}}>
<div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))',maxWidth:800,margin:'0 auto',gap:20}}>
<Counter target={5} label='Weeks'/>
<Counter target={20} label='Calls'/>
<Counter target={3} label='Sessions'/>
<Counter target={100} label='Impact'/>
</div></section>}
