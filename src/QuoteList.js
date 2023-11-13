import React, { useEffect, useState } from 'react';
import Quote from "./Quote.js"

function QuoteList(){
        const [quotes, setQuotes] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() =>{
            async function getQuotes(){
                const response = await fetch(
                    "https://dummyjson.com/quotes"
                );
                const data = await response.json();
                setQuotes(data.quotes)
                setLoading(false);
            }
            getQuotes();
        },[])

        const quotesJSX = quotes.map((quote) =>{
            return <Quote key={quote.id} {...quote}/>
        })

        return (
            <>
            {loading ? <p>loaaading..</p> : quotesJSX}
            </>);
}

export default QuoteList;