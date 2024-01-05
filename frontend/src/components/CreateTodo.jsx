import { useState } from "react"

function CreateTodo() {

    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');


function addToDo() {
    fetch("http://localhost:8000/todo", {
        method : "POST",
        body : JSON.stringify({
            title :  title,
            description : description
        }),
        headers : {
            "content-type" : "application/json"
        }
    }).then(async function(res){
        // eslint-disable-next-line no-unused-vars
        const json = await  res.json();
        alert("To Do Added");
    })
}
  return (
    <div>
        <input type='text' placeholder='title' onChange={(e)=>{
            setTitle(e.target.value)
        }}></input><br/>
        <input type='text' placeholder='description' onChange={(e)=>{
            setDescription(e.target.value)
        }}></input><br/>
        <button onClick={addToDo}>Add a toDo</button>
    </div>
  )
}

export default CreateTodo