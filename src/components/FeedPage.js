import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import { useStyles } from '../constants/styles'
import Story from './Story'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import CreateUser from './CreateUser'
import CreateStory from './CreateStory'

export default function FeedPage(props) {
const classes = useStyles();

    return (
      <Query query={FEED_QUERY}>
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
            <div className={classes.homeEdit}>
              {data.me &&
                data.me.stories.map(story =>
                <Story
                  story={story}
                  refresh={() => refetch()}
                  isDraft={!story.published}
                  show={story.id}
                />
              )
              } 
              {data.me && data.me.stories.length===0 &&
              <CreateStory/>}
              {!data.me &&
                <CreateUser
                  email={props.match.params.email}
                  />
              }
            </div>
          )
        }}
      </Query>
    )
}

export const FEED_QUERY = gql`
  query FeedQuery {
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
