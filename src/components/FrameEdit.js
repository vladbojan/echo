import React from 'react'
import PropTypes from 'prop-types'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import ParagraphEdit from './ParagraphEdit'
import ParagraphAdd from './ParagraphAdd'
import ParagraphDnD from './ParagraphDnD'
import { useStyles } from '../constants/styles'

const { getPosition } = require('./utils')

function  FrameEdit(props)  {
  const classes  = useStyles()
  const [value, setValue] = React.useState(0)

  const handleClick  = param => e => {
    (param === value) ? setValue(0) : setValue(param);
  }

  return (
      <Card className={classes.cardRoot}>
        { !props.noMedia && 
        <CardMedia className={classes.media}>
          <div className={classes.header}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.titleFrame}>
              {props.frame.title}
            </Typography>
          </div>
        </CardMedia> }
        <CardContent className={classes.cardContent}>
        <DndProvider backend={Backend}>
        {props.frame.paragraphs.map((paragraph, index, allParagraphs)=>
          <div>
            <ParagraphEdit
                key= {paragraph.id}
                id= {paragraph.id}
                content= {paragraph.content}
                styling= {paragraph.styling}
                media= {paragraph.media}
                show= {paragraph.id}
                position = {paragraph.position}
                refresh={props.refresh}
              />
              {allParagraphs[index+1] &&
              <ParagraphDnD
                id= {paragraph.id}
                position={paragraph.position+"-"+allParagraphs[index+1].position}
                refresh={props.refresh}
              />
              }
              {!allParagraphs[index+1] &&
              <ParagraphDnD
                id= {paragraph.id}
                position={getPosition(allParagraphs[index]?allParagraphs[index].position:"0")}
                refresh={props.refresh}
              />
              }
          </div>
        )}
        </DndProvider>
        <ParagraphAdd
          frame={props.frame}
          refresh={props.refresh}
          isDraft={props.isDraft}
          position={getPosition(props.frame.paragraphs[props.frame.paragraphs.length-1]?props.frame.paragraphs[props.frame.paragraphs.length-1].position:"0")}
          
        />
      </CardContent>
      <CardActions className={props.noMedia?'':classes.hide}>
        <Button size="small" visibility="hidden" className={classes.actionButton}>
          Share
        </Button>
        <Button size="small" className={classes.actionButton} href={"/create/"+props.frame.id}>
          Editeaza
        </Button>      
      </CardActions>
    </Card>
    )
  }


FrameEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameEdit;
