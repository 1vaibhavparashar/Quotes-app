import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styles from './ShowQuotes.module.css';

function ShowQuotes() {
    let [quote, setQuote] = useState({ author: '', text: '' });

    const params = useParams();

    async function fetchQuotes() {
        let resp = await axios.get(`https://git-4.onrender.com/quotes/${params.id}`);
        let { text, author } = resp.data;
        setQuote({ text, author });
    }

    useEffect(() => {
        fetchQuotes();
    }, []);

    return (
        <div className={styles.quoteContainer}>
            <h1>{quote.text}</h1>
            <h2>{quote.author}</h2>
        </div>
    );
}

export default ShowQuotes;
