import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { Mutation } from 'react-apollo'
import  { gql } from 'apollo-boost'

class CreateStory extends Component {
  state = {
    title: '',
    content: '',
    styling: '',
    media: '',
    frame: '',
  }

  render() {
    return (
      <Mutation
        mutation={CREATE_STORY_MUTATION}
      >
        {(createStory, { title, data, loading, error }) => {
          return (
            <div className="pa4 flex justify-center bg-white">
              <form
                onSubmit={async e => {
                  e.preventDefault()
                  const { title, styling, media } = this.state
                  await createStory({
                    variables: { title, styling, media },
                  })
                  this.props.history.replace('/drafts')
                }}
              >
                <h1>Adauga Poveste</h1>
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

const CREATE_STORY_MUTATION = gql`
  mutation CreateStoryMutation($title: String!, $styling: String!, $media: String!) {
    createStory(title: $title, styling: $styling, media: $media) {
      id
      title
      styling
      media
    }
  }
`

export default withRouter(CreateStory)
