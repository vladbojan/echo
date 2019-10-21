import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import FrameEdit from './FrameEdit'
import Story from './Story'

class CreatePage extends Component {
  render() {
    return (
      <Query query={FRAME_QUERY} variables={{ id: this.props.match.params.id }}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div className="flex w-100 h-100 items-center justify-center pt7">
              <div>Loading ...</div>
            </div>
          )
        }

        if (error) {
          return (
            <div className="flex w-100 h-100 items-center justify-center pt7">
              <div>An unexpected error occured.</div>
            </div>
          )
        }

        const { frame } = data
        return (
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <FrameEdit
                key={frame.id}
                frame={frame}
                refresh={() => refetch()}
                isDraft={!frame.published}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Story
                key={frame.parent.parent.id}
                story={frame.parent.parent}
                refresh={() => refetch()}
                isDraft={!frame.parent.parent.published}
              />
            </Grid>
          </Grid>   
        )
      }}
    </Query>
    )
  }

}

export const FRAME_QUERY = gql`
  query FrameQuery($id: ID!) {
    frame(id: $id) {
      title
      paragraphs{
        content
      }
      parent{
        id
        frames{
          title
          paragraphs{
            content
          }
        }
        parent{
          id
          title
          scenes{
            id
            title
            frames{
              title
              paragraphs{
                content
              }
            }
          }
        }
      }
    }
  }
`

export default withRouter(CreatePage)
