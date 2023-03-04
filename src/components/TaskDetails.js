import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function TaskDetails({user_id}) {

  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] =useState([])

  useEffect(() =>{
    fetch(`http://localhost:9292/user/tasks/${user_id}`)
    .then(response => response.json())
    .then((tasks) => {
      console.log(tasks)
      setTasks(tasks)
      setAllTasks(
      tasks.map((task) => (
        <div class="card">
          <div class="card-body">
            <Link to={{ pathname: `/taskdetails/${task.id}` }}>
              {task.name} <br />
              {task.description} <br />
              {task.completion_status} <br />
              {task.date} <br />
              {task.due_date}
            </Link>
            <button>Update</button>
          </div>
        </div>
      )))
    })
  }, [])
  function onclick(e) {
    
  }

  return (
    <div>
      {allTasks}
    </div>
  )
}

export default TaskDetails