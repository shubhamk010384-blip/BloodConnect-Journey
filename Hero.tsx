'use client';
import {motion} from 'framer-motion';

export default function Hero(){
 return(
 <section style={{
  height:'100vh',
  background:'linear-gradient(135deg,#8B0000,#C1121F)',
  color:'white',
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  padding:'20px'
 }}>
 <motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}} transition={{duration:1}}>
   <p style={{letterSpacing:'6px'}}>MY BLOODCONNECT JOURNEY</p>
   <h1 style={{fontSize:'4rem',margin:'20px 0'}}>From a Volunteer<br/>to a Voice</h1>
   <p>Every drop has a story. This is mine.</p>
   <a href="#journey">
    <button style={{
      marginTop:'35px',
      padding:'16px 30px',
      border:'none',
      borderRadius:'40px',
      background:'white',
      color:'#C1121F',
      fontWeight:'bold',
      cursor:'pointer'
    }}>
      Begin Journey ↓
    </button>
   </a>
 </motion.div>
 </section>
 )
}
