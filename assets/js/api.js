import store from 'store';
import * as a from 'actions';
import _ from 'lodash';

const mkpath = path => `/api/v1/${path}`;

export function sendPost(path, data) {
  return new Promise((resolve, reject) => {
    $.ajax(mkpath(path), {
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      method: 'post',
      data: JSON.stringify(data),
      success: resolve,
      failure: reject,
    });
  });
}

export function get(path) {
  return new Promise((resolve, reject) => {
    $.ajax(mkpath(path), {
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      method: 'get',
      success: resolve,
      faliure: reject,
    });
  });
}

export function put(path, data) {
  return new Promise((resolve, reject) => {
    $.ajax(mkpath(path), {
      dataType: 'json',
      contentType: 'application/json; charset=UTF-8',
      method: 'put',
      data: JSON.stringify(data),
      success: resolve,
      faliure: reject,
    });
  });
}

export function createSession({ email, password }) {
  return sendPost('sessions', { email, password }).then(({ data }) => store.dispatch(a.newSession(data)));
}

export function createUser(user) {
  return sendPost('users', { user }).then(() => createSession(user));
}

export function loadUsers() {
  return get('users').then(({ data }) => store.dispatch(a.userList(data)));
}

export function updateUser(user, userId) {
  return put(`users/${userId}`, { user }).then(() => loadUsers());
}

export function fetchPosts() {
  return get('posts').then(({ data }) => store.dispatch(a.postList(data)));
}

export function fetchUsers() {
  return get('users').then(({data}) => data);
}

export function createPost(post) {
  return sendPost('posts', { post }).then(() => fetchPosts());
}

export function googleSignIn(idToken) {
  return sendPost('sessions', { idToken }).then(({ data }) => store.dispatch(a.newSession(data)));
}

export function fetchFriends(user_id) {
  console.log("fetching friends", user_id)
  let user = fetchUsers().then(({data}) => {
                console.log("found users", data);
                let user = _.find(data, (user) => {
                  user.id == user_id
                });
                console.log("found user", user);
                return user.friends
              });
  return user;
}

export function checkNewPost({ by: authorId }) {
  const state = store.getState();
  if (!state.session) {
    return;
  }
  if (!state.session.user_id) {
    return;
  }
  if (state.session.user_id === authorId) {
    return;
  }
  loadUsers().then(() => fetchPosts());
}
