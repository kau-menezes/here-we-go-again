import { DataTypes } from "sequelize";
import db from "../db.js";

const Recipe = db.define(
    "Recipe",
    {
        recipeID: {
            type: DataTypes.INTEGER, 
            autoIncrement: true,
            primaryKey: true
        },

        name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },

        picture: {
            type: DataTypes.STRING(255),
            allowNull: true
        },


        description: {
            type: DataTypes.STRING(255),
            allowNull: true
        },

        
    }
);


export default Recipe;

