import React from 'react';
import { createPost } from 'api';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import _ from 'lodash';
import { connect } from 'react-redux';

function AddPost(posts) {
    let newsfeed = _.map(posts, (p) => <Post key={p.id} item={p} />)
    return (
        <div>
            <Formik initialValues={{ content: '', pet_id: 1 }}
            onSubmit={(values, { setSubmitting }) => {
                createPost(values).finally(() => setSubmitting(false));
            }}>
            {({ isSubmitting }) => (
                <Form className="form create-post-form">
                <label>
                    Create a post!
                    <Field className="form-control" type="text" name="content"/>
                </label>
                <ErrorMessage name="content" component="div"/>
                <button type="submit" className="btn btn-secondary" disabled={isSubmitting}>Create Post!</button>
                </Form>
                
            )}
            </Formik>
            <div>
                {newsfeed}
            </div>
        </div>
    )
}

export default connect(state => state)(AddPost);

function Post(props) {
    let {item} = props;
    return <div>{item.content}</div>
}