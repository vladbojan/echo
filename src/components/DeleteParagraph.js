import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DeleteIcon from '@material-ui/icons/Delete'
import IconButton from '@material-ui/core/IconButton'
import {FRAME_QUERY} from './CreatePage'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

const useStyles = makeStyles(theme => ({
  margin: {
    margin: 0,
  },
  deleteForm: {
    display: "inline",
  },
}));

const DELETE_PARAGRAPH_MUTATION = gql`
  mutation DeleteParagraphMutation($id: ID!) {
    deleteParagraph(id: $id) {
      id
    }
  }
`

export default function DeleteParagraph(props) {
  const classes = useStyles();

  return (
    <Mutation
      mutation={DELETE_PARAGRAPH_MUTATION}
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
            className={classes.deleteForm}
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              await deleteDraft({
                variables: { id },
              })
              props.refresh()
            }}
          >
            <IconButton aria-label="sterge" size="small" className={classes.margin} type="submit">
              <DeleteIcon />
            </IconButton>
          </form>
      )
    }}
  </Mutation>
  );
}
