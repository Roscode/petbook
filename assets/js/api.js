import store from 'store';
import * as a from 'actions';

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

export function updateUser(user, userId) {
  return put(`users/${userId}`, { user }).then(data => console.log(data)); // eslint-disable-line no-console
}

export function fetchPosts() {
  console.log("fetching")
  return get('posts').then(({ data }) => store.dispatch(a.postList(data)));
}

export function createPost(post) {
  console.log("post")
  return sendPost('posts', { post }).then(() => fetchPosts());
  console.log("created")
}

export function googleSignIn(idToken) {
  return sendPost('sessions', { idToken }).then(({ data }) => store.dispatch(a.newSession(data)));
}
