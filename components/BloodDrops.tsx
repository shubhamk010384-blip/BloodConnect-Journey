'use client';
export default function BloodDrops(){
 const drops=[...Array(12)];
 return <div style={{position:'fixed',inset:0,pointerEvents:'none',overflow:'hidden'}}>
 {drops.map((_,i)=><div key={i} style={{position:'absolute',left:(i*8)+'%',top:(i*11)%100+'%',opacity:.08,fontSize:24}}>🩸</div>)}
 </div>
}
