import React, { useRef, Fragment } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styles from './NewQuotes.module.css';

function NewQuotes() {
    const usernameRef = useRef();
    const quoteInpRef = useRef();
    let navigate = useNavigate();

    const addQuoteHandler = async (e) => {
        e.preventDefault();
        let author = usernameRef.current.value;
        let text = quoteInpRef.current.value;
        try {
            await axios.post('http://localhost:8081/addQuotes', { author, text });
            navigate('/');
        } catch (e) {
            console.log('Cannot post at this moment');
        }
    };

    return (
        <Fragment>
            <form className={styles.formContainer} onSubmit={addQuoteHandler}>
                <h1>New Quote Form</h1>
                <div>
                    <label htmlFor="author">Author</label>
                    <input
                        type="text"
                        id="author"
                        ref={usernameRef}
                        placeholder="Add author name"
                    />
                </div>
                <div>
                    <label htmlFor="quote">Quote</label>
                    <textarea
                        rows={4}
                        cols={10}
                        id="quote"
                        ref={quoteInpRef}
                        placeholder="Add quote"
                    ></textarea>
                </div>
                <button type="submit">Add</button>
            </form>
        </Fragment>
    );
}

export default NewQuotes;
