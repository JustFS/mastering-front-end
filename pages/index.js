import React from "react";
import Article from "../components/Article";
import Meta from "../components/Meta";

const index = ({ articles }) => {
  return (
    <div>
      <Meta />
      <h2>Blog</h2>
      <div className="article-list">
        {articles.map((article) => (
          <Article article={article} key={article.id} />
        ))}
      </div>
    </div>
  );
};

export default index;

// Executer le code coté serveur
export const getStaticProps = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=12"
  );
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
