import React from 'react'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css' 
import 'react-quill/dist/quill.bubble.css' 


export default function TextEditor(props)  {
  const Quill = ReactQuill.Quill
  var Font = Quill.import('formats/font');
  Font.whitelist = ['sans-serif', 'calibri', 'roboto'];
  Quill.register(Font, true);

  const [content, setContent] = React.useState(props.content);

  const modules = {
      toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': Font.whitelist }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']
      ]
    }

  const formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video'
    ]

  return (
          <div>
            <ReactQuill 
              theme={props.theme}
              className={props.class}
              onChange={(newValue, delta, source) => {
                  setContent(newValue)
                  props.setContent(newValue)
              }}
              value={content}
              modules={modules}
              formats={formats}
             />
           </div>
         )
  
}
