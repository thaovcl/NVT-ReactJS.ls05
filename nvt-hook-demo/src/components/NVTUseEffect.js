import React, { useEffect, useState } from 'react'

export default function NVTUseEffect() {
    //state: count
    const [count, setCount]= useState(0);
    //Hàm xử lý sự kiện click me
    const nvtHandleClick=()=>{
        setCount(prev => prev +1);
    }
    //sử dụng hàm useEffect để cập nhật lại title, có 1 tham số
    useEffect(()=>{
        document.title = `Nguyễn Văn Thạo: You clicked ${count} times`;
        console.log(`You clicked ${count} times`);
    });
    //useEffect: tham số  thứ 2 là mảng rỗng
    useEffect(()=>{
        console.log("chạy lần đầu tiên - một lần");
    },[])

    //[deps]
    useEffect(()=>{
        console.log(`useEffect count click: {count}`);
    },[count])
  return (
    <div>
        <h2>Demo - useEffect: You clicked</h2>
       
        <button onClick={nvtHandleClick}>
            Click me
        </button>
    </div>
  )
}
