class ArticleObj {
    constructor(src, alt, title, description,rating, name) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.description = description;
      this.rating = rating
      this.author_name = name
    }
  }

  const John = "Software development is the process of designing, creating, testing, and maintaining software applications or systems. It involves several stages, including requirements gathering, system design, coding, testing, and deployment. Developers use various programming languages and tools."

  var article1 = new ArticleObj("./images/Article1.jpg", "Article 1", "React v/s Vue", John,4.2, "Smith");
  var article2 = new ArticleObj("./images/backend.png", "Article 2", "Nodejs", John,4.6, "Xavier");
  var article3 = new ArticleObj("./images/Article3.jpeg", "Article 3", "React Hooks", John,3.5, "Rohn");

function Article({article}){
    return(
    <div className="article-body">
        <img src={article.src} alt={article.alt} />
        <h2>{article.title}</h2>
        <div className="article-body-text">
            <p>{article.description}</p>
            <hr></hr>
            <div className="star-rating">
                <img src="./images/star.png" alt="star" />
                <h5>{article.rating}</h5>
                <h4>{article.author_name}</h4>

            </div>
        </div>
    </div>
    )
}

function ArticleReact(){
    return(
        <div className="all-articles">
            <Article article={article1} />
            <Article article={article2} />
            <Article article={article3} />
        </div>
    )
}

export { ArticleObj, Article, ArticleReact };
