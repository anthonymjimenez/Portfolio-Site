import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Send from "@material-ui/icons/Send";
import emailjs from "emailjs-com";
import { init } from "@emailjs/browser";

const useStyles = makeStyles((theme) => ({
  contactContainer: {
    background: "#36454F",
    height: "100vh",
    opacity: "0.9",
  },
  heading: {
    color: "aliceblue",
    textAlign: "center",
    textTransform: "uppercase",
    marginBottom: "1rem",
  },
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  input: {
    color: "aliceblue",
  },
  button: {
    marginTop: "1rem",
    color: "aliceblue",
    borderColor: "#6495ED",
  },
  field: {
    margin: "1rem 0rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#6495ED",
    },
    "& label": {
      color: "aliceblue",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#6495ED",
      },
      "&:hover fieldset": {
        borderColor: "#6495ED",
      },
      "&.Mui-focused fieldset": {
        color: "#fff",
        borderColor: "aliceblue",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  const sendEmail = async (e) => {
    e.preventDefault();
    console.log(e.target);
    try {
      let results = await emailjs.sendForm(
        "gmail",
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAIL_ID
      );
      console.log("results", results);

      alert("Message Sent, I'll get back to you shortly!");
    } catch (error) {
      alert("An error occurred, please try again.");
      console.log(error);
    }
  };

  return (
    <>
      {init(process.env.REACT_APP_EMAIL_ID)}{" "}
      <Box component="div" className={classes.contactContainer}>
        <Grid container justify="center">
          <Box component="form" onSubmit={sendEmail} className={classes.form}>
            <Typography variant="h5" className={classes.heading}>
              Contact me!
            </Typography>
            <InputField
              fullWidth={true}
              label="Name"
              variant="outlined"
              inputProps={{ className: classes.input }}
            />
            <InputField
              fullWidth={true}
              label="Email"
              variant="outlined"
              inputProps={{ className: classes.input }}
              className={classes.field}
            />
            <InputField
              fullWidth={true}
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              inputProps={{ className: classes.input }}
            />
            <Button
              variant="outlined"
              fullWidth={true}
              type="submit"
              endIcon={<Send />}
              className={classes.button}
            >
              Contact Me
            </Button>
          </Box>
        </Grid>
      </Box>
    </>
  );
};

export default Contact;
