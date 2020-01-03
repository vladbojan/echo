import React from 'react'
import { useStyles } from '../constants/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import {FRAME_QUERY} from './CreatePage'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

const DELETE_FRAME_MUTATION = gql`
  mutation DeleteFrameMutation($id: ID!) {
    deleteFrame(id: $id) {
      id
    }
  }
`

export default function DeleteFrame(props) {
  const classes = useStyles();

  return (
    <Mutation
      mutation={DELETE_FRAME_MUTATION}
      update={(cache, { data }) => {
        const { drafts } = cache.readQuery({ query: FRAME_QUERY })
        cache.writeQuery({
          query: FRAME_QUERY,
          data: { drafts: drafts.concat([data.deleteDraft]) },
        })
      }}
    >
    {(deleteDraft, { data, loading, error }) => {
      return (
          <form
            className={classes.formButton}
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              await deleteDraft({
                variables: { id },
              })
              props.refresh()
            }}
          >
            <IconButton aria-label="sterge" size="large" className={classes.iconButton} type="submit">
              <DeleteIcon />
            </IconButton>
          </form>
      )
    }}
  </Mutation>
  );
}
