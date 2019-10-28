import React, { Component, Fragment } from 'react'
import Story from './Story'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

export default class DraftsPage extends Component {
  render() {
    return (
      <Query query={DRAFTS_QUERY}>
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
          id
          title
          frames{
            id
            title
            paragraphs{
              id
              content
            }
          }
        }
      }
    }
  }
`
