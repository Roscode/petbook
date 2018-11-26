import React from 'react';
import {
  Formik, Form, Field, ErrorMessage,
} from 'formik';
import { connect } from 'react-redux';
import { updateUser } from 'api';

function Profile(state) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4 border" align="center">
          <Formik
            initialValues={{
              name: '', age: 0, birthday: '1990-08-08', gender: '',
              species: '', toy: '', treat: ''
            }}
            onSubmit={(values, { setSubmitting }) => {
              let user_id = state.session.user_id;
              updateUser(values, user_id).finally(() => setSubmitting(false));
            }}
          >
            {({ isSubmitting }) => (
              <Form className="form signin-form">
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
                  Create Pet
              </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default connect(state => state)(Profile);