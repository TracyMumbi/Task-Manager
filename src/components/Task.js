import React, {useEffect, useState} from 'react'

function Task({user_id}) {
  const date = new Date()
  const id = user_id


  const [allTasks, setAllTasks] = useState([])

useEffect(() =>{
  const id = localStorage.getItem('user_id')

  fetch(`http://localhost:9292/user/tasks/${id}/${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
  .then(response => response.json())
  .then((tasks) => {
    console.log(JSON.parse(tasks))
    setAllTasks(
      JSON.parse(tasks).map((task) => (
      <div>
        <h2>{task.name}</h2>
        <p>{task.description}</p>
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