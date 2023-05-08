import React from 'react';
import './css/style.css';
import Nav from './nav';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

const List = () => {
  return (
    <div>
      <Nav/>
          <h3 className="formh3"><u>Enter new task</u></h3>
          <div className="form">
            <form action="">
              <div id="Urgency">
                <label htmlFor="Urgency">Urgency</label><br />
                <select name="Urgency" id="Options">
                  <option value="Short Term">Short Term</option>
                  <option value="Long Term">Long Term</option>
                </select><br /><br />
                <label htmlFor="Due date">Due Date</label><br />
                <input type="text" placeholder="Enter due date" /><br /><br />
              </div>
              <div>
                <input type="text" placeholder="To-do" /><br /><br />
              </div>
              <label htmlFor="Details">Task Details</label><br />
              <textarea rows="10" cols="50"></textarea><br />
              <input type="submit" value="Add Task" />
            </form>
          </div>
    </div>
        
  );
}

export default List;