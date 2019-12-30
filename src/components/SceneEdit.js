import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../constants/styles'

import AddFrame from './AddFrame'
import DeleteFrame from './DeleteFrame'
import FrameEdit from './FrameEdit'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles({
  root: {
    backgroundColor:'#f6ffff',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
    '&$expanded': {
      margin: 'auto',
    },
  },
  expanded: {},
})(MuiExpansionPanel);

const ExpansionPanelSummary = withStyles({
  root: {
    backgroundColor: '#f6ffff',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
    paddingLeft: 0,
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
})(MuiExpansionPanelSummary);

const ExpansionPanelDetails = withStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    display: 'block',
  },
}))(MuiExpansionPanelDetails);

function  SceneEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <div>
      {props.scene.frames.map((frame, index, allFrames) =>
          <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
              <div className={classes.header}>
                <Typography className={classes.title}>{frame.title}</Typography>
              </div>
              <DeleteFrame 
                id={frame.id} 
                refresh={props.refresh}
              />
              {allFrames[index+1] &&
              <AddFrame 
                scene={props.scene} 
                refresh={props.refresh}
                position={frame.position+"-"+allFrames[index+1].position}
              />
              }
              {(!allFrames[index+1]) && (props.show===props.scene.id) &&
                <AddFrame 
                  scene={props.scene} 
                  refresh={props.refresh}
                  position={getPosition(props.scene.frames[props.scene.frames.length-1]?props.scene.frames[props.scene.frames.length-1].position:"0")}
                />
              }
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <FrameEdit
                frame={frame}
                refresh={props.refresh}
                isDraft={!frame.published}
                size={1}
                noMedia={true}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
      )}  
      {props.scene.frames && props.scene.frames.length===0 &&
      <AddFrame 
        scene={props.scene} 
        refresh={props.refresh}
        position={"0"}
        showPanel={true}
      />
      }    
      </div>
      )
}

export default SceneEdit;
