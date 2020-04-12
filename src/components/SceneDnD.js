import React, { useRef }  from 'react'
import { useDrop } from 'react-dnd'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Button from '@material-ui/core/Button'

import {FRAME_QUERY} from './CreatePage'
import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'


export default function SceneDnD(props)  {
  const classes = useStyles()
  const [id, setId] = React.useState(props.id)
  const [position, setPosition] = React.useState(props.position)
  const [title, setTitle] = React.useState('')
  const inputRef = React.useRef(null)

  function handleDrop(item) {
    setId(item.id);
    setTitle(item.title);
    inputRef.current.click();
  }

  const [{ canDrop, isOver }, drop] = useDrop({
    accept: ItemTypes.SCENE ,
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
                  if (title!==''){
                    await createDraft({
                      variables: { id, position },
                    })
                    setTitle('')
                    props.refresh()
                  }
                }}
              >
                <div ref={drop} className={isActive ? classes.dndHover:classes.dnd}>{isActive ? 'Muta scena aici' : '   '}</div>
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
  mutation MoveSceneMutation($id: ID!, $position: String!) {
    updateScenePosition(id: $id, position: $position) {
      id
      position
    }
  }
`
