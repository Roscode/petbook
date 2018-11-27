import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header';
import AddPost from 'components/AddPost';
import Profile from 'components/Profile';
import FindFriends from 'components/FindFriends';

const Petbook = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Profile} />
      <Route path="/newsfeed" component={AddPost} />
      <Route path="/friends" component={FindFriends} />
    </div>
  </Router>
);

export default Petbook;
