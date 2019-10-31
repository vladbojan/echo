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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1545,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
  cardEdit: {
    maxWidth: 500,
    marginBottom: 10,
  },
  cardHide: {
    display:"none",
  },
}));

function  Frame(props)  {
  const classes  = useStyles();
  return (
      <Card className={props.edit?(props.show===props.parentId)?classes.cardEdit:classes.cardHide:classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        >
        {props.edit&&
          <DeleteFrame 
            id={props.frame.id} 
            refresh={props.refresh}
          />
        }
        </CardMedia>
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {props.frame.title}
        </Typography>
        {props.frame.paragraphs.map(paragraph=>
          <Typography paragraph> 
          {paragraph.content}  
          </Typography>
        )}
      </CardContent>
      </CardActionArea>
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
