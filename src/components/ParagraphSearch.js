import React from 'react'

import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import Frame from './Frame'

import { useStyles } from '../constants/styles'

export default function ParagraphSearch(props) {
  const classes = useStyles()

  return (
    <div>
    <Query key={'paragraphSearch'}
    query={SEARCH_PARAGRAPH} variables={{searchString: props.searchString}}>
    {({ data, loading, error, refetch }) => {
      if (loading) {
        return (
          <div/>
        )
      }

      return (
        <div className={classes.searchContainer}>
          {data.searchParagraph &&
           data.searchParagraph.map(paragraph => paragraph.parent).map(frame=>
            <div className={classes.headerSearch}>
            <Frame
              frame={frame}
              refresh={refetch}
              isDraft={!frame.published}
              size={1}
              noMedia={true}
            />
            </div>
          )
          } 
        </div> 
        )
      }}
    </Query>
    </div>
  );
}

const SEARCH_PARAGRAPH = gql`
query SearchParagraphQuery($searchString: String!) {
  searchParagraph(searchString: $searchString){
    parent{
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
}
`
