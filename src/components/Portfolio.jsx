import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import quicklist from "../images/quicklist.png";
import reactquiz from "../images/reactquiz-xl.png";
import jmarket from "../images/jmarket-sm.png";
import calorie from "../images/calories.png";
import movie from "../images/movie-noms.png";
import node from "../images/node.png";
import inreview from "../images/inreviewlg.png";
import { Link } from "@material-ui/core";

// import project2 from "../images/html-css-javascript.jpg";
// import project3 from "../images/javascript-fullstack.jpg";
// import project4 from "../images/mern-stack.jpg";
// import project5 from "../images/react-redux.jpg";
// import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#36454F",
    height: "100%",
    opacity: "0.9",
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
    url: "https://listquick.netlify.app/",
    videoUrl: "https://www.youtube.com/watch?v=yinY6EEQ5GE",
    repoUrl: "https://github.com/anthonymjimenez/quicklist",
  },
  {
    name: "React Quiz",
    description: `This application uses user input and data from Trivia DB (https://opentdb.com/api_config) to create a personalized quiz. 
    I've been incrementally working on this project for over a year! Last major change I implemented involved creating a report that is displayed to users after completing a quiz.
    React Quiz was written using Axios, React, ES6+, CSS, he(decoding library)
    `,
    image: reactquiz,
    url: "https://yesnote.netlify.app/",
    videoUrl: "https://www.youtube.com/watch?v=flL_wPKp8qM",
    repoUrl: "https://github.com/anthonymjimenez/Quiz-React",
  },
  {
    name: "OpenSecrets Annual Report",
    description:
      "This report was collaboratively designed by members of the OpenSecrets staff. I offered guidance throughout the brainstorm/design process on what would be technically feasible. I used our blueprint to build and implement the annual report. Ultimately, I was able to include most of our original ideas. I built the majority of the elements; including the styling of the report and the navigation available throughout.",
    image: inreview,
    url: "https://www.opensecrets.org/annual-report-2021",
    videoUrl: false,
    repoUrl: false,
  },
  {
    name: "jmarket",
    description: `jmarket is a robinhood style application built for buying and selling stocks. This was one of my first projects that involved managing complex state. This project uses useReducer and context to create a custom hook for user data and authorization.
    jmarket was written using React, Ruby on Rails (API), Postgres, and Bootstrap.
    `,
    image: jmarket,
    url: false,
    videoUrl: "https://www.youtube.com/watch?v=Sy8bPBD3ku0",
    repoUrl: "https://github.com/anthonymjimenez/jmarket",
  },
  {
    name: "Calorie Tracker",
    description: `Calorie Tracker calculates the Body Mass Index of a user based on their weight, height, and age input. Based on the results the application will recommend a daily calorie count. A user can also input calorie events (eating, exercising) that reduce or increase the calorie count. `,
    image: calorie,
    url: "https://calories-counted.herokuapp.com/",
    videoUrl: "https://www.youtube.com/watch?v=xJIg-G7yfQU",
    repoUrl: "https://github.com/anthonymjimenez/calorie-tracker",
  },
  {
    name: "Amazon Parser",
    description: `This node application scraps data from an amazon URL and returns product details. I fetched the HTML as a string and then parsed through the dom elements. This required an advanced knowledge of HTML and javascript. This technology was later used in quicklist.   `,
    image: node,
    url: false,
    videoUrl: false,
    repoUrl: "https://github.com/anthonymjimenez/Amazon-Parser",
  },
  {
    name: "Movie Nominator",
    description: `This application searches through the OMDB API to generate nomination lists. Users can search for movies they want to combine into a nomination list. Once the nominees are selected they are saved into local storage so that the data persists in the browser.`,
    image: movie,
    url: "https://my-movie-nominator.netlify.app/",
    videoUrl: false,
    repoUrl: "https://github.com/anthonymjimenez/Movie-Nominator-",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container>
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} lg={6} xl={4}>
            <Card variant="outlined" className={classes.cardContainer}>
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
                {project.url && (
                  <Button size="small" color="primary">
                    <Link href={project.url} underline="hover" target="_blank">
                      Live Site
                    </Link>
                  </Button>
                )}
                {project.videoUrl && (
                  <Button size="small" color="primary">
                    <Link
                      href={project.videoUrl}
                      underline="hover"
                      target="_blank"
                    >
                      Video Demo
                    </Link>
                  </Button>
                )}
                {project.repoUrl && (
                  <Button size="small" color="primary">
                    <Link
                      href={project.videoUrl}
                      underline="hover"
                      target="_blank"
                    >
                      Codebase
                    </Link>
                  </Button>
                )}
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>{" "}
    </Box>
  );
};

export default Portfolio;
