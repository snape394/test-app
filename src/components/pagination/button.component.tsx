export const ButtonComponent = (props:any)=>{


    return(
        <div className="buttons">
        {[...Array(props.count)].map((x, i) =>
            <button key={i} onClick={props.handlePageClick}>{i+1}</button>
          )}
          </div>
    )
}