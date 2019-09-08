import React, { Component, Fragment } from 'react'
import Story from './Story'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

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
                    <Story
                      key={story.id}
                      story={story}
                      refresh={() => refetch()}
                      isDraft={!story.published}
                    />
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
