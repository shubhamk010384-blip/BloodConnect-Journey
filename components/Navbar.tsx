'use client';

export default function Navbar(){
  return (
    <nav style={{
      position:'fixed',
      top:0,left:0,right:0,
      padding:'18px 40px',
      display:'flex',
      justifyContent:'space-between',
      background:'rgba(0,0,0,.45)',
      backdropFilter:'blur(10px)',
      color:'white',
      zIndex:1000
    }}>
      <h2>❤️ Pulse</h2>
      <div style={{display:'flex',gap:'24px'}}>
        <a href="#journey">Journey</a>
        <a href="#timeline">Timeline</a>
        <a href="#gallery">Gallery</a>
      </div>
    </nav>
  )
}
