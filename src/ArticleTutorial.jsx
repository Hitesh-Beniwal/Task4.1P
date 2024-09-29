import { ArticleReact } from './Article';  
import Tutorials from './Tutorials';


function SeeAllButton({ label }) {
  return <button>{label}</button>;
}

function FeaturedArticlesAndTutorials() {
  return (
    <div className="FeaturedArticlesAndTutorials">
      <h2>Featured Articles</h2>
      <ArticleReact />
      <SeeAllButton label="See all articles" />  { }

      <h2>Featured Tutorials</h2>
      <div className="tutorial">
        <Tutorials />
      </div>
      <SeeAllButton label="See all tutorials" />  { }
    </div>
  );
}

export default FeaturedArticlesAndTutorials;
