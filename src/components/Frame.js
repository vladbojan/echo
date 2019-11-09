import React from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import headerImage from '../assets/1.jpg'
import { makeStyles } from '@material-ui/core/styles'
import DeleteFrame from './DeleteFrame'
import { pipeFromArray } from 'rxjs/internal/util/pipe'

const useStyles = makeStyles(theme => ({
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
    minWidth: 250,
    marginTop: 14,
  },
  cardEdit: {
    maxWidth: 500,
  },
  hide: {
    display:"none",
  },
  deleteForm: {
    display: "flex",
  },
  paragraph: {
    whiteSpace: "pre",
  }
}));

function  Frame(props)  {
  const classes  = useStyles();
  const [show, setShow] = React.useState(0);
  const handleShow  = param => e => {
    (param === show) ? setShow(0) : setShow(param);
  };
  return (
      <Card className={props.edit?(props.show===props.parentId)?classes.cardEdit:classes.hide:classes.card}>
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        >
        <div className={classes.header}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {props.frame.title}
          </Typography>
          {props.edit&&
          <div className={classes.deleteForm}>
            <DeleteFrame 
              id={props.frame.id} 
              refresh={props.refresh}
            />
            <Button size="small" color="secondary" onClick={handleShow(props.frame.id)}>
              Arata
            </Button>  
          </div>
        }
        </div>
        </CardMedia>
        <CardContent className={props.edit?(show===props.frame.id)?classes.cardEdit:classes.hide:classes.card}>
        {props.frame.paragraphs.map(paragraph=>
          <Typography paragraph className={classes.paragraph}> 
          {paragraph.content}  
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" color="primary"  visibility="hidden" className={classes.button}>
          Share
        </Button>
        <Button size="small" color="primary" href={"/create/"+props.frame.id}>
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
