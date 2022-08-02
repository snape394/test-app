import React, { useEffect, useRef, useState } from "react";
import { PaginationComponent } from "../pagination/pagination.component";
import { SearchComponent } from "../pagination/search.component";
import { ItemComponent } from "./item.component";

const defaultItems = [
    "Preheat the oven to 350 degrees.",
    "Spread the olive oil around a glass baking dish.",
    "Add the yellow squash and place in the oven for 30 mins.",
    "Add the salmon, garlic, and pine nuts to the dish.",
    "Bake for 15 minutes.",
    "Remove from oven. Add the lettuce and serve.",
    "Cook the fish on the grill until hot.",
    "Place the fish on the 3 tortillas.",
    "Top them with lettuce, tomatoes, and cheese.",
    "some random text"
  ]

export const ToDoComponent = () =>{

    const [todoList, setTodo] = useState(defaultItems);
    const [task, changeTask] =useState('')
    const [count,updateCount] = useState(0);

    useEffect(()=>{
    },[todoList])


const addTask = () =>{
    setTodo(prev=>[...prev,task])
    changeTask('')
}


const incCount =()=>{
    updateCount(count+1);
    console.log(count);
    
}

const onSearch = (e:any) =>{

    setTodo(todoList.filter(todo=>todo.toLowerCase().indexOf(e.target.value.toLowerCase())>=0))

}

    return (
        <>
        <h2>To Do List</h2>

        <input  type="text" value={task} onChange={(e)=>changeTask(e.target.value)}/>


<button onClick={addTask}>
    Add todo
</button>

Search : <SearchComponent onSearch={onSearch}/>

        {todoList.length==0
        ?
        <h3>No items to display</h3>

        :
            // todoList.map((item,index)=>(
            //     <li key={index}>{item}</li>
            // ))
            <PaginationComponent data={todoList}/>

            
        }


        <h1>{count} </h1>
        <button onClick={incCount}>Update Count</button>
   
        </>
    )
}
