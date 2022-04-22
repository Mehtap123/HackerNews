import React from "react";
import { useState, useEffect } from "react";

//Die Seite wird rerendert, wenn wir die StateVariable ändern oder neue Props übergeben siehe useEffect
//props.query
const Articles = (props) => {
    const [articles, setArticles] = useState(null);
    const url = `https://hn.algolia.com/api/v1/search?query=${props.query}`;
    useEffect(() => {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data.hits);
                console.log("Das sind meine Props! Also meine Einträge", props.query);
                setArticles(data.hits);
            })
            .catch((err) => console.log(err));
    }, [url]);

    return ( 
      <>
        <div className = "App">{
            articles ? articles.map((article) =>
                <div class = "article-box" >
                <h2> { article.title } </h2> 
                <a href = "article.url" > { article.url } </a> 
                <p> Author: { article.author } </p> 
                <hr/>
                </div>
            ) : "Loading......."
        }

        </div> 
      </>
    );
};

export default Articles;