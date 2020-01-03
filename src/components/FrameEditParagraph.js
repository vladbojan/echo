import React from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'

import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import {FRAME_QUERY} from './CreatePage'
import { useStyles } from '../constants/styles'



export default function FrameEditParagraph(props)  {
  const classes = useStyles();
  const [id, setId] = React.useState(props.id);
  const [content, setContent] = React.useState(props.content);
  const [styling, setStyling] = React.useState(props.styling);
  const [media, setMedia] = React.useState(props.media);
  const [format, setFormat] = React.useState('none');

  return (
        <Mutation
        mutation={EDIT_DRAFT_MUTATION}
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
            <div style={props.show===id?{ display: 'block' }:{ display: 'none' }}>
              <form
                className="w-100"
                onSubmit={async e => {
                  e.preventDefault()
                  await createDraft({
                    variables: { id, content, styling, media },
                  })
                  props.refresh()
                }}
              >
                <Divider />
                <CardActions>
                  <Button size="small" className={classes.actionButton} disabled={!content} type="submit">
                    Salveaza
                  </Button>
                  <Button size="small" className={classes.actionButton} onClick={e => format==='none'? setFormat('block') : setFormat('none')}>
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
                  style={{ display: format }}
                />
                <TextField
                  label="Media"
                  value={media}
                  onChange={e => setMedia(e.target.value)}
                  margin="normal"
                  placeholder="Defineste un element media asociat paragrafului"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ display: format }}
                />                  
                <TextareaAutosize
                  className={classes.paragraphEdit}
                  onChange={e => setContent(e.target.value)}
                  placeholder="Continutul paragrafului"
                  rows={1}
                  value={content}
                />
  
        
              </form>
            </div>
          )
        }}
      </Mutation>
    )
}

const EDIT_DRAFT_MUTATION = gql`
  mutation EditDraftMutation($id: ID!, $content: String!, $styling: String!, $media: String!) {
    updateParagraph(id: $id, content: $content, styling: $styling, media: $media) {
      id
      content
      styling
      media
    }
  }
`
