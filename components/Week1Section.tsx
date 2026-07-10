'use client';
import {motion} from 'framer-motion';
export default function Week1Section(){
return <motion.section initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} style={{padding:'80px 20px'}}>
<h2>Week 1 • Blood Bank Survey</h2>
<p>I visited a blood bank, interacted with professionals and learned how every donated unit travels from donor to patient.</p>
</motion.section>}
