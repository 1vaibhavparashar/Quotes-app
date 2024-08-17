import React, { Fragment, useEffect, useState } from 'react';
import Quote from './Quote/Quote';
import styles from './AllQuotes.module.css';

function AllQuotes() {
    let [quotes, setQuotes] = useState([]);

    async function getQuotes() {
        let resp = await fetch('http://localhost:8081/allQuotes');
        let data = await resp.json();
        setQuotes(data);
    }

    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <Fragment>
            <div className={styles.quotesContainer}>

                {quotes.map((quote) => {
                    return (
                        <Quote 
                            key={quote._id} 
                            author={quote.author} 
                            text={quote.text} 
                            id={quote._id} 
                        />
                    );
                })}
            </div>
        </Fragment>
    );
}

export default AllQuotes;
