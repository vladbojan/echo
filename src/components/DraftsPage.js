import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Typography from '@material-ui/core/Typography'

export default class DraftsPage extends Component {
  render() {
    return (
      <Query query={DRAFTS_QUERY}>
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
          return (
            <Fragment>
              {data.me &&
                data.me.stories.map(story =>
                  <div>
                    <h1>{story.title}</h1>
                    {story.scenes.map(scene=>
                      <div>
                        <Typography gutterBottom variant="h4" component="h2">
                        {scene.title}
                        </Typography>
                        {scene.frames.map(frame=>
                              <Post
                                key={frame.id}
                                post={frame}
                                refresh={() => refetch()}
                                isDraft={!frame.published}
                              />
                          )}
                      </div>
                      )}
                  </div>
                )
              }
              {this.props.children}
            </Fragment>
          )
        }}
      </Query>
    )
  }
}

export const DRAFTS_QUERY = gql`
  query DraftsQuery {
    me {
      id
      email
      name
      stories{
        id
        title
        styling
        media
        scenes{
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
`
