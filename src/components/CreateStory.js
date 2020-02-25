import React from 'react'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'

import { useStyles } from '../constants/styles'

const CREATE_STORY_MUTATION = gql`
  mutation CreateStoryMutation($title: String!, $styling: String!, $media: String!, $position: String) {
    createStory(title: $title, styling: $styling, media: $media, position: $position) {
      id
      title
      styling
      media
      position
    }
  }
`

export default function CreateNewStory(props) {
const classes = useStyles();
const [title, setTitle] = React.useState('');
const [styling, setStyling] = React.useState('');
const [media, setMedia] = React.useState('');

    return (
      <Mutation mutation={CREATE_STORY_MUTATION}>
      {(createStory, { data, loading, error }) => {
        return (
          <div className="pa4 flex justify-center bg-white">
            <form
              onSubmit={async e => {
                e.preventDefault()
                const position = props.position
                await createStory({
                  variables: { title, styling, media, position },
                })
                window.location="/"
              }}
            >
              <h1>Adauga Poveste</h1>
              <TextareaAutosize
                className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                onChange={e => setTitle(e.target.value)}
                placeholder="Titlul povestii"
                rows={1}
                value={title}
              />
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
              />                  
              <Button size="small" disabled={!title} type="submit" className={classes.actionButton}>
                Salveaza
              </Button>
            </form>
          </div>
        )
      }}
    </Mutation>
    )
}
