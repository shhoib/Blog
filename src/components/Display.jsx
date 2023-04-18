import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { context } from './context';
// import { buildErrorMessage } from 'vite'
// context imp

const Display = () => {
  const data = useContext(context);
  const {text } = data;
  // data = usecontexti
  
    const {id} = useParams();
    const para ={id};
    // console.log(para.id)
  // const output=  data.text.filter((item)=>{
  //     return item.id

     const filtered= data.text.filter((item)=>{
        return item.id==para.id
     })
  return (
    <div>
    <h1>
   {filtered.map((item)=>{
   return <div key = {id}><h1>{item.Heading}</h1>
    <p>{item.Blog}</p>
   </div>
     })}
   
      
    </h1>
    </div>
  )
}

export default Display