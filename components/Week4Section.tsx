'use client';
import {motion} from 'framer-motion';
export default function Week4Section(){
return <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} style={{padding:'80px 20px',background:'#fafafa'}}>
<h2>Week 4 • Awareness Sessions</h2>
<p>Real impact began when conversations turned into awareness and awareness turned into action.</p>
</motion.section>}
