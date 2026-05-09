
import { useState } from 'react'
import './App.css'

// import Welcome from './Componant/Welcome'
// interface User {
//   name: string;
//   age:number
// }

interface Todo{
  id:number;
  task:string;
  done:boolean
}
function App() {
 

  const [count , setCount] = useState(0);
  // const [data, setData] = useState<User | null>(null);
  // const [tasks, setTasks] = useState<string[]>([])
  const [user, setUser] = useState<{username: string, email: string } | null>(null);
  const [tasks, SetTasks] = useState<Todo[]> ([])
  return (
    <>
   <button onClick={() => setCount(count + 1)}>Increment</button>
   <p>Count: {count}</p>
{/* <button onClick={() => setData({ name: "John Doe", age: 30 })}>Set User</button>
{data && <p>User: {data.name}, Age: {data.age}</p>}
<button onClick={() => setData(null)}>Clear User</button>
<button onClick={() => setTasks([...tasks, "New Task"])}>Add Task</button>
{tasks.map((task, index) => (
  <p key={index}>{task}</p>
))} */}

<button onClick={() => setUser({ username: "johndoe", email: "john@example.com"  })}>Set User</button>
{user && 
<p>User: {user.username}, Email: {user.email}</p>
}

<button onClick={() => SetTasks([...tasks, { id: Date.now(), task: "New Task", done: false }])}>Add Task</button>

{tasks.map((task) => (
  <p key={task.id}>{task.task}</p>
))}
    </>
  )
}

export default App
