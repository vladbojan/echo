import React from 'react'

import { Query } from 'react-apollo'
import  { gql } from 'apollo-boost'

import NoteEdit from './NoteEdit'

import { useStyles } from '../constants/styles'

export default function NoteSearch(props) {
  const classes = useStyles()

  return (
    <div>
    <Query key={'notesSearch'}
    query={SEARCH_NOTE} variables={{searchString: props.searchString}}>
    {({ data, loading, error, refetch }) => {
      if (loading) {
        return (
          <div/>
        )
      }

      return (
        <div className={classes.notesContainer}>
          {data.searchNote &&
          data.searchNote.map(note =>
          <NoteEdit position={note.position} key={'searchedNote'+note.id} content={note.content} checked={props.checked} refresh={refetch}/>
          )
          } 
        </div> 
        )
      }}
    </Query>
    </div>
  );
}

const SEARCH_NOTE = gql`
query SearchNotesQuery($searchString: String!) {
  searchNote(searchString: $searchString){
    id
    content
    position
  }
}
`
