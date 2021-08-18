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
                      <Button color="primary" className='submitPost' fullWidth variant="contained" onClick={this.editPost}>
                      Edit Comment
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )

    const nonAuthoredPost = ()

    const authoredPost = ()

    if (this.state.editComment){
        return (
          editComment
        )
      }
      else if (this.props.appState.user.username === this.props.postProps.author){
        return (
          authoredCommment
        )
      }
      else{
        return (
          nonAuthoredComment
           )
      }
}


export default Comment;