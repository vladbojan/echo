import React, { Component, Fragment } from 'react'
import Post from '../components/Post'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import TextCard from './TextCard'
import Typography from '@material-ui/core/Typography';

export default class FeedPage extends Component {
  render() {
    return (
      <Query query={FEED_QUERY}>
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
              <h1>Echo</h1>
              <Typography gutterBottom variant="h4" component="h2">
              Scena 1
              </Typography>
              <TextCard/>
              <TextCard/>
            </Fragment>
          )
        }}
      </Query>
    )
  }
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
