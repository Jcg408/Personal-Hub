import React from 'react';

const Quotes =(props)=> (
    <div className="QuotesContainer">
        <h1>Quote of the Day</h1>
        {props.quotes.map(quote => 
        <div key={quote.id} className="QuoteCard">
        <h2>{quote.saying}</h2>
        <h3>{quote.author}</h3>
        
        </div>
        )}
    </div>
) 

export default Quotes;