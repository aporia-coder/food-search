import React from "react";

// MUI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";

const Recipe = ({ recipeName, calories, recipeImage }) => {
  return (
    <Card raised={true} className="recipe-card">
      <CardHeader
        title={recipeName}
        subheader={calories}
        avatar={<Avatar>M</Avatar>}
      />
      <CardMedia image={recipeImage} className="recipe-image" />
    </Card>
  );
};

export default Recipe;
