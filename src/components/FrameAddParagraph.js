import React, { Component } from 'react'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import TextField from '@material-ui/core/TextField'
import Divider from '@material-ui/core/Divider'
import { Mutation } from 'react-apollo'
import {FRAME_QUERY} from './CreatePage'
import  { gql } from 'apollo-boost'

class  FrameAddParagraph extends Component  {
  state = {
    content: '',
    styling: '',
    media: '',
    format: 'none',
  }
  render() {
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
                className="w-100"
                onSubmit={async e => {
                  e.preventDefault()
                  const parentId = this.props.frame.id
                  const { content, styling, media } = this.state
                  await createDraft({
                    variables: { content, styling, media, parentId },
                  })
                  this.setState({ content: '', styling: '', media: '',})
                  this.props.refresh()
                }}
              >
                <Divider />
                <CardActions>
                  <Button size="small" color="primary" disabled={!this.state.content} type="submit">
                    Creeaza
                  </Button>
                  <Button size="small" color="primary" onClick={e => this.state.format==='none'? this.setState({ format: 'block'}) : 
                                                                                                this.setState({ format: 'none'})}>
                    Formatare
                  </Button>
                  <Button size="small" color="primary" onClick={e => this.setState({ content: '', styling: '', media: '',})}>
                    Anuleaza
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

const CREATE_DRAFT_MUTATION = gql`
  mutation CreateDraftMutation($content: String!, $styling: String!, $media: String!, $parentId: String!) {
    createParagraph(content: $content, styling: $styling, media: $media, parentId: $parentId) {
      id
      content
      styling
      media
    }
  }
`

export default FrameAddParagraph;
