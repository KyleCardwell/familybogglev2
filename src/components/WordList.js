import React from "react";
import Grid from "@mui/material/Grid";
import { connect } from "react-redux";

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
          "flexDirection": "column",
        }}
      >
        <h2 sx={{ width: "100%" }}>{props.number}-Letter Words</h2>
        <div className="wordList">
          {props.timeIsUp
            ? props.group.map((word) => {
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

const mapStateToProps = state => {
  return {
    wordsFound: state.wordsInfo.wordsFound,
    timeIsUp: state.timeIsUp
  }
}

export default connect(mapStateToProps)(WordList);
