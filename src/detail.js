import React from "react";
import Nav from "./nav";
import useData from "./effect";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Tasks from "./task";


const Details = ()=> {

  const [data] = useData();
  return (
          <div className="task-list">
          <Nav/>
          <h1 style={{color:"blue"}}>My Tasks List</h1>
          <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
          {data.map(task => <Tasks
            key={task.id}
            id= {task.id}
            description={task.description}
            category = {task.category}
            Due-Date = {task.Due-Date}
          ></Tasks>)
          }
          </div>


          </div>
  );
}

export default Details;
 

