import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Task from '../components/Task'
import TaskDetails from '../components/TaskDetails'


function Home({user}) {

  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState([])

  const user_id = localStorage.getItem('user_id')


useEffect(() =>{
  fetch(`http://localhost:9292/user/tasks/${user_id}`)
  .then(response => response.json())
  .then((tasks) => {
    console.log(tasks)
    setTasks(tasks)
    setAllTasks(
    tasks.map((task) => (
        <div class="card" style={{width: "18rem"}}>
          <div class="card-body" >
            <h5 class="card-title">{task.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{task.status}</h6>
            <p class="card-text">{task.description}</p>
            <a href={`/taskdetails}`} class="card-link">more details</a>
          </div>
        </div>
    )))
  })
}, [])
  return (
    <div>
      {allTasks}
      <TaskDetails user_id = {user_id}/>
    </div>
  )
}

export default Home