import React from 'react';
import classNames from 'classnames';


const RecipeDetails = (props) =>{
    if (!props.recipe){
        return (
        <p 
        style={props.style}
        className={classNames('h3 p2 bg-white italic center',props.className) }
        >
            Please select recipe to see the details.
        </p>
        );
    }

    return (
    <div 
    style={props.style}
    className={classNames('p2 bg-white',props.className)}
    >
        <h2 className="h2">{props.recipe.name}</h2>
        <img className="fit boxed-image" src={props.recipe.image} />
        <div>
            <span className="blue">Category : </span>
            <span>{props.recipe.category} </span>
            <span className="blue">Calories : </span>
            <span>{props.recipe.calories}</span>
        </div>
        <h3>Ingredients</h3>
        <ul>
            {props.recipe.ingredients.map(ingredient =>(
            <li 
            key ={ingredient}
            className="m1"
            >
                {ingredient}
            </li>
        ))}
        </ul>
        <h3>Steps</h3>
        <ol>
        {props.recipe.steps.map(step =>(
            <li 
            key ={step}
            className="m1"
            >
             {step}
            </li>
        ))}
        </ol>
    </div>
    )
}

export default RecipeDetails;