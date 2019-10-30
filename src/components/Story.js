import React from 'react'
import Frame from './Frame'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddScene from './AddScene'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

function  Story(props)  {
  const classes = useStyles();
    return (
      <div>
        <h1>{props.story.title}</h1>
        {props.story.scenes.map((scene, index, allScenes)=>
          <div>
            <Typography gutterBottom variant="h4" component="h2">
            {scene.title}
            </Typography>
            {scene.frames.map(frame=>
                  <Frame
                    key={frame.id}
                    frame={frame}
                    refresh={props.refresh}
                    isDraft={!frame.published}
                  />
              )}
              {props.edit && allScenes[index+1] &&
              <AddScene 
                story={props.story} 
                refresh={props.refresh}
                position={scene.position+"-"+allScenes[index+1].position}
              />
              }
          </div>
          )}
          {props.edit &&
            <AddScene 
              story={props.story} 
              refresh={props.refresh}
              position={(props.story.scenes.length+1).toString()}
            />
          }
      </div>
      )
}

export default Story;
