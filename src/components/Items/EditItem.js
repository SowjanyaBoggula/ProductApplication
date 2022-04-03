import React, { useEffect } from "react";
import axios from 'axios';
import {useNavigate,useParams} from 'react-router-dom';
import { useState } from "react";
import {Link} from 'react-router-dom';

const EditItem=()=>{
    let navigate=useNavigate();
   const {id}=useParams();
    const [item,setItem]=useState({
        id:"",
        name:"",
        price:"",
        url:"",
        category:""
    });
    const {name,price,url,category}=item;
    const onInputChange=e=>{
        console.log(e.target.value);
        setItem({...item,[e.target.name]:e.target.value})

    };
    useEffect(()=>{
      console.log('EditItem.useEffect');
      loadItem()
      //console.log('EditItem.useEffect');
    },[]);
    const onSubmit=async e=>{
        e.preventDefault();
        await axios.put(`http://localhost:3004/items/${id}`,item);
        navigate.push("/")

    }
    const loadItem=async()=>{
      const result=await axios.get(`http://localhost:3004/items/${id}`);
      console.log(result.data);
      setItem(result.data);
  };
    return(
        <div className="container">
         <Link className="btn btn-primary" to="/home">
                 back to Home
             </Link>
         <h2 className="text-center mb-4"> EditItem</h2> 
         <form class="row g-3" onSubmit={e=>onSubmit(e)}>
        
  <div class="col-mb-3">
    <label for="InputId" class="form-label">Id</label>
    <input type="text" class="form-control" id="id" name="id"   placeholder="enter the id" value={id} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="InputName" class="form-label">Name</label>
    <input type="text" class="form-control" id="name"  name="name" placeholder="enter the name" value={name} onChange={e=>onInputChange(e)} />

  </div>
  <div class ="mb-3">
    <label for="exampleInputPrice" class="form-label">price</label>
    <input type="number" class="form-control" id="exampleInputEmail1"  name="price" placeholder="enter the price" value={price} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="InputUrl" class="form-label">url</label>
    <input type="text" class="form-control" id="url"  name="url" placeholder="enter the url" value={url} onChange={e=>onInputChange(e)} />

  </div>
  <div class="mb-3">
    <label for="Inputcategory" class="form-label">category</label>
    <input type="text" class="form-control" id="category" name="category"  placeholder="enter the category" value={category} onChange={e=>onInputChange(e)} />

  </div>
  <div class="col-12">
  <button type="submit" class="btn btn-primary">Edit Item</button>
  </div>
</form>        
        </div>
        
    )
}
export default EditItem;
