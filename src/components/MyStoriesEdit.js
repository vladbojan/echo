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

import StoryEdit from './StoryEdit'
import StoryTitleEdit from './StoryTitleEdit'
import DeleteStory from './DeleteStory'

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

function  MyStoriesEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');


    return (
      <div>
      {props.stories.map((story, index)=>
       <div className={(expanded===index)?classes.expansionPanelMaximized:classes.expansionPanelMinimized}>
          <ExpansionPanel square expanded={expanded === index}>
            <ExpansionPanelSummary>
              <div className={classes.header} onClick={e => expanded===index? setExpanded(false):setExpanded(index)}>
                <Typography className={classes.title}>{story.title}</Typography>
              </div>
              {expanded===index&&
              <StoryTitleEdit
                id={story.id} 
                title={story.title}
                styling={story.styling}
                media={story.media}
                position={story.position}
                refresh={props.refresh}
                showPanel={false}
              />
              }
              <DeleteStory 
                id={story.id} 
                refresh={props.refresh}
              />
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <StoryEdit
                story={story}
                show={story.id}
                refresh={props.refresh}
                edit={true}
              />
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
          )}      
      </div>
      )
}

export default MyStoriesEdit;
