type Props={title:string,content:string};
export default function WeekCard({title,content}:Props){
return <div style={{padding:24,borderRadius:16,background:'#fff',boxShadow:'0 6px 20px rgba(0,0,0,.08)'}}>
<h3>{title}</h3><p>{content}</p></div>
}
