import React, {useEffect, useState} from 'react'

function Task({user_id}) {
  const date = new Date()
  const id = user_id


  const [tasks, setTasks] = useState([])
  const [allTasks, setAllTasks] = useState([])

useEffect(() =>{
  const id = localStorage.getItem('user_id')

  fetch(`http://localhost:9292/user/tasks/${id}/${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`)
  .then(response => response.json())
  .then((tasks) => {
    console.log(tasks)
    setTasks(tasks)
    setAllTasks(
    tasks.map((task) => (
      <div>
        <h2>{task.title}</h2>
        <p>{task.body}</p>
      </div>
    )))
  })
}, [])
  return (
    <div>
      {allTasks}
    </div>
  )
}

export default Task