import React from "react";
import Grid from "@mui/material/Grid";

function WordList(props) {
  return (
    <div>

      <Grid
        container
        rowSpacing={1}
        columnSpacing={{
          xs: 1,
          sm: 2,
          md: 3,
          display: "flex",
          "flex-direction": "column",
        }}
      >
        <h2 sx={{ width: "100%" }}>{props.number}-Letter Words</h2>
        <div className="wordList">
          {props.timeIsUp
            ? props.wordsFound.letters3.sort().map((word) => {
                return (
                  <p key={word} className="word">
                    {word}
                  </p>
                );
              })
            : ""}
        </div>
      </Grid>
    </div>
  );
}

export default WordList;
