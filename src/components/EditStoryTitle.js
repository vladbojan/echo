import React from 'react'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import CardActions from '@material-ui/core/CardActions'

import { useStyles } from '../constants/styles'

import {FRAME_QUERY} from './CreatePage'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

const EDIT_STORY_MUTATION = gql`
  mutation EditStoryMutation($id: ID!, $title: String!, $styling: String!, $media: String!, $position: String!) {
    updateStory(id: $id, title: $title, styling: $styling, media: $media, position: $position) {
      id
      title
      styling
      media
      position
    }
  }
`

export default function EditStoryTitle(props) {
  const classes = useStyles();

  const [showPanel, setShowPanel] = React.useState(props.showPanel);
  const [title, setTitle] = React.useState(props.title);
  const [styling, setStyling] = React.useState(props.styling);
  const [media, setMedia] = React.useState(props.media);
  const [position, setPosition] = React.useState(props.position);
  const [format, setFormat] = React.useState(false);

  const handleClick  = param => e => {
    (param === true) ? setShowPanel(false) : setShowPanel(true)
  };

  return (
    <div className={showPanel && props.showPanel?classes.editPanel:''}>
    <IconButton aria-label="sterge" size="large" className={classes.iconButton} onClick={handleClick(showPanel)}>
      <EditIcon />
    </IconButton>
    <Mutation
      mutation={EDIT_STORY_MUTATION}
      update={(cache, { data }) => {
        const { drafts } = cache.readQuery({ query: FRAME_QUERY })
        cache.writeQuery({
          query: FRAME_QUERY,
          data: { drafts: drafts.concat([data.updateDraft]) },
        })
      }}
    >
    {(updateDraft, { data, loading, error }) => {
      return (
        <div>
        {showPanel && props.showPanel &&
          <form
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              await updateDraft({
                variables: { id, title, styling, media, position },
              })
              setShowPanel(false)
              props.refresh()
            }}
          >
            <CardActions>
              <Button size="small" disabled={!title} type="submit">
                Salveaza
              </Button>
              <Button size="small" onClick={e => format? setFormat(false):setFormat(true)}>
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
