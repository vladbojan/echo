import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import ParagraphDrag from './ParagraphDrag'
import ParagraphAdd from './ParagraphAdd'
import ParagraphDnD from './ParagraphDnD'
import FrameReferenceEdit from './FrameReferenceEdit'
import { useStyles } from '../constants/styles'

import {SIMPLE_FRAME_QUERY} from './FrameReference'

const { getPosition } = require('./utils')

function  FrameEdit(props)  {
  const classes  = useStyles()
  const [value, setValue] = React.useState(0)

  const handleClick  = param => e => {
    (param === value) ? setValue(0) : setValue(param);
  }

  return (
    <Query query={SIMPLE_FRAME_QUERY} variables={{ id: props.id }}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div/>
          )
        }
  
        if (error) {
          return (
            <div/>
          )
        }

        return (
          <div>
          {data && data.frame &&

      <Card className={classes.cardRoot}>
        { !props.noMedia && 
        <CardMedia className={classes.media}>
          <div className={classes.header}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.titleFrame}>
              {data.frame.title}
            </Typography>
          </div>
        </CardMedia> }
        <CardContent className={classes.cardContent}>
        {data.frame.styling && 
          <FrameReferenceEdit id={data.frame.styling} refresh={props.refresh}/>
        }
        <DndProvider backend={Backend}>
        {data.frame.paragraphs.map((paragraph, index, allParagraphs)=>
          <div>
            <ParagraphDrag
                key= {paragraph.id}
                id= {paragraph.id}
                paragraph= {paragraph}
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
          frame={data.frame}
          refresh={props.refresh}
          isDraft={props.isDraft}
          position={getPosition(data.frame.paragraphs[data.frame.paragraphs.length-1]?data.frame.paragraphs[data.frame.paragraphs.length-1].position:"0")}
          
        />
      </CardContent>
      <CardActions className={props.noMedia?'':classes.hide}>
        <Button size="small" visibility="hidden" className={classes.actionButton}>
          Share
        </Button>
        <Button size="small" className={classes.actionButton} href={"/create/"+data.frame.id}>
          Editeaza
        </Button>      
      </CardActions>
    </Card>
    }
    </div>
    )
  }}
  </Query>
)
}


FrameEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameEdit;