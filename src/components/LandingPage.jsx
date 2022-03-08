import React from "react";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import me from "../images/me.jpg";
const LandingPage = () => {
  const useStyles = makeStyles((theme) => ({
    avatar: {
      width: theme.spacing(15),
      height: theme.spacing(15),
      margin: theme.spacing(1),
    },
    title: {
      color: "black",
    },
    subtitle: {
      color: "black",
      textTransform: "uppercase",
    },
    typedContainer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%,-50%)",
      width: "100vw",
      textAlign: "center",
      zIndex: 1,
    },
  }));

  const classes = useStyles();

  return (
    <Box className={classes.typedContainer}>
      <Grid container justifyContent="center">
        <Avatar
          className={classes.avatar}
          src={me}
          alt="Photo of Anthony M. Jimenez"
        />
      </Grid>
      <Typography className={classes.title} variant="h4">
        <Typed strings={["Anthony Jimenez"]} typeSpeed={40} />
      </Typography>

      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Frontend Developer",
            "Backend Developer",
            "Full Stack Web Developer",
          ]}
          typeSpeed={40}
          loop
        />
      </Typography>
    </Box>
  );
};

export default LandingPage;
