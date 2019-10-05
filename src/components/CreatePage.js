import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'
import { DRAFTS_QUERY } from './DraftsPage'

class CreatePage extends Component {
  state = {
    title: '',
    content: '',
    styling: '',
    media: '',
    parentId: 'cjzgtfhdabq9d0b53xb33079g',
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_DRAFT_MUTATION}
        update={(cache, { data }) => {
          const { drafts } = cache.readQuery({ query: DRAFTS_QUERY })
          cache.writeQuery({
            query: DRAFTS_QUERY,
            data: { drafts: drafts.concat([data.createDraft]) },
          })
        }}
      >
        {(createDraft, { data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { content, styling, media, parentId } = this.state
                  await createDraft({
                    variables: { content, styling, media, parentId },
                  })
                  this.props.history.replace('/drafts')
                }}
              >
                <h1>Adauga Paragraf</h1>
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ title: e.target.value })}
                  placeholder="Title"
                  type="text"
                  value={this.state.title}
                />
                <textarea
                  className="db w-100 ba bw1 b--black-20 pa2 br2 mb2"
                  cols={50}
                  onChange={e => this.setState({ content: e.target.value })}
                  placeholder="Content"
                  rows={8}
                  value={this.state.content}
                />
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ styling: e.target.value })}
                  placeholder="Styling"
                  type="text"
                  value={this.state.styling}
                />
                <input
                  autoFocus
                  className="w-100 pa2 mv2 br2 b--black-20 bw1"
                  onChange={e => this.setState({ media: e.target.value })}
                  placeholder="Media"
                  type="text"
                  value={this.state.media}
                />
                <input
                  className={`pa3 bg-black-10 bn ${this.state.content &&
                    this.state.title &&
                    'dim pointer'}`}
                  disabled={!this.state.content}
                  type="submit"
                  value="Create"
                />
                <a className="f6 pointer" onClick={this.props.history.goBack}>
                  or cancel
                </a>
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

export default withRouter(CreatePage)
