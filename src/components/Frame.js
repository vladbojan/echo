import React from 'react'
import PropTypes from 'prop-types'
import { Query } from 'react-apollo'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { useStyles } from '../constants/styles'
import DeleteFrame from './DeleteFrame'
import Reference from './Reference'
import FrameReference from './FrameReference'
import {SIMPLE_FRAME_QUERY} from './FrameReference'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css' 

function  Frame(props)  {
  const classes  = useStyles();
  const [show, setShow] = React.useState(0);
  const handleShow  = param => e => {
    (param === show) ? setShow(0) : setShow(param);
  };
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
        {data && data.frame &&
      <Card className={props.edit?classes.cardEdit:classes.cardContainer}>
        <CardMedia
          className={classes.media}
        >
        <div className={classes.header}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.titleFrame}>
            {data.frame.title}
          </Typography>
          {props.edit&&
          <div className={classes.flex}>
            <DeleteFrame 
              id={data.frame.id} 
              refresh={props.refresh}
            />
            <Button size="small" onClick={handleShow(data.frame.id)}>
            {(data.frame.id === show) ? "Ascunde":"Arata"}
            </Button>  
          </div>
        }
        </div>
        </CardMedia>
        <CardContent className={props.edit?(show===data.frame.id)?classes.cardEdit:classes.hide:classes.card}>
{/*           <InstagramEmbed
            url='https://www.instagram.com/p/CIFpKHEn7q0/?utm_source=ig_web_copy_link'
            clientAccessToken='420594535662942|5aa2ba0c9bcb43aa0d8b8ba8ecd2c225'
            maxWidth={320}
            hideCaption={true}
            containerTagName='div'
            protocol=''
            injectScript={true}
            onLoading={() => {}}
            onSuccess={() => {}}
            onAfterRender={() => {}}
            onFailure={() => {}}
          /> */}
        {data.frame.styling && 
          <FrameReference id={data.frame.styling}/>
        }
        {data.frame.paragraphs.map(paragraph=>
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
      </CardContent>
      <CardActions>
        <Button size="small" visibility="hidden" className={classes.actionButton}>
          Share
        </Button>
        <Button size="small" className={classes.actionButton} href={"/create/"+data.frame.id}>
          Editeaza
        </Button>      
      </CardActions>
    </Card>
      }
      </div>
      )
    }}
    </Query>
    )
  }


Frame.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Frame;
