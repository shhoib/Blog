import React, { useContext } from 'react'
import { context } from './context'
import { useNavigate } from 'react-router-dom';

const List = () => {
  const data = useContext(context)
  // const {id ,text} =  data;
   const navigate = useNavigate();

  // const handleSubmit= ()=>{
    
  // }
  return (
    <div>
      <ul>
        {data.text.map((item,index) => {
          return <div key = {index}>
            <li > 
                <h1 onClick={()=>{navigate(`/list/${item.id}`)}}>{item.Heading}</h1>
               
                </li> 
          </div>
        })}
        
      </ul>
    </div>
  )
}

export default List

{/* <li> key = {index}
<h1>{item.Heading}</h1>
<p>{item.Blog}</p>
</li> */}