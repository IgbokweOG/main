import { TodoItem} from "./TodoItem"

export function TodoList({ todos, toggleTodo, deleteTodo }) {

    return(
        <div className="ul-container"> 
          <ul className='list'>
            {todos.length === 0 && "No Todos"}
            {todos.map(todo => {
             return(
                <TodoItem 
                {...todo} key={todo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
                //  id={todo.id} 
                //  completed={todo.completed}
                //  title={todo.title}
                //  key={todo.id}/>
             )
            })}
          </ul>
        </div>

    )
}