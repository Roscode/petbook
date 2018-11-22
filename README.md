# Petbook

## Getting set up

To start petbook follow the steps below:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Install Node.js dependencies with `cd assets && yarn`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser to see petbook

## TODO

### Project Requirements Tally

 - [x] In general, this application should be significantly more ambitious and have more features and functions than either the memory game or the task tracker app.
 - [x] The server side logic of your app must be built using Elixir / Phoenix.
 - [ ] Your application must have significant server-side logic.
 - [ ] Your app must be deployed to the VPS of one or more members of your team.
 - [x] If you can self-host things on your VPS, you should. For example, don't use an asset from a CDN when you can put it in your webpack bundle.
 - [x] Your application should have user accounts, and should support local password authentication (implemented securely).
 - [x] Users should be stored in a Postgres database, along with some other persistent state.
 - [ ] Your application should use an external API that requires authentication of your app, your app's user, or both.
 - [ ] Any API access should be server <-> server. Your browser code should only make requests to your server, not remote APIs.
 - [ ] Your application should use Phoenix Channels to push realtime updates to users, triggered either from an external API or from actions by other concurrent users.
 - [x] You should work with a team of 2-4 people; everyone is responsible for and should contribute to all aspects of the project, both code and the presentation.
 - [ ] Write the Project Submission Document

### TODO

These are the things we need to try to do at a high level:

#### Add Google Sign In
We need to add a google sign in button to the login page.

#### Add Profiles
We need a react component which shows a searchable list of all the pets in the database, Clicking on the name of a pet in the list should take you to a "users/:pet-id" route which shows the profile for that particular pet.
For this the fields of a profile can be anything, but definitely at least name and profile picture.

#### Add Posts
We need a react component which contains a form and allows one to write a post. For now posts should probably just be text for simplicity. When a post is created it should be associated with the user who created it.

As part of this we'll also want a "feed" component which shows a selection of posts, possibly just the latest by anyone for now but eventually we can add the concept of friendship and show only your friends' posts.

#### Add chats
If we don't make feeds update in real time (which I don't think we should) we'll need to implement chat rooms so as to make use of phoenix channels. This will probably be easiest if we have like a "chat/:room" route which just shows a chat and connects you to the "chat:room" topic in the phoenix channel

#### Stylize
Everything looks very ugly right now, if someone wants to go through and make it looks nice that would be awesome!
