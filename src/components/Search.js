import React, {useEffect, useState} from "react";
import axios from 'axios';

const Search = () => {

    const [term, setTerm] = useState('init');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect( () => {
        const timeoutID = setTimeout( () => {
            setDebouncedTerm(term);
        }, 1000);

        return ( () => {
            clearTimeout(timeoutID);
        })
    }, [term]);

    useEffect(() => {
        doAxiosCall(debouncedTerm);
    }, [debouncedTerm]);

    const doAxiosCall = (searchString) => {
        axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action:'query',
                    list: 'search',
                    format:'json',
                    origin:'*',
                    srsearch:searchString
                }
            })
            .then((response) => {
                setResults(response.data.query.search);
            })
            .catch(e => console.log(e))
    };

    const renderedResults = results.map(result => {
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a 
                        className="ui button"
                        href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Go</a>
                </div>
                <div className="content">
                    <div className="header">{result.title}</div>
                    <span dangerouslySetInnerHTML={{__html: result.snippet}}></span>
                </div>
            </div>
        );
    });

    return(
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter Search</label>
                    <input
                        value={term}
                        onChange={e => {setTerm(e.target.value)}}
                        className="input"
                    />

                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    );
};

export default Search;