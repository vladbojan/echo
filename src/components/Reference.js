import React from 'react'

import { Query } from 'react-apollo'

import {FRAME_QUERY} from './CreatePage'

import { useStyles } from '../constants/styles'
import Frame from './Frame'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function Reference(props) {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)
  const [scroll, setScroll] = React.useState('paper')

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen = (scrollType) => () => {
    setOpen(true);
    setScroll(scrollType);
  };
  
  return (
    <div>

    <Button onClick={handleClickOpen('paper')}>{props.name}</Button>
    {open &&
    <Query
    query={FRAME_QUERY} variables={{id: props.id}}>
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

      const { frame } = data
      return (
        <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">{props.name}</DialogTitle>
        <DialogContent dividers={scroll === 'paper'}>
            <Frame
              frame={frame}
              refresh={props.refresh}
              isDraft={!frame.published}
              size={1}
              noMedia={false}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Inchide
          </Button>
          <Button href={"/create/"+props.id} target="_blank" color="primary">
            Vezi povestea
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
