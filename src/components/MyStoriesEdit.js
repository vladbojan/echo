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

const { getPosition } = require('./utils')

const ExpansionPanel = withStyles(panelStyle)(MuiExpansionPanel);
const ExpansionPanelSummary = withStyles(panelSummaryStyle)(MuiExpansionPanelSummary);
const ExpansionPanelDetails = withStyles(panelDetailStyle)(MuiExpansionPanelDetails);

function  MyStoriesEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = panel => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

    return (
      <div>
      {props.stories.map((story, index)=>
          <ExpansionPanel square expanded={expanded === index} onChange={handleChange(index)}>
            <ExpansionPanelSummary aria-controls="panel1d-content" id="panel1d-header">
              <div className={classes.header}>
                <Typography className={classes.title}>{story.title}</Typography>
              </div>
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
          )}      
      </div>
      )
}

export default MyStoriesEdit;
