import React, { useContext, useRef } from 'react'
import { context } from './context';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const inputRef = useRef(null);
    const data = useContext(context);
    const navigate = useNavigate();


    const {id , setId, text , setText } = data;

    const handlesubmit= ()=>{
        const Heading = inputRef.current.heading.value;
        const Blog = inputRef.current.blog.value;
        const id = Math.floor(Math.random()*1000);
        // setId(randomNumber);
        setText([...text,{Heading,Blog, id}]);
        navigate('list');
    }

  return (
    <div>
   <form ref={inputRef} onSubmit={(e)=>e.preventDefault()}>
    <label>Heading : </label>
    <input type="text" name='heading' />
    <br /><br />
    <label>Blog : </label>
    <input type='text' name='blog' />
    <button onClick={handlesubmit}>submit</button>
   </form>

    </div>
  )
}

export default Create