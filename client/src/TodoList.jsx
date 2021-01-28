import React,{useCallback} from "react";
import './TodoList.css';
export default function TodoList({tasks,onTasksChange}) {

  const handleDelete = useCallback((list,index) => {
    onTasksChange(list.slice(0,index).concat(list.slice(index+1,list.length)))
    // useForceUpdate();
  },[onTasksChange])

  const displayList = (list) => {
    let listComponent = [];
    for (let i=0;i<list.length;i++){
      let elmt = list[i];
      let kotakodeCheck = elmt.match(/kotakode/gi);
      if(kotakodeCheck!==null){
        listComponent.push(
          <li key={i} style={elmt[0]==='!'?{background:'red',height:'2.75rem'}:{background:'#93dab1',height:'2.75rem'}} className={"listItem"}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'0.5% 2%'}}>
              <span style={elmt[0]==='!'?{color:'white',marginRight:'2%'}:{color:'#565656',marginRight:'2%'}}>{elmt[0]==='!'?elmt.substr(1,elmt.length):elmt}</span>
              <img src={require("./kotakode.png")} style={{width:'80px',height:'2.5rem'}} alt="Hello Kotakode!" />
              <button style={{marginLeft:'2%'}} className="button" onClick=
              {()=> handleDelete(list,i)}>
              Hapus</button>
                            
            </div>
          </li>
        )
      }
      else if(elmt[0]==='!'){
        listComponent.unshift(
          <li key={i} className={"listItem"}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'red',padding:'1.5% 2%'}}>
              <span style={{color:'white'}}>{elmt.substr(1,elmt.length)}</span>
              <button style={{marginLeft:'2%'}} className="button" onClick=
              {()=> handleDelete(list,i)}>
              Hapus</button>
            </div>
          </li>
        )
      }
      else{
        listComponent.push(
          <li key={i} className={"listItem"}>
            <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'1.5% 2%'}}>
              {elmt}
              <button style={{marginLeft:'2%'}} className="button" onClick=
              {()=> handleDelete(list,i)}>
              Hapus</button>
            </div>
          </li>
        )        
      }

    }
    return listComponent;
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <ul style={{width:'20%',background:'rgba(0, 119, 255, 0.3)'}}>
        {displayList(tasks)}
      </ul>      
    </div>

  );
}
