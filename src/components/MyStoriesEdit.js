import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel'
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary'
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails'
import { withStyles } from '@material-ui/core/styles'
import { useStyles } from '../constants/styles'

import StoryEdit from './StoryEdit'

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
