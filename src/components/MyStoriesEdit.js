import React from 'react'

import Typography from '@material-ui/core/Typography'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { withStyles } from '@material-ui/core/styles'

import { useStyles } from '../constants/styles'
import { panelSummaryStyle } from '../constants/styles'
import { panelDetailStyle } from '../constants/styles'
import { panelStyle } from '../constants/styles'

import StoryEdit from './StoryEdit'
import StoryTitleEdit from './StoryTitleEdit'
import DeleteStory from './DeleteStory'

const { getPosition } = require('./utils')

const Accordion = withStyles(panelStyle)(MuiAccordion);
const AccordionSummary = withStyles(panelSummaryStyle)(MuiAccordionSummary);
const AccordionDetails = withStyles(panelDetailStyle)(MuiAccordionDetails);

function  MyStoriesEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');


    return (
      <div>
      {props.stories.map((story, index)=>
       <div className={(expanded===index)?classes.accordionMaximized:classes.accordionMinimized}>
          <Accordion square expanded={expanded === index}>
            <AccordionSummary>
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
            </AccordionSummary>
            <AccordionDetails>
              <StoryEdit
                story={story}
                show={story.id}
                refresh={props.refresh}
                edit={true}
              />
            </AccordionDetails>
          </Accordion>
        </div>
          )}      
      </div>
      )
}

export default MyStoriesEdit;
