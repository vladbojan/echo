import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'

import ParagraphDrag from './ParagraphDrag'
import ParagraphDnD from './ParagraphDnD'
import {SIMPLE_FRAME_QUERY} from './FrameReference'

import 'react-quill/dist/quill.bubble.css' 

const { getPosition } = require('./utils')

function  FrameReferenceEdit(props)  {
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
          {data && data.frame && data.frame.paragraphs && 
          <DndProvider backend={Backend}>
          {data.frame.paragraphs.map((paragraph, index, allParagraphs)=>
              <div>
                <ParagraphDrag
                    key= {paragraph.id}
                    id= {paragraph.id}
                    paragraph= {paragraph}
                    show= {paragraph.id}
                    position = {paragraph.position}
                    refresh={props.refresh}
                  />
                  {allParagraphs[index+1] &&
                  <ParagraphDnD
                    id= {paragraph.id}
                    position={paragraph.position+"-"+allParagraphs[index+1].position}
                    refresh={props.refresh}
                  />
                  }
                  {!allParagraphs[index+1] &&
                  <ParagraphDnD
                    id= {paragraph.id}
                    position={getPosition(allParagraphs[index]?allParagraphs[index].position:"0")}
                    refresh={props.refresh}
                  />
                  }
              </div>   
          )}
          </DndProvider>
          }
          </div>
          )
      }}
    </Query>
  )
  }


FrameReferenceEdit.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FrameReferenceEdit;
