import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

function FindFriends({ userId, posts }) {
  return (
    <div><p>Yep you got me</p></div>
  );
}

export default connect(({ session: { user_id: userId }, posts }) => ({
  userId,
  posts,
}))(FindFriends);

//TODO put in what a friend should look like, will need to grab all users and then filter
function Friend({ content, user_id: userId, likes }) {
  
}
