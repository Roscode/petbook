import React from 'react';
import { createPost } from 'api';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import _ from 'lodash';
import { connect } from 'react-redux';

function AddPost(state) {
  // TODO: Filter by friends
  const newsfeed = _.map(state.posts.reverse(), p => <Post key={p.id} item={p} />);
  return (
    <div>
      <Formik
        initialValues={{ content: '' }}
        onSubmit={(values, { setSubmitting }) => {
          const user_id = state.session.user_id;
          values.user_id = user_id;
          // console.log(values);
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
      <div>{newsfeed}</div>
    </div>
  );
}

export default connect(state => state)(AddPost);

function Post(props) {
  const { item, key } = props;
  // console.log(item)
  return (
    <div className="card" key={key}>
      <div className="card-body">
        <h5 className="card-title">{item.user_id}</h5>
        <div className="card-text ml-4">{item.content}</div>
        <div className="card-text ml-4">
          Likes
          {item.likes}
        </div>
        <button type="submit" className="btn btn-primary ml-4">
          Like
        </button>
      </div>
    </div>
  );
}
