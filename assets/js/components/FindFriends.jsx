import React from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import * as api from 'api';

function FindFriends({ userId }) {
  let friends = api.fetchFriends(userId).then(({data}) => console.log(data));
  return (
    <div><p>Check yo console</p>
    {// TODO filter by friends, order by created date
        _.map(friends, f => (
          <Friend key={f.id} {...f} />
        ))}
    </div>
  );
}

export default connect(({ session: { user_id: userId } }) => ({
  userId,
}))(FindFriends);

//TODO put in what a friend should look like, will need to grab all users and then filter
function Friend(friend) {
  return (
    <p>{friend.id}</p>
  )
}
