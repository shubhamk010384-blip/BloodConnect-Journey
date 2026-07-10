'use client';
import {motion} from 'framer-motion';
export default function Week3Section(){
return <motion.section initial={{opacity:0,x:30}} whileInView={{opacity:1,x:0}} style={{padding:'80px 20px'}}>
<h2>Week 3 • Fun Week</h2>
<p>Activities, mentor interactions and teamwork made learning enjoyable while keeping the mission alive.</p>
</motion.section>}
