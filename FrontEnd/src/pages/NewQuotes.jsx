import React from 'react'
import { useRef } from 'react';
import { Fragment } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom';


function NewQuotes() {
    const usernameRef = useRef()
    const quoteInpRef = useRef()
    let navigate = useNavigate()

    const addQuoteHandler = async (e)=>{
    e.preventDefault();
    let author = usernameRef.current.value;
    let text = quoteInpRef.current.value;
    try{
        let resp = await axios.post('http://localhost:8081/addQuotes',{author,text})
        navigate('/')
        // console.log(resp,"axios res"); 
    }catch(e){
        console.log("CAN not post at this moment");
    }
    

    }
  return (
    <Fragment>
       <form onSubmit={addQuoteHandler}>
            <h1>New Quote Form</h1>
                <div>
                    <label htmlFor="">Author</label>
                    <input type="text" id='author' ref={usernameRef}  placeholder='add author name'/>
                </div>
                <div>
                    <label htmlFor="">Quote</label>
                    <textarea rows={4} cols={10} id="quote" ref = {quoteInpRef} placeholder='add quote'></textarea>
                </div>
                <button> add </button>
       </form>
    </Fragment>
  )
}

export default NewQuotes