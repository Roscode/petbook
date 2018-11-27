import React from 'react';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { connect } from 'react-redux';
import { updateUser } from 'api';

function Profile({
  userId, user: {
    name, age, birthday, gender, species, toy, treat,
  },
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 border" align="center">
          <Formik
            initialValues={{
              name: name || '',
              age: age || 0,
              birthday: birthday || '',
              gender: gender || '',
              species: species || '',
              toy: toy || '',
              treat: treat || '',
            }}
            onSubmit={(values, { setSubmitting }) => updateUser(values, userId)
              .finally(() => setSubmitting(false))
            }
          >
            {({ isSubmitting }) => (
              <Form className="form signin-form">
                <h4>Fill out your Profile</h4>
                <div className="form-group">
                  <label>
                    Name:
                    <Field className="form-control" type="text" name="name" />
                  </label>
                </div>
                <ErrorMessage name="name" component="div" />
                <div className="form-group">
                  <label>
                    Age:
                    <Field className="form-control" type="number" min="0" name="age" />
                  </label>
                </div>
                <ErrorMessage name="age" component="div" />
                <div className="form-group">
                  <label>
                    Birthday:
                    <Field className="form-control" type="date" max="2018-11-24" name="birthday" />
                  </label>
                </div>
                <ErrorMessage name="birthday" component="div" />
                <div className="form-group">
                  <label>
                    Gender:
                    <Field className="form-control" type="text" name="gender" />
                  </label>
                </div>
                <ErrorMessage name="gender" component="div" />
                <div className="form-group">
                  <label>
                    Species:
                    <Field className="form-control" type="text" name="species" />
                  </label>
                </div>
                <ErrorMessage name="species" component="div" />
                <div className="form-group">
                  <label>
                    Favorite Toy:
                    <Field className="form-control" type="text" name="toy" />
                  </label>
                </div>
                <ErrorMessage name="toy" component="div" />
                <div className="form-group">
                  <label>
                    Favorite Treat:
                    <Field className="form-control" type="text" name="treat" />
                  </label>
                </div>
                <ErrorMessage name="treat" component="div" />

                <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

function loadingBarrier(props) {
  const { user } = props;
  if (!user) {
    return <div>Loading...</div>;
  }
  return <Profile {...props} />;
}

export default connect(({ session: { user_id: userId }, users }) => ({
  user: users[userId],
  userId,
}))(loadingBarrier);
