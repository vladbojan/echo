import React, { useRef }  from 'react'
import { useDrop } from 'react-dnd'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Button from '@material-ui/core/Button'

import {FRAME_QUERY} from './CreatePage'
import TextEditor from './TextEditor'
import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'


export default function ParagraphDnD(props)  {
  const classes = useStyles()
  const [id, setId] = React.useState(props.id)
  const [position, setPosition] = React.useState(props.position)
  const [content, setContent] = React.useState('')
  const inputRef = React.useRef(null)

  function handleDrop(item) {
    setId(item.id);
    setContent(item.content);
    inputRef.current.click();
  }

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.PARAGRAPH ,
    canDrop: (item) => (id!==item.id),
    drop: (item) => (handleDrop(item)),
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  })

  const isActive = canDrop && isOver

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
              <form
                className="w-100"
                onSubmit={async e => {
                  e.preventDefault()
                  if (content!==''){
                    await createDraft({
                      variables: { id, position },
                    })
                    setContent('')
                    props.refresh()
                  }
                }}
              >
                <div ref={drop} className={classes.dnd}>{isActive ? 'Muta paragraful aici' : '   '}</div>
                <Button ref={inputRef} className={classes.hidden} type="submit">
                  Confirma
                </Button>
              </form>
          )
        }}
      </Mutation>
    )
}

const EDIT_DRAFT_MUTATION = gql`
  mutation MoveParagraphMutation($id: ID!, $position: String!) {
    updateParagraphPosition(id: $id, position: $position) {
      id
      position
    }
  }
`
