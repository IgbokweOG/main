import { useEffect } from 'react'
import { useState } from 'react'
import { NewTodoForm } from './NewTodoForm'
import './style.css'
import { TodoList } from './TodoList'

 export default function App () {
  const [todo, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue ==null) return []

    return JSON.parse(localValue)
  })


  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todo))
  }, [todo])


  function addTodo(title) {
    setTodos(currentTodos => {
      return [
         ...currentTodos,
         {id: crypto.randomUUID(), title, completed: false },
      ]
    })

  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return{...todo, completed}
      }

      return todo
      })
    })
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    <NewTodoForm onSubmit={addTodo} />
    <TodoList todos={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  
    </>
  )
}

// export default App;
