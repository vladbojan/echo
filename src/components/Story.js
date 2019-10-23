import React from 'react'
import Frame from './Frame'
import Typography from '@material-ui/core/Typography'

function  Story(props)  {
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
          </div>
          )}
      </div>
      )
}

export default Story;
