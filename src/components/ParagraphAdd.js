import React from 'react'

import  { gql } from 'apollo-boost'

import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'

import { Mutation } from 'react-apollo'
import {FRAME_QUERY} from './CreatePage'
import { useStyles } from '../constants/styles'
import TextEditor from './TextEditor'


function ParagraphAdd(props)  {
const classes  = useStyles()

const [content, setContent] = React.useState('')
const [styling, setStyling] = React.useState('')
const [media, setMedia] = React.useState('')
const [theme, setTheme] = React.useState('snow')

const [fooKey, setFooKey] = React.useState(1);
const refreshFoo = () => setFooKey(fooKey + 1);

const handleSetContent = (value) =>{
  setContent(value)
}

return (
      <Mutation
      mutation={CREATE_DRAFT_MUTATION}
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
          <div>
            <form
              className={classes.tabPanel}
              onSubmit={async e => {
                e.preventDefault()
                const parentId = props.frame.id
                const position = props.position
                await createDraft({
                  variables: { content, styling, media, parentId, position },
                })
                setContent('')
                setStyling('')
                setMedia('')
                props.refresh()
                refreshFoo()
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
              />    
{/*               <TextField
                label="Continut"
                value={content}
                onChange={e => setContent(e.target.value)}
                margin="normal"
                placeholder=""
                fullWidth
                InputLabelProps={{
                  shrink: true,
                }}
              />    */}             
              <TextEditor content={content}  class={classes.paragraphEdit} setContent={handleSetContent} theme={theme} key={fooKey}/>
              <CardActions>
                <Button size="small" className={classes.actionButton} disabled={!content} type="submit">
                  Salveaza
                </Button>
                <Button size="small" className={classes.actionButton} onClick={e => {setContent(''); setStyling(''); setMedia(''); refreshFoo()}}>
                  Anuleaza
                </Button>
              </CardActions>  

            </form>
          </div>
        )
      }}
    </Mutation>
  )
}

const CREATE_DRAFT_MUTATION = gql`
  mutation CreateDraftMutation($content: String!, $styling: String!, $media: String!, $parentId: String!, $position: String) {
    createParagraph(content: $content, styling: $styling, media: $media, parentId: $parentId, position: $position) {
      id
      content
      styling
      media
      position
    }
  }
`

export default ParagraphAdd;
