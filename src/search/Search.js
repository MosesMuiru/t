import React from 'react'
import { useState,useEffect } from 'react'



function Search() {

    const [query,setQuery] = useState("")
    const[data,setData] = useState({})
    const [returnData,setReturnData] = useState({})
    const [available,setAvailable] = useState("")
    
    useEffect(() => {
        fetch("http://localhost:4000/api/api/alltodos")
        .then((data) =>{ console.log(data)
            setData(data)
    
        })
        .catch(err => console.log(err))

        
    },[searching])

    // making the search base
   function searching (query){
        //if clicked should search for data
        data.map((todo) =>{
            if(todo.hasOwnProperty(query)) setReturnData(todo)
            else setAvailable("not found")
        })

    }
  return (

    <div>

    <label>Search a todo</label>
    <input className='search-bar' type='text' value={query} onChange={(e) => setQuery(e.target.value)} >
    </input>
    <input type='submit' onSubmit={searching} value="search-data">
     
    </input>
    

    <div>
        {/* the display of the to-do */}
        <div>
            {/* {data.map((todo) => ( */}
                <p>

                  the todo ---  {returnData.todo}
                  <br/>
                  the due data -- {returnData.duedata}<br/>
                  the todo detail -- {returnData.taskdetails}


                </p>
               

            {/* ))} */}
          
        </div>
        
    </div>
 
    </div>
  )
}

export default Search