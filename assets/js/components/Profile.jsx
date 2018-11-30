import React from 'react';

import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { connect } from 'react-redux';
import { updateUser, loadUsers } from 'api';

function Profile({
  userId, user: {
    name, age, birthday, gender, species, toy, treat,
  },
}) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8">
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
                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Name: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="text" name="name" />
                  </div>
                </div>
                <ErrorMessage name="name" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Age: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="number" min="0" name="age" />
                  </div>
                </div>
                <ErrorMessage name="age" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Birthday: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="date" max="2018-11-24" name="birthday" />
                  </div>
                </div>
                <ErrorMessage name="birthday" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Gender: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="text" name="gender" />
                  </div>
                </div>
                <ErrorMessage name="gender" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Species: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="text" name="species" />
                  </div>
                </div>
                <ErrorMessage name="species" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Fave Toy: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="text" name="toy" />
                  </div>
                </div>
                <ErrorMessage name="toy" component="div" />

                <div className="form-group row">
                  <label className="col-sm-2 col-form-label"> Fave Treat: </label>
                  <div className="col-sm-10">
                    <Field className="form-control" type="text" name="treat" />
                  </div>
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
    loadUsers();
    return <div>Loading...</div>;
  }
  return <Profile {...props} />;
}

export default connect(({ session: { user_id: userId }, users }) => ({
  user: users[userId],
  userId,
}))(loadingBarrier);
