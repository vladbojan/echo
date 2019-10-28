import React from 'react'
import { withRouter } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import FrameEdit from './FrameEdit'
import StoryOverview from './StoryOverview'
import ErrorPage from './ErrorPage'
import Loader from './Loader'

function CreatePage(props) {
  return (
    <Query query={FRAME_QUERY} variables={{ id: props.match.params.id }}>
    {({ data, loading, error, refetch }) => {
      if (loading) {
        return (
          <Loader/>
        )
      }

      if (error) {
        return (
          <ErrorPage/>
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
            <StoryOverview 
              key={frame.parent.parent.id}
              story={frame.parent.parent}
              scene={frame.parent}
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

export const FRAME_QUERY = gql`
  query FrameQuery($id: ID!) {
    frame(id: $id) {
      id
      title
      paragraphs{
        id
        content
        styling
        media
      }
      parent{
        id
        title
        frames{
          id
          title
          paragraphs{
            id
            content
            styling
            media
          }
        }
        parent{
          id
          title
          scenes{
            id
            title
            frames{
              id
              title
              paragraphs{
                id
                content
                styling
                media
              }
            }
          }
        }
      }
    }
  }
`

export default withRouter(CreatePage)
