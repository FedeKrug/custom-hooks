import { useEffect, useReducer } from "react";
import { TodoReducer } from "./";

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const useTodo = (initialState = []) => {

    const [todos, dispatch] = useReducer(TodoReducer, initialState, init)

    useEffect(() => {
        //guardar en localStorage
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDelete = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id
        }
        dispatch(action);
    }

    const handleToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id
        }
        dispatch(action);
    }
    return {
        ...todos, //devuelvo las props
        todos,//y devuelvo el objeto completo
        handleNewTodo, //expongo las funciones o metodos del custom Hook
        handleDelete,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodos: todos.filter(todo => !todo.done).length


    }
}