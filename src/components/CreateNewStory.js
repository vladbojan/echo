import React from 'react'
import { Query } from 'react-apollo'

import { useStyles } from '../constants/styles'
import {FEED_QUERY} from './FeedPage'
import ErrorPage from './ErrorPage'
import Loader from './Loader'
import CreateUser from './CreateUser'
import CreateStory from './CreateStory'

const { getPosition } = require('./utils')

export default function CreateNewStory(props) {
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
              {data.me && data.me.stories &&
                data.me.stories.length > 0 &&
                <CreateStory position={getPosition(data.me.stories[data.me.stories.length-1]?data.me.stories[data.me.stories.length-1].position:"0")}/>
              } 
              {data.me && data.me.stories.length===0 &&
              <CreateStory position={"0"}/>
              }
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
