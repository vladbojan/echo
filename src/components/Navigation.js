import React from 'react'
import { useStyles } from '../constants/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import Login from './Login'
import StoryNavigation from './StoryNavigation'
import StoryEditNavigation from './StoryEditNavigation'
import ParagraphSearch from './ParagraphSearch'

export default function Navigation(props) {
const classes = useStyles();
const [searchField, setSearchField] = React.useState('')

return (
<div>
<AppBar position="fixed">
  <Toolbar  className={classes.appBar}>
      <Typography variant="h6" className={classes.appBarTitle}>
        ECHO
      </Typography>
      <TextField
        value={searchField}
        onChange={e => setSearchField(e.target.value)}
        InputProps={{
          className: classes.searchBar
        }}
        margin="normal"
        placeholder="Cauta in povesti"
        style={{ display: 'block' }}
      />

      <Button color="inherit"
        href="/"
        title="Feed"
      >
        Home
      </Button>

      <StoryNavigation/>

      <Button color="inherit"
        href="/navigator"
        title="Navigator povesti"
      >
        Navigator
      </Button>

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
{(searchField!=='')&&(searchField.length>3)&& <ParagraphSearch  checked={true} searchString={searchField}/>}
</div> 
)
}
