function Quote(props){
    return (
        <div>
            <h2>{props.author}</h2>
            <p>{props.quote}</p>
        </div>
    );
}

export default Quote;