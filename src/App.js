import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.css";
import Data from "./Data";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PixelTransition from "./PixelTransition";
import GradientText from "./GradientText";

function App() {
  const [sliderRef, setSliderRef] = useState(null);

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    speed: 1000,
    autoplay: false,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div
        style={{
          display: "inline-block",
          width: "100%",
          height: "auto",
          minHeight: "100%",
          position: "relative",
        }}
      >
        <h2 className="name">Learn Your ABC's</h2>
      </div>

      <Slider ref={setSliderRef} {...sliderSettings}>
        {Data.map((card, index) => {
          return (
            <div
              style={{
                display: "inline-block",
                width: "100%",
                height: "auto",
                minHeight: "100%",
                position: "relative",
                justifyContent: "center",
                alignItems: "center",
              }}
              key={index}
            >
              <div>
                <img
                  style={{
                    width: "100vw",
                    height: matchesSM ? "300px" : "400px",
                    objectFit: "contain",
                    padding: "8px",
                  }}
                  src={card.letter}
                  alt="letter"
                />
              </div>
              <div>
                <Typography variant="h1" style={{ textAlign: "center" }}>
                  {card.text}
                </Typography>
              </div>
              <div
                style={{
                  display: "block",
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "40%",
                }}
              >
                <PixelTransition
                  firstContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        objectFit: "contain",
                        placeItems: "center",
                      }}
                    >
                      <img
                        src={card.photo}
                        alt="default pixel transition content"
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                          mixBlendMode: "lighten",
                        }}
                      />
                    </div>
                  }
                  secondContent={
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        display: "grid",
                        objectFit: "contain",
                        placeItems: "center",
                        backgroundColor: "bisque",
                      }}
                    >
                      <p
                        src={card.hideText}
                        alt="text"
                        style={{
                          fontWeight: 900,
                          fontSize: matchesSM ? "2rem" : "3rem",
                          color: "#ffffff",
                          textAlign: "center",
                        }}
                      >
                        <GradientText
                          colors={[
                            "#40ffaa",
                            "#0B379DFF",
                            "#40ffaa",
                            "#0B379DFF",
                            "#40ffaa",
                          ]}
                          animationSpeed={5}
                          showBorder={false}
                          className="custom-class"
                        >
                          {card.hideText}
                        </GradientText>
                      </p>
                    </div>
                  }
                  gridSize={12}
                  pixelColor="#ffffff"
                  animationStepDuration={0.4}
                  className="custom-pixel-card"
                />
                {/*
                <img
                  style={{
                    width: "100vw",
                    height: matchesSM ? "200px" : "400px",
                    objectFit: "contain",
                  }}
                  src={card.photo}
                  alt="photograph"
                />
                */}
              </div>
              <div>
                <img
                  style={{
                    width: "100vw",
                    height: matchesSM ? "200px" : "400px",
                    objectFit: "contain",
                    paddingLeft: "2px",
                    paddingRight: "2px",
                    paddingBottom: matchesSM ? "5px" : "1px",
                    textAlign: "center",
                  }}
                  src={card.word}
                  alt="word"
                />
              </div>
            </div>
          );
        })}
      </Slider>

      <div className="controls">
        <button onClick={sliderRef?.slickPrev}>
          <FaArrowLeft />
        </button>
        <button onClick={sliderRef?.slickNext}>
          <FaArrowRight />
        </button>
      </div>
    </>
  );
}

export default App;
