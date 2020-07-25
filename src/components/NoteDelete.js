import React from 'react'
import { useStyles } from '../constants/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import {NOTES_QUERY} from './NoteContainer'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'



const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNoteMutation($id: ID!) {
    deleteNote(id: $id) {
      id
    }
  }
`

export default function DeleteStory(props) {
  const classes = useStyles();

  return (
    <Mutation
      mutation={DELETE_NOTE_MUTATION}
    >
    {(deleteDraft, { data, loading, error }) => {
      return (
          <form
            className={classes.formButtonNote}
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              await deleteDraft({
                variables: { id },
              })
              props.refresh()
            }}
          >
            <IconButton aria-label="sterge" size="large" className={classes.iconButtonNote} type="submit">
              <DeleteIcon />
            </IconButton>
          </form>
      )
    }}
  </Mutation>
  );
}
