import React from "react";
import { useState, useEffect } from "react";
//props.query
const Articles = (props) => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        fetch("https://hn.algolia.com/api/v1/search?query")
            .then((res) => res.json())
            .then((data) => {
              console.log(data.hits);
              console.log("Das sind meine Props! Also meine Einträge", props.query);
              setArticles(data.hits);
            })
            .catch((err) => console.log(err));
    }, []);

    return ( 
        <>
          <div className = "App" >
  
            {articles ? articles.map((article) => 
            <>
              <h2>{article.title}</h2>
              <a href="article.url">{article.url}</a>
        </>
        )
            :"Loading......."}
            
          </div>
        </>
      );
};

export default Articles;