import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'

import { useStyles } from '../constants/styles'
import { panelSummaryStyle } from '../constants/styles'
import { panelDetailStyle } from '../constants/styles'
import { panelStyle } from '../constants/styles'
import AddScene from './AddScene'
import DeleteScene from './DeleteScene'
import SceneEdit from './SceneEdit'
import EditSceneTitle from './EditSceneTitle'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

function  StoryEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

    return (
      <div>
      {props.story.scenes.map((scene, index, allScenes)=>
      <div>
        <div className={(expanded===index)?classes.expansionPanelMaximized:classes.expansionPanelMinimized}>
          <ExpansionPanel square expanded={expanded === index}>
            <ExpansionPanelSummary>
              <div className={classes.header} onClick={e => expanded===index? setExpanded(false):setExpanded(index)}>
                <Typography className={classes.title}>{scene.title}</Typography>
              </div>
              <EditSceneTitle 
                id={scene.id} 
                title={scene.title}
                styling={scene.styling}
                media={scene.media}
                position={scene.position}
                refresh={props.refresh}
                showPanel={expanded===index}
              />
              <DeleteScene 
                id={scene.id} 
                refresh={props.refresh}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SceneEdit
                scene={scene}
                show={scene.id}
                refresh={props.refresh}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
        <div className={(expanded===index)?classes.addPanelExpanded:classes.addPanel}>
          {allScenes[index+1] &&
            <AddScene 
              story={props.story} 
              refresh={props.refresh}
              position={scene.position+"-"+allScenes[index+1].position}
            />
          }
          {(!allScenes[index+1]) && (props.show===props.story.id) &&
            <AddScene 
              story={props.story} 
              refresh={props.refresh}
              position={getPosition(props.story.scenes[props.story.scenes.length-1]?props.story.scenes[props.story.scenes.length-1].position:"0")}
            />
          }
        </div>
      </div>
      )}  
      {props.story.scenes && props.story.scenes.length===0 &&
        <AddScene 
          story={props.story} 
          refresh={props.refresh}
          position={getPosition("0")}
          showPanel={true}
        />
      }      
      </div>
      )
}

export default StoryEdit;
