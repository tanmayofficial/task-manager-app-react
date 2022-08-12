import React, { useState } from 'react';
import './Todo.css';
// import TodoList from './TodoList';


const Todo = ({todos}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{todo}</div>
                        Content for list item
                    </div>
                    <span className="badge bg-primary rounded-pill">{index}</span>
                </li>
            </ul>
        
    ));
}

export default Todo;