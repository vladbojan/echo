import React from 'react'
import { useStyles } from '../constants/styles'
import FeedPage from '../components/FeedPage'
import DraftsPage from '../components/DraftsPage'
import CreatePage from '../components/CreatePage'
import CreateNewStory from '../components/CreateNewStory'
import DetailPage from '../components/DetailPage'
import StoryEditPage from '../components/StoryEditPage'
import MyStoriesNavigation from './MyStoriesNavigation'

import {
  Route,
  Switch,
} from 'react-router-dom'

export default function HomeContainer(props) {
  const classes = useStyles();
  
  return (
    <div className={classes.home}>
      <Switch>
        <Route exact path="/" component={FeedPage} />
        <Route path="/user/:email" component={FeedPage} />
        <Route path="/drafts/:id" component={DraftsPage} />
        <Route path="/create/:id" component={CreatePage} />
        <Route path="/createStory" component={CreateNewStory} />
        <Route path="/post/:id" component={DetailPage} />
        <Route path="/edit/:id" component={StoryEditPage} />
        <Route path="/navigator" component={MyStoriesNavigation} />
      </Switch>
    </div>
      )
  }
