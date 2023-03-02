import React from 'react'

function NewTask() {
  return (
    <div>
        <form>
            <label>Name</label>
            <input type="text" placeholder='Name' /><br />
            <label>Description</label>
            <input type="text" placeholder='Description' /><br />
            <label>Status</label>
            <input type="text" placeholder='Status' /><br />
            <label>Date</label>
            <input type="text" placeholder='Date' /><br />
            <label>Due Date</label>
            <input type="text" placeholder='Due Date' /><br />
        </form>
    </div>
  )
}

export default NewTask


// t.string :name
// t.string :description
// t.string :completion_status
// t.date :date
// t.date :due_date
// t.integer :user_id