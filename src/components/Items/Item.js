import React,{useState,useEffect} from "react";
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
const Item=()=>{
    const [item,setItems]=useState({
        id:"",
        name:"",
        price:"",
        url:"",
        category:""
        
    });
    const {id}=useParams();
    useEffect(()=>{
        loadItem();
    })
    
    const loadItem=async()=>{
        const result=await axios.get(`http://localhost:3004/items/${id}`);
        console.log(result.data);
        setItems(result.data);
    };
     
    
    return(
         <div className="container py-4">
             <Link className="btn btn-primary" to="/home">
                 back to Home
             </Link>
             <h1 className="display-4">Item Id:{id}</h1>
             <hr />
             <ul className="list-group w-50">
                 <li class="list-group-item">id:{item.id}</li>
                 <li class="list-group-item">name:{item.name}</li>
                 <li class="list-group-item">price:{item.price}</li>
                 <li class="list-group-item">url:{item.url}</li>
                 <li class="list-group-item">category:{item.category}</li>
             </ul>
         </div>
                         
            
        
    )
}
export default Item;