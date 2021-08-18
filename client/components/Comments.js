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
                        <TextField id='eTitle' fullWidth label='Title' name='Title' size='medium' variant='outlined' defaultValue= {this.props.postProps.title} /> 
                      </Grid>
                      <Button color="primary" className='submitPost' fullWidth variant="contained" onClick={this.editPost}>
                      Edit Comment
                    </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )


}


export default Comment;