import React from 'react';

const RecipeList = (props) =>(
    <div style={props.style}>
        <h2>RecipeList</h2>
            <ul>
                <li>
                    <span>Creepy Halloween Skull Cupcakes</span>
                    <span>Dessert</span>
                </li>
                <li>
                    <span>Blueberry Sour Cream Coffee Cake</span>
                    <span>Dessert</span>
                </li>
                <li>
                    <span>Chicken Tenderlion in the slow Cooker</span>
                    <span>Meat</span>
                </li>
            </ul>
    </div>
)
export default RecipeList;