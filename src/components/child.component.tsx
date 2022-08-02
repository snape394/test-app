import React, { useContext } from "react";
import { MainContext } from "../App";
import { ListComponent } from "./common/list.component";
import PropTypes from 'prop-types'
export const ChildComponent = (props:any) =>{

    const data = props.data;
    const updateCount = props.counter;
    const cont = useContext(MainContext);

    return (
        <>
        <h1>Child</h1>
        <h2>
            {cont}
        </h2>
        {
            data.map((v:any,i:any)=>(
            <div key = {i}>
                 <h4> {v.name}</h4>
                 <ListComponent data={v.steps}></ListComponent>
                 </div>
                
            ))
        }


       <button onClick={()=>updateCount(1)}>Increase Counter</button>
        <button onClick={()=>updateCount(-1)}>Decrease Counter</button>
  
        </>
    )
}
