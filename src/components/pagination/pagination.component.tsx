import { useEffect, useState } from "react"
import { ButtonComponent } from "./button.component";



const itemsPerPage = 10;

export const PaginationComponent = (props:any) =>{

    useEffect(()=>{
fetchData();
    },[])


    const fetchData = () =>{
        return fetch('https://jsonplaceholder.typicode.com/posts').then(r=>r.json()).then(r=>setItems(r))
    }
    const [items, setItems] = useState([]);
    const [currentPage,setCurrentPage] = useState(1)
    const displayItems = items.slice((currentPage-1)*itemsPerPage,itemsPerPage*currentPage)
    const pageNumbers = Math.ceil( items.length / itemsPerPage);
    const handlePageClick = (e:any) =>{
        const pageNumber = e.target.innerText;
        setCurrentPage(pageNumber)

    }
   
    return (
        <>
         <ul className={`list-group`}>
{
    displayItems.map((item:any,index:any)=>(

       
  <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
    {item.title}
        </li >
    ))
}
</ul>

<ButtonComponent count={pageNumbers} handlePageClick={handlePageClick}/>


{

}


        </>
    )
}