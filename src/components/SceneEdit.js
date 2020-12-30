import React from 'react'

import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import { withStyles } from '@material-ui/core/styles'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import { useStyles } from '../constants/styles'
import { panelDetailStyle } from '../constants/styles'
import { panelSummaryStyle } from '../constants/styles'
import { panelStyle } from '../constants/styles'

import AddFrame from './AddFrame'
import DeleteFrame from './DeleteFrame'
import FrameTitleEdit from './FrameTitleEdit'
import FrameEdit from './FrameEdit'
import FrameDnD from './FrameDnD'
import FrameDrag from './FrameDrag'

const { getPosition } = require('./utils')

const Accordion = withStyles(panelStyle)(MuiAccordion);
const AccordionSummary = withStyles(panelSummaryStyle)(MuiAccordionSummary);
const AccordionDetails = withStyles(panelDetailStyle)(MuiAccordionDetails);

function  SceneEdit(props)  {
  const classes  = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

    return (
      <div>
      {props.scene.frames.map((frame, index, allFrames) =>
      <div>
        <DndProvider backend={Backend}>
        <div className={(expanded===index)?classes.accordionMaximized:classes.accordionMinimized}>
          <Accordion square expanded={expanded === index}>
            <AccordionSummary>
                <div className={classes.header} onClick={e => expanded===index? setExpanded(false):setExpanded(index)}>
                  <FrameDrag
                  frame={frame}
                  expanded={expanded===index}
                  />
                </div>
              {expanded === index&&
              <FrameTitleEdit 
                id={frame.id} 
                title={frame.title}
                styling={frame.styling}
                media={frame.media}
                position={frame.position}
                refresh={props.refresh}
                showPanel={false}
              />
              }
              <DeleteFrame 
                id={frame.id} 
                refresh={props.refresh}
              />
            </AccordionSummary>
            <AccordionDetails>
            {expanded === index&&
              <FrameEdit
                id={frame.id}
                refresh={props.refresh}
                isDraft={!frame.published}
                size={1}
                noMedia={true}
              />
            }
            </AccordionDetails>
          </Accordion>
        </div>
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
          {allFrames[index+1] &&
          <FrameDnD
            id={frame.id}
            position={frame.position+"-"+allFrames[index+1].position}
            refresh={props.refresh}
          />
          }
          {(!allFrames[index+1]) && (props.show===props.scene.id) &&
          <FrameDnD
            id={frame.id}
            position={getPosition(props.scene.frames[props.scene.frames.length-1]?props.scene.frames[props.scene.frames.length-1].position:"0")}
            refresh={props.refresh}
          />
          }
        </div>
        </DndProvider>
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
