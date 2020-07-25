import React from 'react'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'

import TextEditor from './TextEditor'
import {NOTES_QUERY} from './NoteContainer'
import NoteDelete from './NoteDelete'

import { useStyles } from '../constants/styles'

export default function NoteEdit(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const [content, setContent] = React.useState(props.content)

  const handleSetContent = (value) =>{
    setContent(value)
  }

  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  return (
    <Mutation
    mutation={EDIT_DRAFT_MUTATION}
    update={(cache, { data }) => {
      const { drafts } = cache.readQuery({ query: NOTES_QUERY })
      cache.writeQuery({
        query: NOTES_QUERY,
        data: { drafts: drafts.concat([data.createDraft]) },
      })
    }}
  >
    {(createDraft, { data, loading, error }) => {
      return (
        <div>
          <form
            className={classes.tabPanel}
            onSubmit={async e => {
              e.preventDefault()
              const id = props.id
              const position = props.position
              await createDraft({
                variables: { id, content, position },
              })
              props.refresh()
            }}
          >
        <Collapse in={props.checked}>
          <Paper elevation={4} className={classes.note}>
            <TextEditor content={content}  class={classes.paragraphEdit} setContent={handleSetContent} theme='snow' key={props.id}/>
          </Paper>
          <Button size="small" className={classes.actionButton} disabled={!content} type="submit">
            Salveaza
          </Button>
          <NoteDelete 
            id={props.id} 
            refresh={props.refresh}
          />
        </Collapse>
        </form>
          </div>
        )
      }}
    </Mutation>
  );
}

const EDIT_DRAFT_MUTATION = gql`
  mutation EditDraftMutation($id: ID!, $content: String!, $position: String) {
    updateNote(id: $id, content: $content, position: $position) {
      id
      content
      position
    }
  }
`
