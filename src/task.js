import React from 'react';

const Tasks = (props) => {
    
    return (
        <div style={{border:'1px solid black',
                    margin:'10px',width:'20%'}}>
       
        <p> <h4>Decription of the Task {props.id}:</h4> {props.description}</p>
        <p> <h4>Catergory of the Task {props.id}:</h4>{props.category}</p>

        </div>
    );
    
} 

export default Tasks;