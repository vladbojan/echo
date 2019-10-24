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

const useStyles = makeStyles(theme => ({
  margin: {
    marginLeft: theme.spacing(1),
  },
  card: {
    maxWidth: 850,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
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
      <Card className={classes.card}>
      
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.frame.title}
        </Typography>
        {props.frame.paragraphs.map(paragraph=>
          <div>
            <Typography paragraph>  
            {paragraph.content}  
            <IconButton className={classes.margin} size="small" aria-label="edit" onClick={handleClick(paragraph.id)}>
              <EditIcon />
            </IconButton>
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
        />
      </CardContent>
   
    </Card>
    )
  }


FrameEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameEdit;
