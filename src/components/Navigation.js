import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import Login from './Login'
import StoryNavigation from './StoryNavigation'
import StoryEditNavigation from './StoryEditNavigation'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Navigation(props) {
const classes = useStyles();

return (
  <AppBar position="fixed">
  <Toolbar>
      <Typography variant="h6" className={classes.title}>
        ECHO
      </Typography>
      <Button color="inherit"
        href="/"
        title="Feed"
      >
        Povesti Publicate
      </Button>

      <StoryNavigation/>
      <StoryEditNavigation/>

      <Button color="inherit"
        href="/createStory"
        title="Add"
      >
        Adauga Poveste
      </Button>
    <Login/>
  </Toolbar>
</AppBar>  
)
}
