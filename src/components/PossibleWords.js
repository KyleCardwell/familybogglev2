import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import boggle from 'node-boggle-solver';
import axios from 'axios';
import { useState } from 'react';

const PossibleWords = (props) => {

    return (
        <div>
            <h3>Possible Words</h3>
            <div>
                {props.wordsFound.totalWords}
            </div>
            <div className="allWords">
                {props.timeIsUp ? props.wordsFound.letters3.map(word => { return <p>{word}</p>}) : ""}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lettersList: state.lettersList,
        wordsFound: state.wordsFound,
        timeIsUp: state.timeIsUp
    }
}

export default connect(mapStateToProps)(PossibleWords);