import React, { Component } from "react";
import {
  Button,
  TextField,
  Grid,
  Container,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  Link,
  } from "@material-ui/core";
  import { StylesProvider, makeStyles, styled } from '@material-ui/core/styles';

class Comment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        editComment: false,
      }
      this.editComment = this.editComment.bind(this);
      this.changeToEdit = this.changeToEdit.bind(this);
      this.deleteComment = this.deleteComment.bind(this);
    }



    async editComment(e) {

        const body = await {
        }
    }



    async deleteComment(e){

    }    

    changeToEdit(e) {
        // const targetId = e.target.value;
        this.setState({ editComment: true})
      }
}

render(){

    const editComment = (
        <Container maxWidth='md'>
          <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <TextField id='eComment' fullWidth label='Comment' name='Comment' size='medium' variant='outlined' defaultValue= {this.props.postProps.title} /> 
                      </Grid>
                      <Button color="primary" className='submitComment' fullWidth variant="contained" onClick={this.editPost}>
                      Edit Comment
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

    const nonAuthoredComment = (
        <CommentContainer maxWidth='md' >
         <p className='postText'> {' ' + this.props.postProps.results}</p>
         <h3>Author: {' ' + this.props.postProps.author}</h3>
         {/* <p></p> */}
         <h3>Date Posted:{' ' + this.props.postProps.created}</h3>
        {/* <p> </p> */}
      </CommentContainer>
    )

    const authoredComment = (
        <CommentContainer maxWidth='md' >
        <p className='postText'> {' ' + this.props.postProps.results}</p>
        <h3>Author: {' ' + this.props.postProps.author}</h3>
        {/* <p></p> */}
        <h3>Date Posted:{' ' + this.props.postProps.created}</h3>
       {/* <p> </p> */}
       <span><Button onClick={this.changeToEdit} color='primary' variant="contained" >Edit Post</Button><Button onClick={this.deleteComment} color='secondary' variant="contained">Delete Post</Button></span>
       </CommentContainer>
    )

    if (this.state.editComment){
        return (
          editComment
        )
      }
      else if (this.props.appState.user.username === this.props.postProps.author){
        return (
            authoredComment
        )
      }
      else{
        return (
          nonAuthoredComment
           )
      }
}


export default Comment;