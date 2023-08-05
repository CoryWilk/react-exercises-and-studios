import styles from './Description.module.css';
import React from 'react';

let RecipeAuthor = () => {
    let authorLink = "https://www.recipetineats.com/"
    let authorPhoto = "https://www.recipetineats.com/wp-content/uploads/2014/04/Dozer-and-Me.jpg"
    let authorName = "Nagi Maehashi"

    return (
        <div className = {styles.recipeAuthorBlock}>
           <img src={authorPhoto} alt = "Nagi Maehashi" className={styles.imageUpdates} />
           <div>
            <h3>{authorName}</h3>
            <a href={authorLink}>RecipeTin Eats</a> 
           </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <h1>My Best Grilled Cheese Sandwich</h1>
                    <p>Techniques to make the greatest grilled cheese sandwich</p>
                </div>
                <RecipeAuthor  />
            </div>
        );
    }
}
export default RecipeDescription;