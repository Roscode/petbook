import React from 'react';
import { createPost } from 'api';
import {
    Formik, Form, Field, ErrorMessage,
} from 'formik';
import _ from 'lodash';
import { connect } from 'react-redux';

function AddPost(state) {
    // TODO: Filter by friends
    let newsfeed = _.map(state.posts.reverse(), (p) => <Post key={p.id} item={p} />)
    return (
        <div>
            <Formik initialValues={{ content: '' }}
                onSubmit={(values, { setSubmitting }) => {
                    let user_id = state.session.user_id;
                    values.user_id = user_id;
                    console.log(values);
                    createPost(values).finally(() => setSubmitting(false));
                }}>
                {({ isSubmitting }) => (
                    <Form className="form create-post-form">
                        <label>
                            Create a post!
                    <Field className="form-control" type="text" name="content" />
                        </label>
                        <ErrorMessage name="content" component="div" />
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
    let { item, key } = props;
    return <div className="ml-4" key={key}>{item.content}</div>
}