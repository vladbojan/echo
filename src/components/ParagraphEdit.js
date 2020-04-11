import React, { useRef }  from 'react'

import { useDrag, useDrop } from 'react-dnd'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import EditIcon from '@material-ui/icons/Edit'
import IconButton from '@material-ui/core/IconButton'

import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

import {FRAME_QUERY} from './CreatePage'
import DeleteParagraph from './DeleteParagraph'
import { useStyles } from '../constants/styles'
import { ItemTypes } from '../constants/ItemTypes'
import TextEditor from './TextEditor'


export default function ParagraphEdit(props)  {
  const classes = useStyles();
  const [id, setId] = React.useState(props.id);
  const [content, setContent] = React.useState(props.content);
  const [styling, setStyling] = React.useState(props.styling);
  const [media, setMedia] = React.useState(props.media);
  const [position, setPosition] = React.useState(props.position);
  const [theme, setTheme] = React.useState('bubble');
  const [readOnly, setReadOnly] = React.useState(true);

  const handleSetContent = (value) =>{
    setContent(value)
  }

  const handleSetEdit = () =>{
    theme==='snow'?setTheme('bubble'):setTheme('snow')
    readOnly===true?setReadOnly(false):setReadOnly(true)
  }

  const [{isDragging}, drag] = useDrag({
    item: { id:id, position:position, type: ItemTypes.PARAGRAPH },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult()
    },
		collect: monitor => ({
			isDragging: !!monitor.isDragging(),
		}),
  })

  return (
    <div ref={drag}>
    <CardActions>
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
                  await createDraft({
                    variables: { id, content, styling, media },
                  })
                  props.refresh()
                  setTheme('bubble')
                  setReadOnly(true)
                }}
              >
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
                  style={{ display: 'none' }}
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
                  style={{ display: 'none' }}
                />           
                <TextEditor content={content}  class={readOnly?'':classes.paragraphEdit} setContent={handleSetContent} theme={theme} readOnly={readOnly}/>
                <Button size="small" className={theme==='snow'?classes.actionButton:classes.hidden} disabled={!content} type="submit">
                  Salveaza
                </Button>

              </form>
          )
        }}
      </Mutation>
      <IconButton className={classes.iconButtonParagraph} size="small" aria-label="edit" onClick={e => handleSetEdit()}>
        <EditIcon />
      </IconButton>
      <DeleteParagraph 
        id={props.id} 
        refresh={props.refresh}
      />
    </CardActions> 
    </div>
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
