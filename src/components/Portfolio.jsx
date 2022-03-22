import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Stack from "@material-ui/core/Stack";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import quicklist from "../images/quicklist.png";
import reactquiz from "../images/reactquiz.png";
import jmarket from "../images/jmarket.png";
import calorie from "../images/calorie.png";

// import project2 from "../images/html-css-javascript.jpg";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#36454F",
    height: "100vh",
    opacity: "0.8",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  // jHood - needs to be launched
  // react Quiz - good to go
  // Pokemon React - styling issues,
  // calorie tracker -- needs updated homepage
  // quicklist -- launched, notes in repo
  {
    name: "Quicklist",
    description: `This full stack eCommerce site creates shopping lists with items from any site! 

    Effortlessly submit and save future online purchases.
    
    How does it work?
    
     1. Grab a site’s URL and submit it to Quicklist.
    
    That’s it! After saving the product, Quicklist will create an entry in one of your lists using information directly from the URL’s web page.
    
    Quicklist was written using React, Node, Express, MongoDB Atlas, Bootstrap, and Auth0.`,
    image: quicklist,
  },
  {
    name: "React Quiz",
    description: `This application uses user input and data from Trivia DB (https://opentdb.com/api_config) to create a personalized quiz. 
    I've been incrementally working on this project for over a year! Last major change I implemented involved removing bootstrap and creating CSS styling.
    React Quiz was written using Axios, React, ES6+, CSS, he(decoding library)
    `,
    image: reactquiz,
  },
  {
    name: "jmarket",
    description: `jmarket is a robinhood style application built for buying and selling stocks. This was one of my first projects that involved managing complex state. This project uses useReducer and context to create a custom hook for user data and authorization.
    jmarket was written using React, Ruby on Rails (API), Postgres, and Bootstrap.
    `,
    image: jmarket,
  },
  {
    name: "Calorie Tracker",
    description: `Calorie Tracker calculates the Body Mass Index of a user based on their weight, height, and age input. Based on the results the application will recommend a daily calorie count. A user can also input calorie events (eating, exercising) that reduce or increase the calorie count. `,
    image: calorie,
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Stack spacing={2}>
        {/* Projects */}
        {projects.map((project, i) => (
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Project 1"
                image={project.image}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {project.description}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Share
              </Button>
              <Button size="small" color="primary">
                Live Demo
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>{" "}
    </Box>
  );
};

export default Portfolio;
