import React from 'react'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Paper from '@material-ui/core/Paper'
import Collapse from '@material-ui/core/Collapse'
import Button from '@material-ui/core/Button'

import TextEditor from './TextEditor'
import {NOTES_QUERY} from './NoteContainer'

import { useStyles } from '../constants/styles'

export default function NoteAdd(props) {
  const classes = useStyles()
  const [checked, setChecked] = React.useState(false)
  const [content, setContent] = React.useState('')

  const handleSetContent = (value) =>{
    setContent(value)
  }

  const handleChange = () => {
    setChecked((prev) => !prev);
  }

  const [fooKey, setFooKey] = React.useState(1);
  const refreshFoo = () => setFooKey(fooKey + 1);

  return (
    <Mutation
    mutation={CREATE_DRAFT_MUTATION}
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
              const position = props.position
              await createDraft({
                variables: { content, position },
              })
              setContent('')
              props.refresh()
              refreshFoo()
            }}
          >
        <Collapse in={props.checked}>
          <Paper elevation={4} className={classes.note}>
            <TextEditor content={content}  class={classes.paragraphEdit} setContent={handleSetContent} theme='snow' key={fooKey}/>
          </Paper>
          <Button size="small" className={classes.actionButton} disabled={!content} type="submit">
            Salveaza
          </Button>
        </Collapse>
        </form>
          </div>
        )
      }}
    </Mutation>
  );
}

const CREATE_DRAFT_MUTATION = gql`
  mutation CreateDraftMutation($content: String!, $position: String) {
    createNote(content: $content, position: $position) {
      content
      position
    }
  }
`
