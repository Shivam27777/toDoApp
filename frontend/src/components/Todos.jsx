import axios from 'axios';
function Todos({todos,setTodos}) {

     const markAsComplete = (todo)=>{
        axios.put("http://localhost:8000/completed",{
            id : todo._id
        }).then(function(){
            setTodos((prevTodos) => {
                const newTodos = prevTodos.map((t) =>
                  t._id === todo._id ? { ...t, completed: !t.completed } : t
                );
              
                console.log('Previous Todos:', prevTodos);
                console.log('Updated Todos:', newTodos);
              
                return newTodos;
              });
            alert("marked as done")
        })
        console.log(todo._id)
    }

    return <div>
        {todos.map(function(todo) {
            return <div key={todo._id}>
                <h1>{todo.title}</h1>
                <h2>{todo.description}</h2>
                <button onClick={()=>markAsComplete(todo)}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })}
    </div>
}
export default Todos;