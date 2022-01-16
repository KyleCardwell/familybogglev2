import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Button, Card, CardHeader, Container } from "@mui/material";
import {
  startGame,
  setShowPauseGameModal,
  startCount,
  setInitialTime,
  setTimeRemaining,
  setShowNewGameModal,
} from "../actions";
import ToggleSize from "./ToggleSize";
import TimeSlider from "./TimeSlider";

const PauseGameModal = (props) => {
  return (
    <div>
      <Card className="newGameModal">
        <CardHeader title="Game Paused" />

        <Container>
          {
            <div className="modalControls">

              <div>
                <TimeSlider />
              </div>

              <div className="gamePauseControls">
                <Button
                  variant="contained"
                  onClick={() => {
                    props.startGame();
                    props.setShowNewGameModal();
                  }}
                >
                  New Game
                </Button>

                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => {
                    props.setShowPauseGameModal();

                  }}
                >
                  Resume Game
                </Button>
              </div>
            </div>
          }
        </Container>
      </Card>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    showPauseGameModal: state.showPauseGameModal,
    gameIsStarting: state.gameIsStarting,
    initialTime: state.initialTime,
  };
};

export default connect(mapStateToProps, {
  startGame,
  setShowPauseGameModal,
  startCount,
  setInitialTime,
  setTimeRemaining,
  setShowNewGameModal,
})(PauseGameModal);
