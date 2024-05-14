import React,{useState} from 'react'

export default function NVTUseState() {
    // Declare a new state variable, which we'll call "count"
 const [count, setCount] = useState(0);
    //Mảng
    const [list, setList]= useState([1,5]);

    //Hàm xử lý sự kiện "Thêm ngẩu nhiên"
    const nvtHandleList = ()=>{
      // sinh ngẫu nhiên một giá trị số
      let num= parseInt(Math.random()*100);
      //Cập nhật lại state: list
      setList([
        ...list,
       num
      ])
      // cách khác
      //let lst =list.push(num);
      //setList(lst);
    }
  return (
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <hr/>
      <h3>List:{list.toString()} </h3>
      <button onClick={nvtHandleList}>Thêm ngẫu nhiên</button>
    </div>
  )
}

 