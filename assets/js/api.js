import store from 'store';
import * as a from 'actions';

const mkpath = path => `/api/v1/${path}`;

export function post(path, data) {
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

export function createSession({ email, password }) {
  return post('sessions', { email, password }).then(({ data }) => store.dispatch(a.newSession(data)));
}

export function createUser(user) {
  return post('users', { user }).then(() => createSession(user));
}

export function googleSignIn(idToken) {
  return post('sessions', { idToken }).then(({ data }) => store.dispatch(a.newSession(data)));
}

export function createPet(pet) {
  return post('pets', { pet });
}
