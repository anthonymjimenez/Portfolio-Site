import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#36454F",
    // height: "",

    opacity: "0.9",
  },
  timeLine: {
    position: "relative",
    padding: "1rem",
    margin: "o auto",
    "&:before": {
      content: "''",
      position: "absolute",
      height: "100%",
      border: "1px solid white",
      right: "40px",
      top: 0,
    },
    "&:after": {
      content: "''",
      display: "table",
      clear: "both",
    },
    [theme.breakpoints.up("md")]: {
      padding: "2rem",
      "&:before": {
        left: "calc(50% - 1px)",
        right: "auto",
      },
    },
  },
  timeLineItem: {
    padding: "1rem",
    borderBottom: "2px solid black",
    position: "relative",
    margin: "1rem 3rem 1rem 1rem",
    clear: "both",
    "&:after": {
      content: "''",
      position: "absolute",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      right: "-0.625rem",
      top: "calc(50% - 5px)",
      borderStyle: "solid",
      borderColor: "#6495ED black transparent transparent",
      borderWidth: "0.625rem",
      transform: "rotate(45deg)",
    },
    [theme.breakpoints.up("md")]: {
      width: "44%",
      margin: "1rem",
      "&:nth-of-type(2n)": {
        float: "right",
        margin: "1rem",
        borderColor: "black",
      },
      "&:nth-of-type(2n):before": {
        right: "auto",
        left: "-0.625rem",
        borderColor: "transparent transparent black #6495ED",
      },
    },
  },
  timeLineYear: {
    textAlign: "center",
    maxWidth: "9.375rem",
    margin: "0 3rem 0 auto",
    fontSize: "1.8rem",
    color: "#fff",
    background: "#6495ED",
    lineHeight: 1,
    padding: "0.5rem 1rem",
    "&:before": {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      textAlign: "center",
      margin: "0 auto",
      "&:nth-of-type(2n)": {
        float: "none",
        margin: "0 auto",
      },
      "&:nth-of-type(2n):before": {
        display: "none",
      },
    },
  },
  heading: {
    color: "aliceblue",
    padding: "3rem 0",
    textTransform: "uppercase",
  },
  subHeading: {
    color: "aliceblue",
    padding: 0,
    textTransform: "uppercase",
  },
  body1: {
    color: "#6495ED",
  },
  subtitle1: {
    color: "aliceblue",
  },
}));

const Resume = () => {
  const classes = useStyles();
  return (
    <Box component="header" className={classes.mainContainer}>
      <Typography variant="h4" align="center" className={classes.heading}>
        Engineering Experience
      </Typography>
      <Box component="div" className={classes.timeLine}>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2018
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            CUNY - laguardia community college
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Associate of Science in Programming and Software Development
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            While studying at LaGuardia I discoverd my passion for JavaScript. I
            spent most of my time outside of class learning how to build full
            stack javascript applications. As a member of LaGuardia's Tech
            Scholars program I collaborated directly with the best student
            engineers in the CUNY network. I graduated in August 2020 with
            honors.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2020
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Flatiron School
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Full Stack Web Development, Ruby on Rails and JavaScript
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Studying at Flatiron School was a great opportunity to continue
            learning the skills needed to create full stack applications
            collaboratively. I enjoyed the project driven nature of the course.
            I was already comfortable with JavaScript and Ruby on Rails so I was
            able to focus on furthering my ability to turn my ideas into
            websites.
          </Typography>
        </Box>
        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2021
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Major League Hacking (MLH) | National Security Innovation Network
            (NSIN)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Software Engineering Intern
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Our team lead development on a React Native application that
            provides essential information to thousands of members of the United
            States Army. The existing prototype that was inherited by our team
            was refactored to be more modular and useful for the clients needs.
            During this time we collaborated with military personnel and project
            sponsors to identify core features before launch. For example, I
            modified the Node backend with a headless CMS (Strapi) to allow the
            site admins to update data without the help of a programmer.
          </Typography>
        </Box>

        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            Major League Hacking (MLH) | Meta
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Production Engineering Intern
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Interning as a Production Engineer with MLH and Meta expanded my
            knowledge on how web applications stay reliable and scalable in
            production. I created and deployed a flask server that taught me how
            to configure Docker and Nginx based on my production requirements. I
            participated in Meta-sponsored events and completed a curriculum
            created by Meta’s production team. I also had the opportunity to
            learn engineering principles and skills directly from my mentor at
            Meta.{" "}
          </Typography>
        </Box>

        <Typography
          variant="h2"
          className={`${classes.timeLineYear} ${classes.timeLineItem}`}
        >
          2022
        </Typography>
        <Box component="div" className={classes.timeLineItem}>
          <Typography
            variant="h5"
            align="center"
            className={classes.subHeading}
          >
            OpenSecrets (began August 2021)
          </Typography>
          <Typography variant="body1" align="center" className={classes.body1}>
            Ruby on Rails Developer
          </Typography>
          <Typography
            variant="subtitle1"
            align="center"
            className={classes.subtitle1}
          >
            Initially, I worked on improving the OpenSecrets website in
            production. This included refactoring the asset pipeline and
            leveraging the existing error monitoring tools to identify and
            resolve bugs. Throughout my time at OpenSecrets I also worked with
            the fundraising team to find ways to improve user experience amongst
            donors. We collaborated on improvements to the existing donation
            page and built features to promote donations effectively. I also
            helped to design and implement the 2021 Annual Report.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Resume;
