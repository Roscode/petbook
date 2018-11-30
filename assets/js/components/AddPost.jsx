import React from 'react';
import { createPost } from 'api';
import { createLike } from 'api';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import _ from 'lodash';
import { connect } from 'react-redux';

function AddPost({ userId, posts, users }) {
  return (
    <div>
      <Formik
        initialValues={{ user_id: userId, content: '' }}
        onSubmit={(values, { setSubmitting }) => {
          createPost(values).finally(() => setSubmitting(false));
        }}
      >
        {({ isSubmitting }) => (
          <Form className="form create-post-form ml-3 pt-3">
            <label>
              Create a post!
              <Field className="form-control" type="text" name="content" />
            </label>
            <ErrorMessage name="content" component="div" />
            <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>
              Create Post!
            </button>
          </Form>
        )}
      </Formik>
      <div>
        {// TODO filter by friends, order by created date
          _.map(posts.reverse(), p => (
            <Post key={p.id} {...p} user={users[p.user_id]} />
          ))}
      </div>
    </div>
  );
}

export default connect(({ session: { user_id: userId }, posts, users }) => ({
  userId,
  users,
  posts,
}))(AddPost);

// TODO replace userId with author name by preloading users
function Post({
  content, user, likes,
}) {
  function LikeAlert() {
    alert("Post Liked");
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{user.name}</h5>
        <div className="card-text ml-4">{content}</div>
        <div className="card-text ml-4">
          {likes}
        </div>
        <button type="submit"
          className="btn btn-primary ml-4"
          onClick={() => LikeAlert()}>
          Like
        </button>
      </div>
    </div>
  );
}


