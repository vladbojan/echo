import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../constants/styles'
import DeleteFrame from './DeleteFrame'
import Reference from './Reference'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css' 

function  Frame(props)  {
  const classes  = useStyles();
  const [show, setShow] = React.useState(0);
  const handleShow  = param => e => {
    (param === show) ? setShow(0) : setShow(param);
  };
  return (
      <Card className={props.edit?classes.cardEdit:classes.cardContainer}>
        <CardMedia
          className={classes.media}
        >
        <div className={classes.header}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleFrame}>
            {props.frame.title}
          </Typography>
          {props.edit&&
          <div className={classes.flex}>
            <DeleteFrame 
              id={props.frame.id} 
              refresh={props.refresh}
            />
            <Button size="small" onClick={handleShow(props.frame.id)}>
            {(props.frame.id === show) ? "Ascunde":"Arata"}
            </Button>  
          </div>
        }
        </div>
        </CardMedia>
        <CardContent className={props.edit?(show===props.frame.id)?classes.cardEdit:classes.hide:classes.card}>
        {props.frame.paragraphs.map(paragraph=>
          <div>
          <ReactQuill
              value={paragraph.content}
              readOnly={true}
              theme={"bubble"}
          />
          <Reference 
            id={paragraph.styling} 
            name={paragraph.media} 
            refresh={props.refresh}
          />
          </div>
        )}
      </CardContent>
      <CardActions>
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


Frame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Frame;
