import axios from "axios"
const baseUrl = "https://anish-singh-rawat-todo-back-end.onrender.com" 
export const getAllTodo = (setTodo)=>{
    axios
    .get(baseUrl)
    .then(({data})=>{
        setTodo(data)
    })
}

export const addTodo = (text, setText, setTodo)=>{
    axios
    .post(`${baseUrl}/save`, {text})
    .then((data)=>{
        setText('')
        getAllTodo(setTodo)
    })
}

export const updateTodo = (todoId,text, setTodo,setText, setIsUpdate)=>{
    axios
    .post(`${baseUrl}/update`, {_id : todoId, text})
    .then((data)=>{
        setText('')
        setIsUpdate(false)
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log("error", err));
}


export const deleteTodo = (_id ,setTodo)=>{
    axios
    .post(`${baseUrl}/delete`, { _id })
    .then((data)=>{
        getAllTodo(setTodo)
    })
    .catch((err)=>console.log("error", err));
}