'use client';
import {motion} from 'framer-motion';

const weeks=[
 {title:'Week 1',desc:'Blood Bank Survey'},
 {title:'Week 2',desc:'Community Outreach'},
 {title:'Week 3',desc:'Fun Week'},
 {title:'Week 4',desc:'Awareness Sessions'},
 {title:'Week 5',desc:'Reflection'}
];

export default function Timeline(){
 return (
 <section id='timeline' style={{padding:'80px 20px',background:'#fff'}}>
  <h2 style={{textAlign:'center',fontSize:'2.5rem',marginBottom:50}}>Journey Timeline</h2>
  <div style={{maxWidth:900,margin:'0 auto'}}>
   {weeks.map((w,i)=>(
    <motion.div key={i} initial={{opacity:0,x:i%2?-40:40}} whileInView={{opacity:1,x:0}} transition={{duration:.6}}
      style={{display:'flex',gap:20,marginBottom:30,alignItems:'center'}}>
      <div style={{width:18,height:18,borderRadius:'50%',background:'#c1121f'}}/>
      <div style={{padding:20,border:'1px solid #eee',borderRadius:16,flex:1,boxShadow:'0 8px 24px rgba(0,0,0,.08)'}}>
        <h3>{w.title}</h3>
        <p>{w.desc}</p>
      </div>
    </motion.div>
   ))}
  </div>
 </section>);
}
