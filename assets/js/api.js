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

function createFinish(data) {
  createSession(data);
  store.dispatch(a.justCreated(1));
}

export function createUser(user) {
  return sendPost('users', { user }).then(() => createFinish(user));
}


export function updateUser(user, userId) {
  return put(`users/${userId}`, { user }).then(() => store.dispatch(a.justCreated(null)));
}

export function fetchPosts() {
  return get('posts').then(({ data }) => store.dispatch(a.postList(data)));
}

export function createPost(post) {
  return sendPost('posts', { post }).then(() => fetchPosts());
}

export function googleSignIn(idToken) {
  return sendPost('sessions', { idToken }).then(({ data }) => store.dispatch(a.newSession(data)));
}
