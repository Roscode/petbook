import store from 'store';
import * as a from 'actions';

const mkpath = path => `/api/v1/${path}`;
const jsonData = {
  dataType: 'json',
  contentType: 'application/json; charset=UTF-8',
};

export function post(path, data) {
  return new Promise((resolve, reject) => {
    $.ajax(mkpath(path), {
      ...jsonData,
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
      ...jsonData,
      method: 'get',
      success: resolve,
      faliure: reject,
    });
  });
}

export function createSession(email, password) {
  post('/sessions', { email, password }).then(resp => store.dispatch(a.newSession(resp.json())));
}

export function createUser(email, password, passwordConfirmation) {
  post('/users', { email, password, passwordConfirmation }).then(() => createSession(email, password));
}
