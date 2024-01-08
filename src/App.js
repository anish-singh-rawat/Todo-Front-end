import { useEffect, useState } from "react";
import "./App.css"
import Todo from "./component/Todo";
import { addTodo, deleteTodo, getAllTodo, updateTodo } from "./utils/HandleApi";
function App() {
  const [todo, setTodo] = useState([])
  const [text, setText] = useState("");
  const [isUpdate, setIsUpdate] = useState(false);
  const [todoId, setTodoId] = useState('')

  const updateMode =(_id, text)=>{
    setIsUpdate(true)
    setText(text)
    setTodoId(_id)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      isUpdate ? 
      updateTodo(todoId, text, setTodo, setText, setIsUpdate)
      :
     addTodo(text, setText, setTodo);
    }
  };

  useEffect(()=>{
    getAllTodo(setTodo)
  },[])
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col d-flex justify-content-center align-items-center vh-100">
            <div className="todo-header">
              <div className="sub-todo-header">
                <div className="top-heading">
                  <center> <h3> Add Todo </h3></center>
                  <br />
                  <div className="d-flex justify-content-around">
                  <input type="text" placeholder="Please Enter data"
                  value={text} onChange={(e)=> setText(e.target.value)}
                  onKeyDown={(e)=>handleKeyPress(e)}   />

                  <div className="btn btn-success"
                  onClick={ isUpdate ? 
                    ()=>updateTodo(todoId,text, setTodo,setText, setIsUpdate) : 
                    ()=>addTodo(text, setText, setTodo) } >
                    { isUpdate ? "Update" : "Add User" }
                  </div>

                  </div>
                </div>
                <br />
                <div className="list-data">
                  {
                    todo.map((item)=>(
                      <Todo key={item._id} text={item.text}
                      updateMode={()=>updateMode(item._id, item.text)}
                      deleteTodo={()=>deleteTodo(item._id, setTodo)}
                      />
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
