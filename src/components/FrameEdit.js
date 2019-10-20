import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import headerImage from '../assets/1.jpg'
import { Mutation } from 'react-apollo'
import {FRAME_QUERY} from './CreatePage'
import FrameEditParagraph from './FrameEditParagraph'
import  { gql } from 'apollo-boost'

const styles = {
  card: {
    maxWidth: 1545,
    marginBottom: 50,
  },
  media: {
    height: 140,
  },
};

function  FrameEdit(props)  {
  const { classes } = props;
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
          <Typography paragraph> 
          {paragraph.content}  
          </Typography>
        )}
                <FrameEditParagraph
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

export default withStyles(styles)(FrameEdit);
