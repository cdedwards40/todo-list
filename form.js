// user input - includes validation
function TodoForm({addTodo}){
  const [value,setValue] = React.useState('');
  
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        id="addToDo"
        type="text"
        className="todo"
        value={value}
        placeholder="Add Todo..."
        onChange={e => setValue(e.target.value)} />
    </form>
  )
}