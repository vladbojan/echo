import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'

import DeleteParagraph from './DeleteParagraph'
import FrameEditParagraph from './FrameEditParagraph'
import FrameAddParagraph from './FrameAddParagraph'
import { useStyles } from '../constants/styles'

const { getPosition } = require('./utils')

function  FrameEdit(props)  {
  const classes  = useStyles();
  const [value, setValue] = React.useState(0);

  const handleClick  = param => e => {
    (param === value) ? setValue(0) : setValue(param);
  };

  const refreshPage  =  e => {
    setValue(0);
    props.refresh();
  };

  return (
      <Card className={classes.cardRoot}>
        { !props.noMedia && 
        <CardMedia className={classes.media}>
          <div className={classes.header}>
            <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
              {props.frame.title}
            </Typography>
          </div>
        </CardMedia> }
        <CardContent className={classes.cardContent}>
        {props.frame.paragraphs.map(paragraph=>
          <div>
            <Typography paragraph className={classes.paragraph}>  
            {paragraph.content}  
            </Typography>
            <div className={classes.flex}>
              <div className={classes.appBarTitle}></div>
              <IconButton className={classes.iconButtonParagraph} size="small" aria-label="edit" onClick={handleClick(paragraph.id)}>
                <EditIcon />
              </IconButton>
              <DeleteParagraph 
                id={paragraph.id} 
                refresh={props.refresh}
              />
            </div>
            <FrameEditParagraph
                id= {paragraph.id}
                content= {paragraph.content}
                styling= {paragraph.styling}
                media= {paragraph.media}
                show= {value}
                refresh={refreshPage}
              />
          </div>
        )}
        <FrameAddParagraph
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
