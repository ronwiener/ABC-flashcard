import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./App.css";
import Data1 from "./Data1";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App1() {
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
        {Data1.map((card, index) => {
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
                  width: "100vw",
                  //height: matchesSM ? "200px" : "400px",
                  objectFit: "contain",
                }}
              >
                <ReactPlayer
                  height="250px"
                  width="100vw"
                  url={card.photo}
                  playing={true}
                  loop={true}
                  controls={true}
                />
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

export default App1;
