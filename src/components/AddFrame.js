import React from 'react'

import { useStyles } from '../constants/styles'
import AddIcon from '@material-ui/icons/Add'
import IconButton from '@material-ui/core/IconButton'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import {FRAME_QUERY} from './CreatePage'

const ADD_FRAME_MUTATION = gql`
  mutation CreateFrameMutation($title: String!, $styling: String!, $media: String!, $parentId: String!, $position: String) {
    createFrame(title: $title, styling: $styling, media: $media, parentId: $parentId, position: $position) {
      id
      title
      styling
      media
      position
    }
  }
`

export default function AddFrame(props) {
  const classes = useStyles();
  const [title, setTitle] = React.useState('');
  const [styling, setStyling] = React.useState('');
  const [media, setMedia] = React.useState('');
  const [showPanel, setShowPanel] = React.useState(props.showPanel);
  const [format, setFormat] = React.useState(false);

  const handleClick  = param => e => {
    (param === true) ? setShowPanel(false) : setShowPanel(true);
  };

  return (
    <div>
    <IconButton aria-label="adauga cadru" size="large" className={props.showPanel?classes.hide:classes.addPanelButton} onClick={handleClick(showPanel)}>
        <AddIcon />
    </IconButton>
    <Mutation
      mutation={ADD_FRAME_MUTATION}
      update={(cache, { data }) => {
        const { drafts } = cache.readQuery({ query: FRAME_QUERY })
        cache.writeQuery({
          query: FRAME_QUERY,
          data: { drafts: drafts.concat([data.createDraft]) },
        })
      }}
    >
    {(createDraft, { data, loading, error }) => {
      return (
        <div>
        {showPanel &&
          <form
            className="w-100"
            onSubmit={async e => {
              e.preventDefault()
              const parentId = props.scene.id
              const position = props.position
              await createDraft({
                variables: { title, styling, media, parentId, position },
              })
              setShowPanel(false)
              props.refresh()
            }}
          >
            <Divider />
            <CardActions>
              <Button size="small" disabled={!title} type="submit" className={classes.actionButton}>
                Salveaza
              </Button>
              <Button size="small" className={classes.actionButton} onClick={e => format? setFormat(false):setFormat(true)}>
                Formatare
              </Button>
            </CardActions>  
            <TextField
              label="Styling"
              value={styling}
              onChange={e => setStyling(e.target.value)}
              margin="normal"
              placeholder="Defineste tipul si culoarea fontului folosit"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={format?{ display: 'block' }:{ display: 'none' }}
            />
            <TextField
              label="Media"
              value={media}
              onChange={e => setMedia(e.target.value )}
              margin="normal"
              placeholder="Defineste un element media asociat paragrafului"
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
              style={format?{ display: 'block' }:{ display: 'none' }}
            />                  
            <TextareaAutosize
              className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
              onChange={e => setTitle(e.target.value)}
              placeholder="Titlul cadrului"
              rows={1}
              value={title}
            />

    
          </form>
        }
        </div>
      )
    }}
  </Mutation>
  </div>
  );
}
