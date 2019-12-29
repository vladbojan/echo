import React, { Fragment }  from 'react'
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

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '90%',
    marginBottom: 50,
    marginLeft: 100,
  },
  media: {
    height: 140,
  },
}));

function  Loader(props)  {
  const classes  = useStyles();
  return (
    <Fragment>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Se incarca...
        </Typography>
      </CardContent>
    </Card>
    </Fragment>
    )
  }


Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Loader;
