import React from 'react'
import { Fragment } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from "./Quote.module.css"


function Quote(props) {
    let navigate = useNavigate()
    const showQuoteHandler = (id)=>{
        navigate(`/quotes/${id}`)
    }
  return (
    <Fragment>
        <li className={styles.quote}>
            <div>
                <p>Quote:{props.text}</p>
                <h3>Author:{props.author}</h3>
            </div>
            <button onClick={()=>{showQuoteHandler(props.id)}} > view full quote</button>
        </li>
    </Fragment>
  )
}

export default Quote