import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from 'components/Header';
import AddPost from 'components/AddPost';
import Profile from 'components/Profile';

const Petbook = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={Profile} />
      <Route path="/newsfeed" component={AddPost} />
    </div>
  </Router>
);

export default Petbook;
