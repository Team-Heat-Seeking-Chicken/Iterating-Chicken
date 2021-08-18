# Actualize

## Description

This app allows users to post about problems that they are having in their lives. The format encourages users to give detailed descriptions not only of the problem, but also of what methods they have tried to solve the problem. This encourages introspection, and an evidence-based approach to problem solving. Additionally, other users can respond to posts with potential solutions, and users can upvote solutions that they think will be effective. The idea behind this is to create a community support structure for people who lack social support networks in their physical location.  
  
In many modern societies, social isolation has increased, and in some communities, the traditional support networks that people would have relied on in the past have weakened. (As an example, services like ["Rental Uncles"](https://ossanrental.thebase.in/) have sprung up in some places--here is an example from Japan--and this shows the need for social connections that many people are experiencing.) We hope that this application will help provide people with the kind of social network to support them in their lives that they may otherwise lack.

### What we improved

- Added a comments feature so that users could respond to others' problems with suggestions and encouragement.
- Added an upvote feature so that the community can influence which responses are displayed at the top of a post, thereby helping posters to more easily find solutions that are widely considered effective.
- Added functionality to preserve sessions so that users would only need to log in once.
- Added OAuth log in feature utilizing Google OAuth.

## Technologies

Project is created with:

- React: 17.0.2
- Express.js: 4.17.1
- npm: 7.19.1
- Mongoose: 5.13.6
- Material-UI: 4.12.3

## Project setup

To run this project, install it locally and using npm:

Development:

```
$ cd Iterating-Chicken
$ npm install
$ npm run dev
```

Production:

```
$ cd Iterating-Chicken
$ npm install
$ npm run build
$ npm start
```