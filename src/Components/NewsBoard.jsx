import { useEffect } from "react";
import { useState } from "react";

// components
import NewsItem from "./NewsItem";

//* eg NEWS DON'T HAVE ANY IMAGES SO THE IMPORTED IMAGE
//*  IS USED WHILE us NEWS HAVE IMAGES(AT LEAST MOST OF THEM)

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=eg&category=${category}&apiKey=${
      import.meta.env.VITE_API_KEY
    }`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  return (
    <div>
      <h2 className="text-center">
        Latest<span className="badge bg-danger">News</span>
      </h2>
      {articles.map((news, idx) => (
        <NewsItem
          key={idx}
          title={news.title}
          description={news.description}
          src={news.urlToImage}
          url={news.url}
        />
      ))}
    </div>
  );
};

export default NewsBoard;
