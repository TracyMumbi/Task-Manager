import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

function TaskDetails({user_id}) {
  const {taskId} = useParams()
  const [task, setTask] = useState()

  function handleClick(e) {
    fetch(`http://localhost:9292/tasks/${taskId}`,{
      method: 'PATCH',
      headers:
        {'Content-Type': 'application/json'},
      body: JSON.stringify({
        completion_status:  "Completed"
      })
    })
    .then(response => response.json())
    .then((task) => {
      setTask(
        <div class="card">
          <div class="card-body">
              {task.name} <br />
              {task.description} <br />
              {task.completion_status} <br />
              {task.date} <br />
              {task.due_date}
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
      )
    })
  }
  useEffect(() =>{
    fetch(`http://localhost:9292/tasks/${taskId}`)
    .then(response => response.json())
    .then((task) => {
      console.log(task)
      setTask(
        <div class="card">
          <div class="card-body">
              <h1>{task.name} </h1><br />
              {task.description} <br />
              {task.completion_status} <br />
              {task.date} <br />
              {task.due_date}
            <button onClick={handleClick}>Update</button>
          </div>
        </div>
      )
    })
  }, [])

  return (
    <div>
      {task}
    </div>
  )
}

export default TaskDetails