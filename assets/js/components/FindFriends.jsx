import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as api from 'api';

function FindFriends({ userId, users }) {
  return (
    <div><p>Check yo console</p>
    {// TODO filter by people already friends
        _.map(users, f => (
          <Friend key={f.id} friend={f} />
        ))}
    </div>
  );
}

export default connect(({ session: { user_id: userId }, users }) => ({
  userId,
  users
}))(FindFriends);

//TODO put in what a potential friend should look like
function Friend(friend) {
  return (
    <div>
      <p>{friend.friend1}</p>
      <p>{friend.friend2}</p>
    </div>
  )
}
