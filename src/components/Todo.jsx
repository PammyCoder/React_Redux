import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo,deleteTodo, removeTodo } from '../actions/index';


const Todo = () => {
const [inputData, setInputData] = useState('');
const list= useSelector((state) =>state.todoReducer.list);
const dispatch = useDispatch();
  return (
  <>
      <div>
        <figure>
          <figcaption className='main'>Add Your List Here.. </figcaption>
        </figure>

        <div>
          <input  className='item1' type="text" placeholder='Add Items.....'  value={inputData} onChange={(e) => setInputData(e.target.value)}/>
          <button id='btn1'  onClick={() => dispatch(addTodo(inputData),setInputData(''))}>+</button>
          
        </div>
<div>
{
  list.map((elem) => {
    return (
      <div key={elem.id}>
    <h3 className='item'>{elem.data}
    <button id='btn' title="Delete Item"  onClick={() => dispatch(deleteTodo(elem.id))}>Delete</button></h3>
  </div> 

    )
  })
}
<div/>
<div>
  <button  id='btn2' onClick={() => dispatch(removeTodo())}><span>Clear All List</span></button>
</div>

      </div>
    </div>
  </>
  )
}
export default Todo