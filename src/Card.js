import React from "react";
import Data from "./Data";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";

export default function Card() {
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
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
              backgroundImage:
                "linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1",
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
                className="cardLetter"
              />
            </div>
            <div>
              <Typography variant="h1" style={{ textAlign: "center" }}>
                {card.text}
              </Typography>
            </div>
            <div>
              <img
                style={{
                  width: "100vw",
                  height: matchesSM ? "200px" : "400px",
                  objectFit: "contain",
                }}
                src={card.photo}
                alt="photograph"
                className="cardPhoto"
              />
            </div>
            <div>
              <img
                style={{
                  width: "95vw",
                  height: matchesSM ? "200px" : "400px",
                  objectFit: "contain",
                  paddingBottom: matchesSM ? "10px" : "5px",
                  marginLeft: matchesSM ? "10px" : "20px",
                }}
                src={card.word}
                alt="word"
                className="cardWord"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
