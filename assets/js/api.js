import store from 'store';
import * as a from 'actions';

const mkpath = path => `/api/v1/${path}`;

export function post_out(path, data) {
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

function sessionFinish(data) {
  store.dispatch(a.justCreated(1));
  store.dispatch(a.newSession(data));
}

export function createSession({ email, password }) {
  return post_out('sessions', { email, password }).then(({ data }) => sessionFinish(data));
}

export function createUser(user) {
  return post_out('users', { user }).then(() => createSession(user));
}

export function createPost(post) {
  return post_out('posts', { post }).then(({ data }) => fetchPosts());;
}

export function fetchPosts() {
  return get('posts').then(({ data }) => store.dispatch(a.postList(data)));
}

export function googleSignIn(idToken) {
  return post_out('sessions', { idToken }).then(({ data }) => store.dispatch(a.newSession(data)));
}
