import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import WordList from './WordList';

const PossibleWordsContainer = (props) => {

    return (
        <div className='possibleWords'>
            <h3>Possible Words {props.wordsInfo.totalWords}</h3>
                <Box className="returnedWords">

                    {/* {props.wordsInfo.wordsFound.map(group => {
                        if (group.length > 1) {

                            return <WordList 
                                number={group[0]}
                            />
                        }
                    })} */}
                    
                    {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, display: 'flex', 'flex-direction': 'column'}}>
                        <h2 sx={{width: '100%'}}>{props.wordsInfo.wordsFound[0][0]}-Letter Words</h2>
                        <div className='wordList'>
                            {props.timeIsUp ? props.wordsInfo.wordsFound[0].sort().map(word => { return <p key={word} className="word">{word}</p>}) : ""}
                        </div>
                    </Grid> */}

                    {/* <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, display: 'flex', 'flex-direction': 'column'}}>
                        <h2 sx={{width: '100%'}}>4-Letter Words</h2>
                        <div className='wordList'>
                            {props.timeIsUp ? props.wordsFound.letters4.sort().map(word => { return <p key={word} className="word">{word}</p>}) : ""}
                        </div>
                    </Grid>
                    
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3, display: 'flex', 'flex-direction': 'column'}}>
                        <h2 sx={{width: '100%'}}>5-Letter Words</h2>
                        <div className='wordList'>
                            {props.timeIsUp ? props.wordsFound.letters5.sort().map(word => { return <p key={word} className="word">{word}</p>}) : ""}
                        </div>
                    </Grid> */}

                </Box>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lettersList: state.lettersList,
        wordsInfo: state.wordsInfo,
        timeIsUp: state.timeIsUp
    }
}

export default connect(mapStateToProps)(PossibleWordsContainer);