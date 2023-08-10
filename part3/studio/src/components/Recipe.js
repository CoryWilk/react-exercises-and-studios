const RecipeAuthor = () => {
   let authorLink = "https://www.allrecipes.com/cook/12381381";
   let authorPhoto = "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fcam-image-store.accountservices.meredithcorp.io%2Feaacd7e12824861b18e368003ab89e5a8f82f94a&w=320&h=320&c=sc&poi=face&q=60&orient=true";
   let authorName = "Mary-Helen Matthews";

   return (
      <div>
         <img src={authorPhoto} alt = "Mary-Helen Matthews" style={{objectFit: "contain", borderRadius: "50%"}} />
         <div>
            <h3>{authorName}</h3>
            <a href={authorLink}></a> 
         </div>
      </div>
   );
}

const RecipeIngredients = () => {
   const ingredients = ["Condensed Milk", "Cool Whip", "Cream Cheese", "Lemon Juice", "Graham Cracker Crust"];
   return(
      <div>
         <h3>Recipe Ingredients</h3>
         <ul>
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
            <li>{ingredients[3]}</li>
            <li>{ingredients[4]}</li>
         </ul>
      </div>
   );
}

const RecipeDescription = () => {
   return (
      <div> 
         <div>
            <h1>5-Ingredient No-Bake Cheesecake</h1>
            <p>Easy 5-ingredient no-bake cheesecake. It's all about chemistry. </p>
         </div>
         <div className="recipePhotoBlock">
            <RecipeIngredients />
            <RecipeAuthor />
         </div>
      </div>
   );
}

const RecipePhoto = () => {
   return (
      <img src="https://www.allrecipes.com/thmb/ZtpQeqXeqihUREV7JgkKcRP_mGs=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/2760745-ingredient-no-bake-cheesecakelela-8a773a5db2814ccfb0116894d43a5a1b.jpeg" alt="No-Bake Cheesecake" className="imageUpdates"/>
   );
}

export default function RecipeDisplay () {
   return(
      <div className="recipePhotoBlock">
         <RecipePhoto />
         <div>
            <RecipeDescription />
         </div>
      </div>
   );
}