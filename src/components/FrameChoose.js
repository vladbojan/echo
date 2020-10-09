import React from 'react'

import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import { useStyles } from '../constants/styles'
import TreeView from '@material-ui/lab/TreeView'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import TreeItem from '@material-ui/lab/TreeItem'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import TextField from '@material-ui/core/TextField'

export default function FrameChoose(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [frameId, setFrameId] = React.useState(props.frameId)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }

  const handleSave = () => {
    props.handle(frameId)
    setOpen(false)
  }
  
  return (
    <div>
    <TextField
      label="Alege cadrul"
      value="Alege un cadru din povestile tale"
      onClick={handleOpen}
      margin="normal"
      placeholder="Identificatorul referintei"
      fullWidth
      InputLabelProps={{
        shrink: true,
      }}
      class={props.class}
    />
    {open &&
    <Query
    query={MY_FRAMES_QUERY}>
    {({ data, loading, error, refetch }) => {
      if (loading) {
        return (
          <div/>
        )
      }

      if (error) {
        return (
          <div/>
        )
      }

      return (
        <Dialog
        open={open}
        onClose={handleClose}
        scroll={'paper'}
        aria-labelledby="frame-dialog-title"
        aria-describedby="frame-dialog-description"
      >
        <DialogTitle id="frame-dialog-title">Alege cadrul</DialogTitle>
        <DialogContent dividers={true}>
          <TreeView
            className={classes.root}
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
          >
            {data.me &&
            <TreeItem nodeId={data.me.id} label="Povestile mele">
            {data.me.stories&&data.me.stories.map(story=>
            <TreeItem nodeId={story.id} label={story.title}>
              {story.scenes && story.scenes.map(scene=>
                <TreeItem nodeId={scene.id} label={scene.title}>
                  {scene.frames && scene.frames.map(frame=>
                    <TreeItem nodeId={frame.id} label={frame.title} onClick={() => { setFrameId(frame.id) }}/>
                  )}
                </TreeItem>
              )}
            </TreeItem>
            )}
            </TreeItem>
            }
          </TreeView>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Alege cadrul
          </Button>
          <Button onClick={handleClose} color="primary">
            Inchide
          </Button>
        </DialogActions>
      </Dialog>
      )
      }}
    </Query>
    }
    </div>
  );
}

const MY_FRAMES_QUERY = gql`
query DraftsQuery {
  me {
    id
    stories{
      id
      title
      scenes{
        id
        title
        frames{
          id
          title
        }
      }
    }
  }
}
`
