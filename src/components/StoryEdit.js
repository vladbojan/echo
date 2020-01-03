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

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

function  StoryEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <div>
      {props.story.scenes.map((scene, index, allScenes)=>
          <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary>
              <div className={classes.header}>
                <Typography className={classes.title}>{scene.title}</Typography>
              </div>
              <DeleteScene 
                id={scene.id} 
                refresh={props.refresh}
              />
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
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <SceneEdit
                scene={scene}
                show={scene.id}
                refresh={props.refresh}
                edit={true}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
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
