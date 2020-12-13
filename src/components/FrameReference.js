import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'
import Reference from './Reference'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css' 

function  FrameReference(props)  {
  return (
    <Query query={SIMPLE_FRAME_QUERY} variables={{ id: props.id }}>
      {({ data, loading, error, refetch }) => {
        if (loading) {
          return (
            <div/>
          )
        }
  
        if (error) {
          return (
            <div/>
          )
        }

        return (
          <div>
          {data && data.frame && data.frame.paragraphs && data.frame.paragraphs.map(paragraph=>
            <div>
            <ReactQuill
                value={paragraph.content}
                readOnly={true}
                theme={"bubble"}
            />
            <Reference 
              id={paragraph.styling} 
              name={paragraph.media} 
              refresh={props.refresh}
            />
            </div>
          )}
          </div>
          )
      }}
    </Query>
  )
  }


FrameReference.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameReference;

export const SIMPLE_FRAME_QUERY = gql`
query FrameQuery($id: ID!) {
  frame(id: $id) {
    id
    title
    styling 
    media
    position
    paragraphs{
      id
      content
      styling
      media
      position
    }
  }
}
`
