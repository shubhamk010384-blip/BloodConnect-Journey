'use client';
import {motion} from 'framer-motion';
export default function Week2Section(){
return <motion.section initial={{opacity:0,x:-30}} whileInView={{opacity:1,x:0}} style={{padding:'80px 20px',background:'#fafafa'}}>
<h2>Week 2 • Community Outreach</h2>
<p>Calling organizations and pitching awareness sessions improved my confidence and communication skills.</p>
</motion.section>}
