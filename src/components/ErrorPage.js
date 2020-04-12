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
import { useStyles } from '../constants/styles'

function  ErrorPage(props)  {
  const classes  = useStyles();
  return (
    <Fragment>
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={headerImage}
          title="Test Image"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Ups! Am avut o eroare la procesarea actiunii..
        </Typography>
      </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" href={"/"}>
          Inapoi la pagina principala
        </Button>      
      </CardActions>
    </Card>
    </Fragment>
    )
  }

export default ErrorPage;
