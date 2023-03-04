import React, {useState} from 'react'

function NewTask() {

      // declaring state 
      const [isClicked, setIsClicked] = useState({
        name:"",
        description:"",
        completion_status:"",
        date:"",
        due_date:""
    })
    // function that handles the change in the inputs
       const handleChange = (e) => {
        console.log(e.target.value)
        setIsClicked({
            // spread operator to copy the data then targtting the value
            ...isClicked,
            [e.target.name] : e.target.value,   
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        // creates the post when the data is added it adds the data to the backend ie ..db.json
        fetch("http://localhost:9292/user/tasks",{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(isClicked),
            

        })
        // this makes the website to reload after data is passed and the button is clicked
        window.location.reload() 

    }
  return (
    <div>
        <form  className='new_task' onSubmit={handleSubmit}>
            <label>Name</label> <br />
            <input type="text" placeholder='Name' onChange={handleChange}/><br />
            <label>Description</label> <br />
            <input type="text" placeholder='Description' onChange={handleChange}/><br />
            <label>Status</label><br />
            <input type="text" placeholder='Status' onChange={handleChange}/><br />
            <label>Date</label><br />
            <input type="text" placeholder='Date' onChange={handleChange}/><br />
            <label>Due Date</label><br />
            <input type="text" placeholder='Due Date' /><br />
            <button >Add Task</button>
        </form>
    </div>
  )
}

export default NewTask


// name
// description
// completion_status
// date
// due_date
// user_id