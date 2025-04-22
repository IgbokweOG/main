import { useState } from "react"

export function NewTodoForm(props) {
   const [newItem, setNewItem] = useState("")

   function handleSubmit(e) {
      e.preventDefault()
      // if (newItem === "") return
  
     props.onSubmit(newItem)

      setNewItem("")
       
    }

   return (
      <form onSubmit={handleSubmit} className='new-item-form'>
      <div className='form-row'>
        <h1 >New Item</h1>
        <div className='form-input'>
        <input
         value={newItem} 
         onChange={e => setNewItem(e.target.value)}
         type="text"
         id="item" />

        <button className='btn'>Add</button>
        <h2>Todo list</h2>
        </div>
        </div>
   </form>

   )

    
}