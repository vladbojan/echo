import React, { Fragment }  from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import headerImage from '../assets/1.jpg'
import { useStyles } from '../constants/styles'

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
