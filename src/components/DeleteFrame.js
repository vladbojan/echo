import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import {FRAME_QUERY} from './CreatePage'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

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
          data: { drafts: drafts.concat([data.createDraft]) },
        })
      }}
    >
    {(deleteDraft, { data, loading, error }) => {
      return (
          <form
            className="w-100"
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              await deleteDraft({
                variables: { id },
              })
              props.refresh()
            }}
          >
            <IconButton color="secondary" aria-label="adauga cadru" size="large" className={classes.margin} type="submit">
              <DeleteIcon />
            </IconButton>
          </form>
      )
    }}
  </Mutation>
  );
}
