import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Query } from 'react-apollo'

import  { gql } from 'apollo-boost'
import FrameEdit from './FrameEdit'

class CreatePage extends Component {
  state = {
    content: '',
    styling: '',
    media: '',
    parentId: 'cjzgtfhdabq9d0b53xb33079g',
  }

  render() {
    return (
      <div>
      <Query query={FRAME_QUERY}>
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
            {data.frames &&
              data.frames.map(frame =>
                <FrameEdit
                key={frame.id}
                frame={frame}
                refresh={() => refetch()}
                isDraft={!frame.published}
              />
              )
            }
            {this.props.children}
          </Fragment>
        )
      }}
    </Query>
      </div>
    )
  }

}

export const FRAME_QUERY = gql`
  query FrameQuery {
    frames{
      title
      paragraphs{
        content
      }
    }
  }
`

export default withRouter(CreatePage)
