import recipedata from "./recipe.json";
import './styling.css';


function AuthorInfo() {
  const recipeAuthor = recipedata.map((data)=> (
    <div key={data.name}></div>
  ));

  const recipeAuthorImage = recipedata.map((data)=> (
    <div key={data.name}>
      <img src={data.authorImage} alt={data.author} className="authorImage" />
    </div>
  ));

  const recipeWebsite = recipedata.map((data)=> (
    <div key={data.name}>
      <a href={data.website}>{data.website}</a>
    </div>
  ));

  return(
    <div>
      {recipeAuthorImage}
      {recipeAuthor}
      {recipeWebsite}
    </div>
  );
   
 }
 
 export default AuthorInfo;
 
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 