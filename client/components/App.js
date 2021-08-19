import React, { Component } from "react";
import FeedContainer from './../containers/FeedContainer.jsx'
import NavBar from './NavBar.js'
import Login from './Login.js'
import CreateUser from './CreateUser.js'

class App extends Component { 
  constructor() {
    super();
    this.state = {
      userLoggedIn: false,
      createUser: false,
      session: undefined,
      user: undefined,
      feed: undefined,
    }
    this.createUserClick = this.createUserClick.bind(this);
    this.actualCreate = this.actualCreate.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.updatePosts = this.updatePosts.bind(this);
    this.logout = this.logout.bind(this);
  }

  // On click function for when user clicks on "create user". Changes state to rerender create user box.
  createUserClick() {
    this.setState({ createUser: true });
  }

 // function to create user in database 
  async actualCreate() {
    let newUser = await document.getElementById('cUser').value;
    let newEmail = await document.getElementById('cEmail').value;
    let newPassword = await document.getElementById('cPassword').value;
    let confirmPassword = await document.getElementById('cPassword2').value;

    if (newPassword != confirmPassword) {
      alert('Passwords must match')
    } else {
      const body = await {
        username: newUser,
        email: newEmail,
        password: newPassword,
      }
      // create new user
      await fetch('/new', {
        method: 'POST',
        headers: {'Content-Type': 'Application/JSON'},
        body: JSON.stringify(body)
      })
      .then(res => res.json())
      .then(user => {
        if (!user.status) {
        this.setState({ userLoggedIn: true, user: user, createUser: false })
        }
        else {
          alert(`there was an error creating a user ${user.message}`)
        }
      })
      .catch(err => console.log(err))
    }
  }
  // function to login user to site 
  async loginUser() {
    let loginUser = await document.getElementById('lUser').value;
    let loginPass = await document.getElementById('lPass').value;
    let body = await { username: loginUser, password: loginPass };

    await fetch('/login', {
      method: 'POST',
      headers: {'Content-Type': 'Application/JSON'},
      body: JSON.stringify(body)
    })
    .then(res => res.json())
    .then(user => {
      if (!user.status) {
        this.setState({ userLoggedIn: true, user: user})
      }
    })
    .catch(err => console.log(err));
  }

  logout(e) {
    console.log("I am logging out!")
    fetch('/logout')
    .then(res => res.json())
    this.setState({ userLoggedIn: false });
  }
  // Get all posts on mount, makes the request once 
  componentDidMount() {
    fetch('/posts')
      .then(res => res.json())
      .then(results => {
        console.log(results, 'results')
        if (results.session !== null) {
          this.setState({ userLoggedIn: true, user: results.session, feed: results.allPosts });
        } 
        this.setState({ feed: results.allPosts })
      })
  }

  updatePosts() {
    fetch('/posts')
    .then(res => res.json())
    .then(results => {
      this.setState({ feed: results.allPosts })
    })
  }

  render () {
    console.log(this.state.feed, 'feed')
    //CONDITIONAL 1 DEFAULT: Checks if user IS NOT logged in & checks if create user has NOT been selected yet - Renders only the login screen
    if (!this.state.userLoggedIn && !this.state.createUser) {
      return (
        <Login 
          loginUser={this.loginUser} 
          createUserClick={this.createUserClick}
        />
      )
    }
    // CONDITIONAL 2: Create User...Check if this.state create user is true - if so we render user login screen
    if (this.state.createUser) {
      return (
        <CreateUser 
          actualCreate={this.actualCreate} 
        />
      )
    } 
    // CONDITION 3:If user is logged in - we will render the feedContainer
    if (this.state.userLoggedIn) {
      return (
        <section>
          <NavBar 
            AppState={{...this.state}} 
            update={this.updatePosts}
            logout={this.logout}
          />
          <FeedContainer 
            AppState={{...this.state}} 
            update={this.updatePosts}
          />
        </section>
      )
    }
  }
}

export default App;
