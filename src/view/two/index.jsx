import React,{useState,useEffect} from "react";

export default (props)=>{
    let [count,setCount] = useState(1);
    let [status,getstatus] = useState('我的');
    let handleAdd = function(){
       setCount(count+1)
    }
    let changeStatus=()=>{
        getstatus('你的')
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[]);
    return (
        <div className='a'>
            <p>{status}</p>
            <h2 onClick={changeStatus}>{count}</h2>
            <button onClick={handleAdd.bind(this)}>点击</button>
        </div>
    )
}