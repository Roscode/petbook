import store from './store';

const jsonContent = {
    'Content-Type': 'application/json; charset=utf-8'
}

const mkpath = (path) => `/api/v1/${path}`

export function post(path, data) {
    return fetch(mkpath(path), {
        method: 'POST',
        headers: {...jsonContent},
        body: JSON.stringify(data)
    });
}

export function get(path) {
    return fetch(mkpath(path));
}
