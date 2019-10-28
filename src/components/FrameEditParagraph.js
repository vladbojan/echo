import React, { Component } from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import { Mutation } from 'react-apollo'
import {FRAME_QUERY} from './CreatePage'
import  { gql } from 'apollo-boost'

class  FrameEditParagraph extends Component  {
  state = {
    id: this.props.id,
    content: this.props.content,
    styling: this.props.styling,
    media: this.props.media,
    format: 'none',
  }
  render() {
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
            <div style={this.props.show===this.state.id?{ display: 'block' }:{ display: 'none' }}>
              <form
                className="w-100"
                onSubmit={async e => {
                  e.preventDefault()
                  const { id, content, styling, media } = this.state
                  await createDraft({
                    variables: { id, content, styling, media },
                  })
                  this.props.refresh()
                }}
              >
                <Divider />
                <CardActions>
                  <Button size="small" color="primary" disabled={!this.state.content} type="submit">
                    Salveaza
                  </Button>
                  <Button size="small" color="primary" onClick={e => this.state.format==='none'? this.setState({ format: 'block'}) : 
                                                                                                this.setState({ format: 'none'})}>
                    Formatare
                  </Button>
                </CardActions>  
                <TextField
                  label="Styling"
                  value={this.state.styling}
                  onChange={e => this.setState({ styling: e.target.value })}
                  margin="normal"
                  placeholder="Defineste tipul si culoarea fontului folosit"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ display: this.state.format }}
                />
                <TextField
                  label="Media"
                  value={this.state.media}
                  onChange={e => this.setState({ media: e.target.value })}
                  margin="normal"
                  placeholder="Defineste un element media asociat paragrafului"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{ display: this.state.format }}
                />                  
                <TextareaAutosize
                  className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                  onChange={e => this.setState({ content: e.target.value })}
                  placeholder="Continutul paragrafului"
                  rows={1}
                  value={this.state.content}
                />
  
        
              </form>
            </div>
          )
        }}
      </Mutation>
    )
  }
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

export default FrameEditParagraph;
