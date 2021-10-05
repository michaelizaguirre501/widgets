import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [term, setTerm] = useState("programming");
  const [debouncedTerm, setDebouncedTerm] = useState(term);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedTerm(term);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, [term]);

  useEffect(() => {
    //ONLY RUNS THIS SEARCH WHEN DEBOUNCE TERM CHANGES(and initial render)
    async function fetchData() {
      const { data } = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          origin: "*",
          format: "json",
          srsearch: debouncedTerm,
        },
      });
      setResults(data.query.search);
    }
    fetchData();
  }, [debouncedTerm]);

  const renderedResults = results.map(({ title, snippet, pageid }) => {
    return (
      <div key={pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${pageid}`}
            className="ui button"
          >
            Go to article
          </a>
        </div>
        <div className="content">
          <div className="header">{title}</div>
          {snippet.replaceAll(
            /<span class="searchmatch">|<\/?span>|&quot;/g,
            ""
          )}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            type="text"
            className="input"
          />
        </div>
      </div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
