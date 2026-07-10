'use client';
import {motion} from 'framer-motion';

export default function StoryIntro(){
return(
<section id="story" style={{padding:'100px 20px',background:'#f8f8f8'}}>
<motion.div initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} transition={{duration:.7}}
style={{maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns':'1fr 1fr',gap:'40px'}}>
<div>
<h2 style={{fontSize:'3rem'}}>Why I Joined BloodConnect</h2>
<p style={{marginTop:20,lineHeight:1.8}}>
I joined BloodConnect expecting an internship. Instead, I found a purpose.
Every interaction, awareness session and outreach activity showed me that
real impact begins with small acts of kindness.
</p>
<blockquote style={{marginTop:30,padding:20,borderLeft:'6px solid #c1121f',background:'#fff'}}>
“Saving lives doesn't always require a stethoscope. Sometimes it begins with a conversation.”
</blockquote>
</div>
<div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
<div style={{width:'100%',height:350,borderRadius:24,background:'linear-gradient(135deg,#c1121f,#780000)',color:'#fff',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'1.5rem'}}>
Replace with week1.jpg
</div>
</div>
</motion.div>
</section>
)}
