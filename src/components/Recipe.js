import React, { useState } from "react";

// MUI
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/core/styles";

const RecipeDialog = ({ open }) => {
  return (
    <Dialog open={open}>
      <DialogTitle>Dialog test</DialogTitle>
    </Dialog>
  );
};

const Recipe = ({ recipeName, calories, recipeImage, healthLabels }) => {
  const [open, setOpen] = useState(false);
  const useStyles = makeStyles((theme) => ({
    media: {
      height: "60%",
    },
  }));

  const handleOpen = () => {
    setOpen(!open);
  };

  const classes = useStyles();

  return (
    <>
      <Card raised={true} className="recipe-card">
        <CardHeader
          title={recipeName}
          subheader={calories}
          avatar={<Avatar>M</Avatar>}
        />
        <CardMedia image={recipeImage} className={classes.media} />
        <div className="flex">
          <Button
            color="primary"
            variant="outlined"
            className="m-t-2"
            size="small"
            onClick={handleOpen}
            endIcon={<ExpandMoreIcon />}
          >
            show more
          </Button>
        </div>
      </Card>
      <RecipeDialog open={open} />
    </>
  );
};

export default Recipe;
