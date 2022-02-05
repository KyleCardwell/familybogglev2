import React, {useState, useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import {setTimeRemaining, setInitialTime} from '../actions'
import { connect } from 'react-redux';

const Input = styled(MuiInput)`
  width: 42px;
`;

function TimeSlider(props) {
  const [value, setValue] = useState(props.initialTime);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
    props.setTimeRemaining(newValue)
    props.setInitialTime(newValue)
  };

  const handleInputChange = (event) => {
    setValue(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 10) {
      setValue(10);
    } else if (value > 600) {
      setValue(600);
    }
  };

  return (
    <Box sx={{ width: 325 }}>
      {/* <Typography id="input-slider" gutterBottom>
        Time
      </Typography> */}
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <AccessTimeIcon />
        </Grid>
        <Grid item xs>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="input-slider"
            min={10}
            max={600}
            step={10}
          />
        </Grid>
        <Grid item>
          {/* <Input
          // Math.floor(props.seconds/60)}:${props.seconds % 60 > 9 ? props.seconds % 60 : "0" + props.seconds % 60
            value={value}
            size="small"
            onChange={handleInputChange}
            onBlur={handleBlur}
            inputProps={{
              step: 10,
              min: 10,
              max: 600,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          /> */}
          <p>{Math.floor(props.seconds/60)}:{props.seconds % 60 > 9 ? props.seconds % 60 : "0" + props.seconds % 60}</p>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = state => {
  return {
    initialTime: state.initialTime,
    seconds: state.remaining
  }
}

export default connect(mapStateToProps, {setTimeRemaining, setInitialTime})(TimeSlider)