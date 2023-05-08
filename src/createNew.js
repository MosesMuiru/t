import ReactDOM from 'react-dom';
import Nav from './nav';
import './css/style.css';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useState } from 'react';


import React from 'react';

const CreateNew = () => {
  const [todo,settodo] = useState("")
  const[duedate,setduedate] = useState("")
  const [taskDetails,setTaskDetails] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { duedate,todo,taskDetails};
    try {
      const response = await fetch('http://localhost:5000/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await response.json();
      console.log(json);
      // Reset form
      settodo('');
      setTaskDetails('');
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div>
         <Nav/>
      <main>
        <h3 className="formh3"><u>Enter new task</u></h3>
        <div className="form">
          <form action="" onSubmit={handleSubmit}>
            <div id="Urgency">
              <label htmlFor="Urgency">Urgency</label><br />
              <select name="Urgency" id="Options">
                <option value="Short Term">Short Term</option>
                <option value="Long Term">Long Term</option>
              </select><br /><br />
              <label htmlFor="Due date">Due Date</label><br />
              <input type="tex" placeholder="Enter due date" value={duedate} onChange={(e) => setduedate(e.target.value)} /><br /><br />
            </div>
            <div>
              <input type="text" placeholder="To-do" value={todo} onChange={(e) => settodo(e.target.value)} /><br /><br />
            </div>
            <label htmlFor="Details" >Task Details</label><br />
            <textarea rows="10" cols="50" value={taskDetails} onChange={(e) => setTaskDetails(e.target.value)}></textarea><br />
            <input type="Submit" value="Add Task"  />
          </form>
        </div>
      </main>
    </div>
  );
}


export default CreateNew;

/*

const props = { placeholder: 'Please Select...' };
const show = () => {
    setOpenPicker(true);
};
const onClose = () => {
    setOpenPicker(false);
};
<Datepicker
    controls={['calendar']}
    showOnClick={false}
    showOnFocus={false}
    isOpen={openPicker}
    onClose={onClose}
    touchUi={true}
    inputComponent="input"
    inputProps={props}
 />
<Button onClick={show}>Show picker</Button>

*/