import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'

import AddScene from './AddScene'
import DeleteScene from './DeleteScene'
import SceneEdit from './SceneEdit'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles({
  root: {
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
    backgroundColor: 'rgba(0, 0, 0, .03)',
    borderBottom: '1px solid rgba(0, 0, 0, .125)',
    marginBottom: -1,
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
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

function  StoryEdit(props)  {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <div>
      <Typography>{props.story.title}</Typography>
      {props.story.scenes.map((scene, index, allScenes)=>
          <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
              <Typography>{scene.title}</Typography>
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
