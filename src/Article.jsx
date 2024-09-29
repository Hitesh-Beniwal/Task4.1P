import React from 'react';

// Article data can just be an array of objects
const articles = [
  {
    src: "./images/Article1.jpg",
    alt: "Article 1",
    title: "React v/s Vue",
    description: "Software development is the process of designing, creating, testing, and maintaining software applications or systems. It involves several stages, including requirements gathering, system design, coding, testing, and deployment. Developers use various programming languages and tools.",
    rating: 4.2,
    author_name: "Smith"
  },
  {
    src: "./images/backend.png",
    alt: "Article 2",
    title: "Node.js",
    description: "Software development is the process of designing, creating, testing, and maintaining software applications or systems. It involves several stages, including requirements gathering, system design, coding, testing, and deployment. Developers use various programming languages and tools.",
    rating: 4.6,
    author_name: "Xavier"
  },
  {
    src: "./images/Article3.jpeg",
    alt: "Article 3",
    title: "React Hooks",
    description: "Software development is the process of designing, creating, testing, and maintaining software applications or systems. It involves several stages, including requirements gathering, system design, coding, testing, and deployment. Developers use various programming languages and tools.",
    rating: 3.5,
    author_name: "Rohn"
  }
];

// Article component to render individual articles
function Article({ article }) {
  return (
    <div className="articlecontent">
      <img src={article.src} alt={article.alt} />
      <h2>{article.title}</h2>
      <div className="articletext">
        <p>{article.description}</p>
        <hr />
        <div className="star">
          <img src="./images/star.png" alt="star" />
          <h5>{article.rating}</h5>
          <h4>{article.author_name}</h4>
        </div>
      </div>
    </div>
  );
}

// ArticleReact component to render all articles
function ArticleReact() {
  return (
    <div className="all">
      {articles.map((article, index) => (
        <Article key={index} article={article} />
      ))}
    </div>
  );
}

// Export both Article and ArticleReact
export { Article, ArticleReact };
