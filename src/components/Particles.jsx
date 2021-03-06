import React from "react";
import Particles from "react-tsparticles";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  particlesCanvas: {
    position: "fixed",
    opacity: "0.3",
  },
}));

const ImageParticles = () => {
  const classes = useStyles();

  return (
    <>
      <Particles
        canvasClassName={classes.particlesCanvas}
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "#36454F",
            },
          },
          fpsLimit: 20,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 20,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 50,
                duration: 0.1,
              },
            },
          },
          particles: {
            color: {
              value: "#000000",
            },
            links: {
              color: "#FFFFFF",
              distance: 250,
              enable: true,
              opacity: 0.9,
              width: 1.5,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.9,
            },
            shape: {
              type: ["square", "polygon", "triangle"],
            },
            size: {
              random: true,
              value: 3,
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
};

export default ImageParticles;
