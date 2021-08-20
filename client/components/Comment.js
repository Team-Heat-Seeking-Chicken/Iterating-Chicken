import React from "react";
import { Button, TextField, Grid, Container, Paper, AppBar, Typography, Toolbar, Link } from "@material-ui/core";
import { StylesProvider, styled, ThemeProvider } from '@material-ui/core/styles';

const Comment = ({ comment }) => {
  const { author, created_at, likes, suggestion } = comment;
  return (
    <div className="comment-wrapper">
      <p>{suggestion}</p>
      <p>{author}</p>
    </div>
  )
}

export default Comment;
