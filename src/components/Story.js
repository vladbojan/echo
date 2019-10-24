import React from 'react'
import Frame from './Frame'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  hide: {
    display: 'none',
  },
}));

function  Story(props)  {
  const classes = useStyles();
    return (
      <div>
        <h1>{props.story.title}</h1>
        {props.story.scenes.map(scene=>
          <div>
            <Typography gutterBottom variant="h4" component="h2">
            {scene.title}
            </Typography>
            {scene.frames.map(frame=>
                  <Frame
                    key={frame.id}
                    frame={frame}
                    refresh={() => props.refresh}
                    isDraft={!frame.published}
                  />
              )}
              <IconButton color="secondary" aria-label="adauga scena" size="large" className={props.edit?classes.margin:classes.hide}>
                <AddIcon />
              </IconButton>
          </div>
          )}
      </div>
      )
}

export default Story;
