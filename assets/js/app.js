/* eslint-disable */
// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import dependencies
//
import 'phoenix_html';
import jQuery from 'jquery';
import 'bootstrap';
import _ from 'lodash';

// Import local files
//
// Local files can be imported directly using relative paths, for example:
import { channel } from "./socket"

import store from 'store';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Root from 'root';
import { fetchPosts, loadUsers, checkNewPost } from 'api';
import css from '../css/app.scss';

window.jQuery = window.$ = jQuery;

window.onload = () => {
  fetchPosts();
  loadUsers();
  channel.on('newPost', by => checkNewPost(by));
  const node = document.getElementById('root');
  ReactDOM.render(
    <Provider store={store}>
      <Root channel={channel} />
    </Provider>,
    node,
  );
};
