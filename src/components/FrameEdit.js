import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import headerImage from '../assets/1.jpg'
import FrameEditParagraph from './FrameEditParagraph'
import FrameAddParagraph from './FrameAddParagraph'
import EditIcon from '@material-ui/icons/Edit'
import { makeStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import DeleteParagraph from './DeleteParagraph'
const { getPosition } = require('./utils')

const useStyles = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(1),
  },
  cardSmall: {
    maxWidth: 1150,
    maxHeight: 900, 
    overflow: 'auto',
  },
  card: {
    maxWidth: 1545,
  },
  media: {
    height: 140,
    display: "flex",
  },
  header: {
    minWidth: "50%",
    display: "flex",
    height: 72,
    marginTop: 30,
    backgroundColor: "white",
    opacity: 0.6,
  },
  title: {
    marginTop: 14,
  },
  paragraph: {
    whiteSpace: "pre",
  }
}));

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
      <Card className={props.size===8?classes.cardSmall:classes.card}>
      
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        >
        <div className={classes.header}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {props.frame.title}
          </Typography>
        </div>
        </CardMedia>
        <CardContent>
        {props.frame.paragraphs.map(paragraph=>
          <div>
            <Typography paragraph className={classes.paragraph}>  
            {paragraph.content}  
            <IconButton className={classes.margin} size="small" aria-label="edit" onClick={handleClick(paragraph.id)}>
              <EditIcon />
            </IconButton>
            <DeleteParagraph 
              id={paragraph.id} 
              refresh={props.refresh}
            />
            </Typography>
            <FrameEditParagraph
              key={paragraph.id}
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
          key={props.frame.id}
          frame={props.frame}
          refresh={props.refresh}
          isDraft={props.isDraft}
          position={getPosition(props.frame.paragraphs[props.frame.paragraphs.length-1]?props.frame.paragraphs[props.frame.paragraphs.length-1].position:"0")}
          
        />
      </CardContent>
   
    </Card>
    )
  }


FrameEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameEdit;
