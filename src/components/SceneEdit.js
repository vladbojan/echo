import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'

import { useStyles } from '../constants/styles'
import { panelDetailStyle } from '../constants/styles'
import { panelSummaryStyle } from '../constants/styles'
import { panelStyle } from '../constants/styles'

import AddFrame from './AddFrame'
import DeleteFrame from './DeleteFrame'
import EditFrameTitle from './EditFrameTitle'
import FrameEdit from './FrameEdit'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

function  SceneEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

    return (
      <div>
      {props.scene.frames.map((frame, index, allFrames) =>
      <div className={(expanded===index)?classes.expansionPanelMaximized:classes.expansionPanelMinimized}>
          <ExpansionPanel square expanded={expanded === index}>
            <ExpansionPanelSummary>
              <div className={classes.header} onClick={e => expanded===index? setExpanded(false):setExpanded(index)}>
                <Typography className={classes.title}>{frame.title}</Typography>
              </div>
              <EditFrameTitle 
                id={frame.id} 
                title={frame.title}
                styling={frame.styling}
                media={frame.media}
                position={frame.position}
                refresh={props.refresh}
                showPanel={expanded===index}
              />
              <DeleteFrame 
                id={frame.id} 
                refresh={props.refresh}
              />
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
          <div className={(expanded===index)?classes.addPanelExpanded:classes.addPanel}>
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
          </div>
        </div>
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
