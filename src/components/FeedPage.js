import React, { Component, Fragment } from 'react'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import TextCard from './TextCard'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import Typography from '@material-ui/core/Typography';

export default class FeedPage extends Component {
  render() {
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
