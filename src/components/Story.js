import React from 'react'
import Frame from './Frame'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import AddScene from './AddScene'
import DeleteScene from './DeleteScene'
import AddFrame from './AddFrame'
import Button from '@material-ui/core/Button'
const { getPosition } = require('./utils')

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
  deleteForm: {
    display: "inline",
  },
}));

function  Story(props)  {
  const classes = useStyles();
  const [show, setShow] = React.useState(0);
  const handleShow  = param => e => {
    (param === show) ? setShow(0) : setShow(param);
  };

    return (
      <div>
        <h1>{props.story.title}</h1>
        {props.story.scenes.map((scene, index, allScenes)=>
          <div>
            <Typography gutterBottom variant="h4" component="h2">
            {scene.title}
            {props.edit&&
            <div className={classes.deleteForm}>
              <Button size="small" color="primary" onClick={handleShow(scene.id)}>
                Arata
              </Button>  
              <DeleteScene 
                id={scene.id} 
                refresh={props.refresh}
              />
            </div> 
            }
            </Typography>
            {scene.frames.map(frame=>
              <Frame
                key={frame.id}
                frame={frame}
                refresh={props.refresh}
                isDraft={!frame.published}
                edit={props.edit}
                show={show}
                parentId={scene.id}
              />
              )}
            {scene.frames.length===0 && show===scene.id &&
            <AddFrame 
              scene={scene} 
              refresh={props.refresh}
              position={getPosition("0")}
              showPanel={true}
            />
            }
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
              position={getPosition(props.story.scenes[props.story.scenes.length-1].position)}
            />
          }
      </div>
      )
}

export default Story;
