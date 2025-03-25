import React ,{ useState } from "react";
const TodoList = ({name}) => {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState("");
    const [editingId, setEditingId] = useState(null);
    const [editingText, setEditingText] = useState("");

    //callbacks do CRUD

    //create
    const addTodo = () => {
        if (task.trim() ==="") return;
        setTodos([...todos, {id: Date.now(), text: task}]);
        setTask("");
    }

    //read => não vamos ter callback pois será gerada uma listagem
    const startEditing = (id, text) => {
        setEditingId(id);
        setEditingText(text);
    }

    //update
    const saveEdit = () => {
        setTodos(
            todos.map((todo) => 
                todos.id == editingId ? {...todo, text: editingText} : todo

            )
        );
        setEditingId(null);
        setEditingText("");
    };

    //delete
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }

    return (
        <div style={{textAlign: "center", marginTop: "50px"}}>
            <h2>A fazer: {name}</h2>
            <input
                type="text"
                value={task}
                onChange={(event) => setTask(event.target.value)}
                placeholder="escreva sua tarefa..."
            />
            <button onClick={addTodo}>Incluir tarefa</button>
        
            <ul style={{listStyle: "none", padding: 0}}>
                {todos.map((todo) => (
                    <li key={todo.id} style={{margin: "10px 0"}}>
                        {editingId === todo.id ? (
                            <>
                                <input
                                    type="text"
                                    value={editingText}
                                    onChange={(event) => setEditingText(event.target.value)}
                                />
                                <button onClick={saveEdit}>Salvar</button>
                            </>
                        ) : (
                            <>
                                {todo.text}
                                <button onClick={() => startEditing(todo.id, todo.text)}>Editar</button>
                                <button onClick={() => deleteTodo(todo.id)}>Excluir</button>
                            </>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default TodoList;