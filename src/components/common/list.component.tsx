import React from "react";

export const ListComponent = (props:any) =>{

    return (
        <ul>
            {
                props.data?.map((v:any,i:any)=>(
                    <li key={i}> {v}</li>
                ))
            }
        </ul>
    )

}