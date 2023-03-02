import {Routes, Route, useNavigate} from 'react-router-dom'
import Task from './components/Task';
import Home from './views/Home';
import NavBar from './components/NavBar';
import { useEffect, useState } from 'react';
import Login from './components/Login';
import NewTask from './components/NewTask';
import TaskDetails from './components/TaskDetails';


function App() {

  const [user, setUser] = useState({})

  const navigate = useNavigate()
useEffect(() => {

  const user_id = localStorage.getItem('user_id')
  user_id?navigate("/"):navigate("/login")
}, [])

console.log(user)
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path = '/' element = {<Home user = {user} />}/>
        <Route exact path = '/tasks' element = {<Task />}/>
        <Route exact path = '/login' element = {<Login setUser = {setUser}/>} />
        <Route exact path = '/newtasks' element = {<NewTask />}/> 
        <Route exact path = '/taskdetails' element = {<TaskDetails />} />
      </Routes>
    </div>
  );
}

export default App;