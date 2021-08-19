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
import { StylesProvider, styled } from '@material-ui/core/styles';
import Post from './../components/post.js';

const AllPostsContainer = styled(Container)({
  marginTop: '120px',
})

class FeedContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    const feedArr = [];
    this.props.AppState.feed.reverse().forEach((el, ind) => {
      feedArr.push(
        <Post 
          appState={this.props.AppState}
          key={ind}
          postProps={el} 
          update={this.props.update}
        />)
    })

    return (
      <AllPostsContainer id='feed' maxWidth='md'> 
       {feedArr}
      </AllPostsContainer>
    )
  }
}

export default FeedContainer;