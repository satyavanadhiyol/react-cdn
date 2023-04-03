
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddIcon from '@mui/icons-material/Add';
import styled from '@emotion/styled';
import { TextField } from '@mui/material';

const PREFIX = 'app';

const classes = {
  box: `${PREFIX}-box`,
  taskBox: `${PREFIX}-taskBox`,
  header: `${PREFIX}-header`,
  bottom: `${PREFIX}-bottom`,
  rightBox: `${PREFIX}-rightBox`,
  typo: `${PREFIX}-typo`,
  label: `${PREFIX}-label`,
  field: `${PREFIX}-field`
}

const StyledBox = styled(Box)((
  {
    theme
  }) => {
  return {
    margin: 20,
    [`& .${classes.box}`]: {
      display: 'flex',
      margin: '40px 0px 20px 0px',
      height: 650,
      overflowX: 'auto',
      border: '1px solid lightgrey',
      background: '#fbfafaf7'
    },
    [`& .${classes.taskBox}`]: {
      width: 270,
      position: 'relative',
    },
    [`& .${classes.header}`]: {
      width: 270,
      border: '1px solid lightgrey',
      height: 70,
      padding: '10px 0px 0px 20px',
      display: 'flex',
      justifyContent: 'space-between'
    },
    [`& .${classes.bottom}`]: {
      border: '1px solid lightgrey',
      height: 70,
      position: 'absolute',
      bottom: 0,
      width: 270,
      padding: '25px 10px 10px 10px',
      display: 'flex',
    },
    [`& .${classes.rightBox}`]: {
      width: 400,
      textAlign: 'center',
      marginTop: 250,
    },
    [`& .${classes.typo}`]: {
      fontSize: 35
    },
    [`& .${classes.label}`]: {
      marginTop: 40,
      marginLeft: 10
    },
    [`& .${classes.field}`]: {
      marginTop: 5,
      marginLeft: 10,
      width: 250
    },
  }
})

const App = () => {
  const [stageArr, setStageArr] = useState([
    {
      id: '1',
      name: 'To Do',
      isDeleted: false
    },
    {
      id: '2',
      name: 'In Progress',
      isDeleted: false
    },
    {
      id: '3',
      name: 'Dev',
      isDeleted: false
    },
    {
      id: '4',
      name: 'Stage',
      isDeleted: false
    },
    {
      id: '5',
      name: 'Production',
      isDeleted: false
    },
    {
      id: '6',
      name: 'Done',
      isDeleted: false
    }
  ]);

  const deleteStage = (id) => {
    if (window.confirm('There are no deals in this stage right now.') === true) {
      const index = stageArr.findIndex((stage) => stage.id === id);
      const newArr = [...stageArr];
      if (index > -1) {
        newArr.splice(index, 1);
      }
      setStageArr(newArr);
    } else {
      console.log('cancel');
    }
  }

  const addStage = () => {
    const stageObj = {
      id: stageArr.length + 1,
      name: `Stage ${stageArr.length + 1}`,
      isDeleted: false
    }
    const newArr = [...stageArr];
    newArr.push(stageObj);
    setStageArr(newArr);
  }

  const handleChange = (value, id) => {
    const index = stageArr.findIndex((stage) => stage.id === id);
    const newArr = [...stageArr];
    newArr[index].name = value
    setStageArr(newArr);
  }

  const btnVisible = (id) => {
    const index = stageArr.findIndex((stage) => stage.id === id);
    const newArr = [...stageArr];
    newArr[index].isDeleted = true;
    setStageArr(newArr);
  }

  const btnInVisible = (id) => {
    const index = stageArr.findIndex((stage) => stage.id === id);
    const newArr = [...stageArr];
    newArr[index].isDeleted = false;
    setStageArr(newArr);
  }

  const addParticularStage = (id) => {
    const index = stageArr.findIndex((stage) => stage.id === id);
    const stageObj = {
      id: stageArr.length + 1,
      name: `Stage ${stageArr.length + 1}`,
      isDeleted: false
    }
    const newArr = [...stageArr];
    newArr.splice(index + 1, 0, stageObj);
    newArr.join();
    setStageArr(newArr);
  }

  return (
    <StyledBox>
      <Box className={classes.box}>
        {stageArr.length > 0 && stageArr.map((stage, index) => {
          return (
            <Box className={classes.taskBox} key={index} onMouseEnter={() => btnVisible(stage.id)} onMouseLeave={() => btnInVisible(stage.id)}>
              <Box className={classes.header}>
                <Typography variant='h2' className={classes.typography}>{stage.name}</Typography>
                {stage.isDeleted && <AddIcon onClick={() => addParticularStage(stage.id)} />}
              </Box>
              <Box>
                <Typography variant='h4' className={classes.label}>Name</Typography>
                <TextField
                  name="stage_name"
                  value={stage.name}
                  className={classes.field}
                  onChange={(e) => handleChange(e.target.value, stage.id)}
                />
              </Box>
              {stage.isDeleted && (
                <Box className={classes.bottom}>
                  <DeleteOutlineIcon />
                  <Typography variant='h5' className={classes.typography} onClick={() => deleteStage(stage.id)}>Delete Stage</Typography>
                </Box>
              )}
            </Box>
          )
        })}
        <Box>
          <Box className={classes.rightBox}>
            <Typography className={classes.typo}>Add new stage</Typography>
            <Button variant='contained' color='success' onClick={() => addStage()}><AddIcon />New Stage</Button>
          </Box>
        </Box>
      </Box>
    </StyledBox>
  )
}

export default App;
