import React,{useCallback} from "react";

export default function TodoList({tasks,onTasksChange}) {

  const handleDelete = useCallback((list,index) => {
    onTasksChange(list.slice(0,index).concat(list.slice(index+1,list.length)))
    // useForceUpdate();
  },[onTasksChange])

  const displayList = (list) => {
    let listComponent = [];
    for (let i=0;i<list.length;i++){
      listComponent.push(
        <li key={i}>
          {list[i]}
          <button style={{marginLeft:'2%'}} onClick=
          {()=> handleDelete(list,i)}>
          Hapus</button>
        </li>
      )
    }
    return listComponent;
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      <ul style={{width:'15%'}}>
        {displayList(tasks)}
      </ul>      
    </div>

  );
}
