import {Article, ArticleObj} from "./Article";

const John = "Emerging technologies in software development are revolutionizing how applications are built and utilized. Artificial Intelligence (AI) and Machine Learning (ML) are enhancing software with capabilities for data-driven insights, automation, and personalization."

var tutorial1 = new ArticleObj("./images/ml.jpg", "Tutorial 1", "Machine Learning", John, 4.7, "Max");
var tutorial2 = new ArticleObj("./images/kub2.jpeg", "Tutorial 2", "Kubernetes", John,4.9, "Yuan");
var tutorial3 = new ArticleObj("./images/type.png", "Tutorial 3", "Typscript", John,3.2, "Kevin");


function Tutorials(){
    return(
        <div className="all-articles">
        <Article article={tutorial1} />
        <Article article={tutorial2} />
        <Article article={tutorial3} />
        </div>
    )
}

export default Tutorials