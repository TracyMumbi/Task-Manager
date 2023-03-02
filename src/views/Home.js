import React, {useState, useEffect} from 'react'
import NavBar from '../components/NavBar'
import Task from '../components/Task'


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

export default Home